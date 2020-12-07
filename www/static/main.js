function initialize (tile_fetcher) {
    console.log("initialize function")

    var map = L.map('map').setView([40.32, -98.58], 5);

    L.tileLayer(tile_fetcher, {
        maxZoom: 18,
    }).addTo(map);

    return map
}
