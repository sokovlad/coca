export const useMap = () => {
  initMap();
  async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;
    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = ymaps3;
    // Иницилиазируем карту
    const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById('map'),
      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [37.588144, 60.733842],
          // Уровень масштабирования
          zoom: 1.5,
        },
      },
    );
    // Добавляем слой для отображения схематической карты

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    const markerElement = document.createElement('div');
    const markerIcon = document.createElement('img');
    markerIcon.src = '../assets/icons/maps-location-icon.svg';
    markerElement.className = 'hero__map-marker';

    const marker = new YMapMarker(
      {
        coordinates: [130.588144, -22.133842],
      },
      markerElement,
    );
    markerElement.append(markerIcon);
    map.addChild(marker);
  }
};
