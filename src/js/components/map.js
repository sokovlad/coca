export const useMap = () => {
  let themeColor = '#1d1e25';
  if (document.body.dataset.theme === 'dark') {
    themeColor = '#1d1e25';
    initMap();
  } else if (document.body.dataset.theme === 'light') {
    themeColor = '#fff';
    initMap();
  }
  // initMap();
  async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;
    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
      // YMapFeature,
    } = ymaps3;
    // Иницилиазируем карту
    const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById('map'),
      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [5.588144, 20.733842],
          // Уровень масштабирования
          zoom: 1.9,
        },
        mode: 'vector',
        type: 'yandex#dark',
      },
    );
    // Добавляем слой для отображения схематической карты
    const layer = new YMapDefaultSchemeLayer({
      customization: [
        {
          tags: {
            all: ['water'],
          },
          elements: 'geometry',
          stylers: [
            {
              color: themeColor,
            },
          ],
        },
        {
          tags: {
            all: ['landscape'],
          },
          elements: 'geometry.fill',
          stylers: [
            {
              color: '#ACACB9',
            },
          ],
        },
        {
          tags: {
            all: ['landscape'],
          },
          elements: 'geometry.outline',
          stylers: [
            {
              color: '#FFF',
            },
          ],
        },
      ],
    });

    map.addChild(layer);
    map.addChild(new YMapDefaultFeaturesLayer());

    const markerElement = document.createElement('div');
    markerElement.classList.add('hero__map-marker', 'hero__marker');

    const markerWindow = document.createElement('div');
    markerWindow.classList.add('hero__marker-window');

    const markerTitle = document.createElement('h3');
    markerTitle.classList.add('hero__marker-title');
    markerTitle.textContent = 'Yogja, INA';

    const markerDescr = document.createElement('p');
    markerDescr.classList.add('hero__marker-descr');
    markerDescr.textContent = '100 Smith Street Collingwood VIC 3066AU';

    const markerIcon = document.createElement('img');
    markerIcon.src = '../assets/icons/maps-location-icon.svg';

    const marker = new YMapMarker(
      {
        coordinates: [125.588144, -10.133842],
      },
      markerElement,
    );
    markerWindow.append(markerTitle, markerDescr);
    markerElement.append(markerIcon, markerWindow);
    map.addChild(marker);
  }
};
