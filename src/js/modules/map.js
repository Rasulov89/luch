

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.446012, 55.821957],

                // Уровень масштабирования
                zoom: 15
            }
        }
    );
    
    
    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    const mapLogo = document.createElement('img');
    mapLogo.src = './img/map/logo.svg';
    const markerElement = document.createElement('div');
        markerElement.className = 'map-marker';
        // markerElement.innerText = "I'm marker!";
    markerElement.append(mapLogo);
    const marker = new YMapMarker(
        {
            // source: 'markerSource',
            coordinates: [37.446012, 55.821957],
            // draggable: true,
            // mapFollowsOnDrag: true
        },
        markerElement
    );

    map.addChild(marker);
}

export default initMap;