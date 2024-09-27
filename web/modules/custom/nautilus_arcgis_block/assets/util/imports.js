/* global require (dojo.require) */

export async function requireModules(modules) {
    // Create an object mapping the imports to their module name so that we don't have to keep track
    // of load order
    return new Promise(resolve => {
        require(modules, function(...imports) {
            const importMapping = imports.reduce((memo, item, idx) => {
                const moduleName = modules[idx].split('/').pop();
                memo[moduleName] = item
                return memo;
            }, {});
            resolve(importMapping);
        });
    });
}
