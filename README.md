# nautilus-arcgis-map-dev

This Drupal installation profile was created to facilitate development of a custom module that displays web maps using the ArcGIS API. The module itself lives in `web/modules/custom/nautilus_arcgis_block`.

## Installation

1. Clone the repo.
2. From your project directory, run `composer install`
3. `cd web/modules/custom/nautilus_arcgis_block/`
4. `npm install`
5. `npm run test`
6. Open your project in a browser to start the Drupal installation.
7. Select the 'Nautilus ArcGIS Map Dev' installation profile.

Follow the rest of the Drupal installation instructions.

After installation, you should see the welcome screen with the ship location map. Use the admin toolbar to select `Structure > Taxonomy > Cruise`. Add a few cruise terms using valid Nautilus cruise IDs as the name.