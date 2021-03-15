var doCache = true;

// Имя кэша
var CACHE_NAME = 'react-chat-cache';

// Очищает старый кэш
window.self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
      caches.keys()
          .then(keyList =>
              Promise.all(keyList.map(key => {
                  if (!cacheWhitelist.includes(key)) {
                      console.log('Deleting cache: ' + key);
                      return caches.delete(key);
                  }
              }))
          )
  );
});

// 'install' вызывается, как только пользователь впервые открывает PWA
window.self.addEventListener('install', function(event) {
  if (doCache) {
      event.waitUntil(
          caches.open(CACHE_NAME)
              .then(function(cache) {
                  // Получаем данные из манифеста (они кэшируются)
                  fetch('./public/manifest.json')
                      .then(response => {
                          response.json()
                      })
                      .then(assets => {
                          console.log(assets);
                      // Открываем и кэшируем нужные страницы и файлы
                          const urlsToCache = [
                              '',
                              '/chats/*',
                            ];
                            cache.addAll(urlsToCache);
                            console.log('cached');
                        })
                })
        );
    }
  });
  
  // Когда приложение запущено, service worker перехватывает запросы и отвечает на них данными из кеша, если они есть
  window.self.addEventListener('fetch', function(event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
        );
    }
  });
  