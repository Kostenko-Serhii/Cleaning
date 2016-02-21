ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.900255, 30.368265],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Санкт-Петербург, ул. Пушкина 15а ',
            balloonContent: 'Это красивая метка'
        }, {
                        // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pointer.png',
            // Размеры метки.
            iconImageSize: [47, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });

    myMap.geoObjects.add(myPlacemark);
});