'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "27c43637e7e2aebcb94414ee3a853fed",
"index.html": "3c30afa1c75653adc0b58d792d2abe73",
"/": "3c30afa1c75653adc0b58d792d2abe73",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "627d68dd0d598c4a426f2952e2ecaa25",
"assets/assets/paths/path_thorn.json": "25c77a4ed850b5f4dc625aec995e383e",
"assets/assets/paths/path_dust.json": "374036f186c28f6a877c5a098ff48871",
"assets/assets/paths/path_bloom.json": "c783e4e4d2f35862ddd6803a1031594d",
"assets/assets/paths/path_nightmare.json": "dbf748a1b77edabfa77d98d1e907948f",
"assets/assets/paths/path_needle.json": "79d065089b27e5a7b8c87b87fc4be605",
"assets/assets/paths/path_maw.json": "1c6482738d047ea3866d5c77cad637b1",
"assets/assets/paths/path_flask.json": "d99434a79ecb6c9f7aebf18e9062b0e8",
"assets/assets/paths/path_spire.json": "91f013af43ee8b4bb3195824245e6d21",
"assets/assets/paths/path_dream.json": "a49dc1a1b1223cf3bc5ec6e4d85742f1",
"assets/assets/paths/path_shell.json": "87892bae020ec00da437052926e2782b",
"assets/assets/paths/path_cloak.json": "d962ba89a208c25a1c8dfced4a1724e2",
"assets/assets/paths/path_hook.json": "cd64447358e69b13c5d2c117143dca49",
"assets/assets/paths/path_nail.json": "ce26c6645a62bc98f642bfad890a42e0",
"assets/assets/paths/path_tusk.json": "b15c81a6e91a8cc39a8835357388e10c",
"assets/assets/paths/path_sling.json": "099a5be0424454decdf9f85ad614cc1c",
"assets/assets/techniques/weapon_arts_general.json": "b26e1b1e745997ebdb89358392d438bd",
"assets/assets/techniques/weapon_arts_sling.json": "f4b2035d74316e9e6d6a68bc5dd80e00",
"assets/assets/techniques/weapon_arts_hook.json": "9891632c23e038bde1fa3b01fc3909c4",
"assets/assets/techniques/arcana_art_dream.json": "87de1c1c710ae80c3b84a4f37d6e1515",
"assets/assets/techniques/weapon_arts_needle.json": "e1d324843199f4241daab1438836cb3c",
"assets/assets/techniques/weapon_arts_shield.json": "6e99e5e978d39078b474edb6d6aea38a",
"assets/assets/techniques/arcana_art_thorn.json": "58d64c6a9542873fa4bf03b252771057",
"assets/assets/techniques/arcana_art_spire.json": "cf511e0625b2dc483e3ad0c385374727",
"assets/assets/techniques/arcana_art_bloom.json": "dbbc963fee0f74a9927ff8de8856f14b",
"assets/assets/techniques/weapon_arts_unnarmed.json": "d2bd991f6fd7faf022e6a2501573fe65",
"assets/assets/techniques/weapon_arts_natural.json": "c0865a8f60fc5aaa1a67df8e2e080566",
"assets/assets/techniques/weapon_arts_nail.json": "76d96e669c4bf974a3aab9e5d36ffff5",
"assets/assets/techniques/arcana_art_nightmare.json": "1647a54b59ec9ad58bed47019391fddc",
"assets/assets/techniques/weapon_arts_counter.json": "0f1ec147d0705083feb1a37b99acfb94",
"assets/assets/techniques/weapon_arts_tusk.json": "246fa2507d6dfb4287a94e7bb54fd344",
"assets/assets/techniques/arcana_art_cloak.json": "5596c91adb3abef296cb85b952d6fd7d",
"assets/assets/techniques/arcana_art_dust.json": "03d17b00a14079ce1d1f2a8447d03a8a",
"assets/assets/traits/sense.json": "f47a6e0566902918e4071cf22ac884ca",
"assets/assets/traits/natural_defense.json": "5a6dc8858c1667b24979cf2233e2a06c",
"assets/assets/traits/natural_weapon.json": "75f6dc2a1f8ea5dd9499cff134f23459",
"assets/assets/traits/physiological.json": "c5c3c2ec262a3b094d02a8ca204114b1",
"assets/assets/traits/mystical.json": "e0ba32baecbb6636700cd1fb065b3a44",
"assets/assets/traits/attribute.json": "b84c61681724894c5ee6cc1eebd19b59",
"assets/assets/traits/mental.json": "4ae06444ce8528b937772f0f6f848395",
"assets/assets/traits/body.json": "356a8b079f1da25fc3597968827f2f98",
"assets/assets/traits/movement.json": "0bd63dc6f86e671fe99f12dc6e93bae8",
"assets/assets/equipment/gear_consumable_traps.json": "27d38182a84470f0f3570f26b5cbcbc2",
"assets/assets/equipment/gear_consumable_potion.json": "f468d521d9ac41daaa993468a56c1f00",
"assets/assets/equipment/gear_weapons.json": "b2d2a32084e0ef4776c633fa17fb7c1b",
"assets/assets/equipment/gear_charms_weaponArts.json": "99cc9d8ea65de8ba8cf4b2c03db32828",
"assets/assets/equipment/gear_shield.json": "0f7e0a154ba9ee1b0809c28293906495",
"assets/assets/equipment/gear_charms_magic.json": "dff4859a5369449821c0561b86a70b27",
"assets/assets/equipment/gear_charms_combat.json": "fdda4306a4c0a8d9119c3c0dac04ad9c",
"assets/assets/equipment/gear_arcane_foci.json": "f370841d60d51da9d07e62f3f7db86a4",
"assets/assets/equipment/gear_armor.json": "8d6a5bab3fc8cba1ad466501025c4944",
"assets/assets/equipment/gear_consumable_food.json": "8623aa224625294c9c8ab67f7deb6456",
"assets/assets/equipment/gear_consumable_poison.json": "bce5f8e2022f45afd3f018792f36620e",
"assets/assets/equipment/gear_charms_path.json": "ca8981d84678ff1beaddcf487b435ff1",
"assets/assets/equipment/gear_consumable_flasks.json": "e8ab8cb13c656219c3e388ac6df2b0e1",
"assets/assets/equipment/gear_charms_general.json": "6c3840f0cf5852e338d55ec6377a1335",
"assets/assets/equipment/gear_charms_social.json": "4b5bb1abdb6b7d52abfd5ae59511e8ba",
"assets/fonts/MaterialIcons-Regular.otf": "ab64cdf9ba3e337222c53944bf645f25",
"assets/NOTICES": "16ea56cd887740a1b6be1fcb9bf6fc2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "b16f4619b32517ba21e4549e2b9bda91",
"assets/AssetManifest.json": "1af22e0b05483444b905efdc54f4f976",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "a307e81aae5560257bf376d39e89ef58",
"version.json": "402aae3e1fce99bf4a2d70a35f9601d1",
"main.dart.js": "8b0e2a4d2327b0a9dfbae5fe5256cb80"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
