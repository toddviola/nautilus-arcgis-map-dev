<?php

declare(strict_types=1);

namespace Drupal\nautilus_arcgis_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\taxonomy\Entity\Term;

/**
 * Provides a cruise data map block.
 *
 * @Block(
 *   id = "nautilus_arcgis_block_cruise_data_map",
 *   admin_label = @Translation("Cruise data map"),
 *   category = @Translation("ArcGIS map"),
 * )
 */
final class CruiseDataMapBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {
    return [
      'example' => $this->t('Hello world!'),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state): array {
    $form['example'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Example'),
      '#default_value' => $this->configuration['example'],
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state): void {
    $this->configuration['example'] = $form_state->getValue('example');
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {

    $example_setting = $this->configuration['example'];

    // If block appears on a taxonomy term page, get the term name.
    $params = \Drupal::routeMatch()->getParameters()->all();
    $context_expedition_name = "";
    if (isset($params['taxonomy_term'])) {
      $context_expedition_name = $params['taxonomy_term']->getName();
    }

    // Attach mapping javascript library and pass term name as a setting.
    $build['#attached'] = [
      'library' => [
        'nautilus_arcgis_block/cruise-data'
      ],
      'drupalSettings' => [
        'cruiseName' => $context_expedition_name,
      ]
    ];

    // Make sure the block is cached per URL, not globally.
    $build['#cache'] = [
      'contexts' => [
        'url.path'
      ]
    ];

    // Include map container div in block content.
    $build['content'] = [
      '#markup' =>
        '<section>
          <div data-drupal-messages></div>
          <div id="cruise-data-map-container" class="arcgis-map"></div>
        </section>',
    ];

    return $build;
  }

}
