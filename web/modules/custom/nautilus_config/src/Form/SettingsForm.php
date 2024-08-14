<?php

namespace Drupal\nautilus_config\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class SettingsForm.
 */
class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'nautilus_config.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'settings_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('nautilus_config.settings');
    $term = $config->get('current_expedition');
    if (!empty($term)) {
      $term = \Drupal\taxonomy\Entity\Term::load($term);
    }
    $form['current_expedition'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Current expedition'),
      '#description' => $this->t('Enter the ID for the current expedition.'),
      '#size' => 20,
      '#target_type' => 'taxonomy_term',
      '#selection_handler' => 'default', // Optional. The default selection handler is pre-populated to 'default'.
      '#selection_settings' => array(
        'target_bundles' => array('cruise'),
      ),
      '#default_value' => $term,
    ];
    $form['ship_time_zone'] = [
      '#type' => 'select',
      '#title' => $this->t('Ship time zone'),
      '#description' => $this->t('Specify the timezone offset from Coordinated Universal Time (UTC) for the ship&#039;s current location. For example, Hawaii Standard Time is UTC-10.'),
      '#options' => [
        -12 => $this->t('UTC-12:00'), 
        -11 => $this->t('UTC-11:00'), 
        -10 => $this->t('UTC-10:00, HST'), 
        -9 => $this->t('UTC-9:00'), 
        -8 => $this->t('UTC-8:00'), 
        -7 => $this->t('UTC-7:00, PDT'), 
        -6 => $this->t('UTC-6:00'), 
        -5 => $this->t('UTC-5:00, CDT'), 
        -4 => $this->t('UTC-4:00, EDT'), 
        -3 => $this->t('UTC-3:00'), 
        -2 => $this->t('UTC-2:00'), 
        -1 => $this->t('UTC-1:00'),
        0 => $this->t('UTC+0:00, UTC'),
        1 => $this->t('UTC+1:00'), 
        2 => $this->t('UTC+2:00'), 
        3 => $this->t('UTC+3:00'), 
        4 => $this->t('UTC+4:00'), 
        5 => $this->t('UTC+5:00'), 
        6 => $this->t('UTC+6:00'), 
        7 => $this->t('UTC+7:00'), 
        8 => $this->t('UTC+8:00'), 
        9 => $this->t('UTC+9:00'), 
        10 => $this->t('UTC+10:00'), 
        11 => $this->t('UTC+11:00'), 
        12 => $this->t('UTC+12:00'), 
        13 => $this->t('UTC+13:00'), 
        14 => $this->t('UTC+14:00')
      ],
      '#size' => 1,
      '#default_value' => $config->get('ship_time_zone'),
    ];
    $form['homepage_mode'] = [
      '#type' => 'select',
      '#title' => $this->t('Homepage mode'),
      '#description' => $this->t('Select the homepage display mode'),
      '#options' => [
        'nautilus-live' => $this->t('Live Nautilus video'), 
        'no-live-video' => $this->t('No live video / offseason'), 
        'mobile-system-live' => $this->t('Mobile system live video')
      ],
      '#size' => 1,
      '#default_value' => $config->get('homepage_mode'),
    ];
    $form['homepage_highlight_video'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Homepage highlight video'),
      '#description' => $this->t('Select the video highlights to display on the offseason homepage.'),
      '#target_type' => 'node',
      '#selection_handler' => 'default', // Optional. The default selection handler is pre-populated to 'default'.
      '#selection_settings' => array(
        'target_bundles' => array('video'),
      ),
      '#states' => [
        //show this field if the 'no-live-video' is selected above
        'visible' => [
          ':input[name="homepage_mode"]' => ['value' => 'no-live-video'],
        ],
      ],
      '#default_value' => ($config->get('homepage_highlight_video') ? \Drupal::entityTypeManager()->getStorage('node')->load($config->get('homepage_highlight_video')) : NULL),
    ];
    $form['display_message_form'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Display the Q&amp;A message form on the homepage'),
      '#description' => $this->t('This setting hides the form entirely. Use the toggle on the <a href="/admin/messages"
        >New Messages</a> page to indicate science team availability.'),
      '#default_value' => $config->get('display_message_form'),
    ];
    // $form['show_alert'] = [
    //   '#type' => 'checkbox',
    //   '#title' => $this->t('Show an alert on the homepage'),
    //   '#description' => $this->t(''),
    //   '#default_value' => $config->get('show_alert'),
    // ];
    // $form['alert_text'] = [
    //   '#type' => 'text_format',
    //   '#title' => $this->t('Alert text'),
    //   '#description' => $this->t('Add an alert message to the top of the homepage.'),
    //   '#format' => 'filtered',
    //   '#rows' => 3,
    //   '#states' => [
    //     //show this field if the 'no-live-video' is selected above
    //     'visible' => [
    //       ':input[name="show_alert"]' => ['checked' => TRUE],
    //     ],
    //   ],
    //   '#default_value' => $config->get('alert_text'),
    // ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('nautilus_config.settings')
      ->set('display_message_form', $form_state->getValue('display_message_form'))
      ->set('homepage_mode', $form_state->getValue('homepage_mode'))
      ->set('ship_time_zone', $form_state->getValue('ship_time_zone'))
      ->set('current_expedition', $form_state->getValue('current_expedition'))
      ->set('homepage_highlight_video', $form_state->getValue('homepage_highlight_video'))
      ->set('alert_text', $form_state->getValue('alert_text'))
      ->set('data_archive_url', $form_state->getValue('data_archive_url'))
      ->save();
  }

}
