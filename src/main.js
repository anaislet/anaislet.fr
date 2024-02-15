const mapbox = new ol.layer.Tile({
    source: new ol.source.XYZ({
        tileSize: [256, 256],
        url: 'https://api.mapbox.com/styles/v1/adrienvh/cl7923v83000m14mrmri65tyj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRyaWVudmgiLCJhIjoiU2lDV0N5cyJ9.2pFJAwvwZ9eBKKPiOrNWEw'
    })
})

const epitechSource = new ol.source.Vector({ projection: 'EPSG:3857' })
const feature = new ol.Feature({})
feature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat([2.3631677114721135, 48.81547547529164])))
epitechSource.addFeature(feature)
const epitech = new ol.layer.Vector({
    source: epitechSource,
    style: new ol.style.Style({
        image: new ol.style.Circle({
            stroke: new ol.style.Stroke({color: 'white', width: 2}),
            fill: new ol.style.Fill({color: '#7a7d68'}),
            radius: 8
        })
    })
})

var carte = new ol.Map({
    interactions: ol.interaction.defaults({
        doubleClickZoom: false,
        dragAndDrop: false,
        dragPan: false,
        keyboardPan: false,
        keyboardZoom: false,
        mouseWheelZoom: false,
        pointer: false,
        select: false
    }),
    controls: ol.control.defaults({
        attribution: false,
        zoom: false,
        rotate: false
    }),
    target: 'carte',
    layers: [mapbox, epitech],
    view: new ol.View({
      center: ol.proj.fromLonLat([2.338060305360853, 48.83602051737811]),
      zoom: 12
    })
});


const mapbox2 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        tileSize: [256, 256],
        url: 'https://api.mapbox.com/styles/v1/adrienvh/cl7ezt1ty000914o7i7nfkfr8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRyaWVudmgiLCJhIjoiU2lDV0N5cyJ9.2pFJAwvwZ9eBKKPiOrNWEw'
    })
})

var carte2 = new ol.Map({
    interactions: ol.interaction.defaults({
        doubleClickZoom: false,
        dragAndDrop: false,
        dragPan: false,
        keyboardPan: false,
        keyboardZoom: false,
        mouseWheelZoom: false,
        pointer: false,
        select: false,
    }),
    controls: ol.control.defaults({
        attribution: false,
        zoom: false,
        rotate: false
    }),
    target: 'senlis',
    layers: [mapbox2],
    view: new ol.View({
      center: ol.proj.fromLonLat([2.5833153186184448, 49.20639599000746]),
      zoom: 16
    })
});

const mapbox3 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        tileSize: [256, 256],
        url: 'https://api.mapbox.com/styles/v1/adrienvh/cl7923v83000m14mrmri65tyj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRyaWVudmgiLCJhIjoiU2lDV0N5cyJ9.2pFJAwvwZ9eBKKPiOrNWEw'
    })
})

const c2cSource = new ol.source.Vector({ projection: 'EPSG:3857' })
const feature2 = new ol.Feature({})
feature2.setGeometry(new ol.geom.Point(ol.proj.fromLonLat([2.33393, 48.87205])))
c2cSource.addFeature(feature2)
const c2c = new ol.layer.Vector({
    source: c2cSource,
    style: new ol.style.Style({
        image: new ol.style.Circle({
            stroke: new ol.style.Stroke({color: 'white', width: 2}),
            fill: new ol.style.Fill({color: '#7a7d68'}),
            radius: 8
        })
    })
})

var carte3 = new ol.Map({
    interactions: ol.interaction.defaults({
        doubleClickZoom: false,
        dragAndDrop: false,
        dragPan: false,
        keyboardPan: false,
        keyboardZoom: false,
        mouseWheelZoom: false,
        pointer: false,
        select: false,
    }),
    controls: ol.control.defaults({
        attribution: false,
        zoom: false,
        rotate: false
    }),
    target: 'c2c',
    layers: [mapbox3, c2c],
    view: new ol.View({
      center: ol.proj.fromLonLat([2.32986, 48.86217]),
      zoom: 13
    })
});

const mapbox4 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        tileSize: [256, 256],
        url: 'https://api.mapbox.com/styles/v1/adrienvh/cl7923v83000m14mrmri65tyj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRyaWVudmgiLCJhIjoiU2lDV0N5cyJ9.2pFJAwvwZ9eBKKPiOrNWEw'
    })
})

const condorcetSource = new ol.source.Vector({ projection: 'EPSG:3857' })
const feature3 = new ol.Feature({})
feature3.setGeometry(new ol.geom.Point(ol.proj.fromLonLat([2.36701, 48.90959])))
condorcetSource.addFeature(feature3)
const condorcet = new ol.layer.Vector({
    source: condorcetSource,
    style: new ol.style.Style({
        image: new ol.style.Circle({
            stroke: new ol.style.Stroke({color: 'white', width: 2}),
            fill: new ol.style.Fill({color: '#7a7d68'}),
            radius: 8
        })
    })
})

var carte4 = new ol.Map({
    interactions: ol.interaction.defaults({
        doubleClickZoom: false,
        dragAndDrop: false,
        dragPan: false,
        keyboardPan: false,
        keyboardZoom: false,
        mouseWheelZoom: false,
        pointer: false,
        select: false,
    }),
    controls: ol.control.defaults({
        attribution: false,
        zoom: false,
        rotate: false
    }),
    target: 'condorcet-map',
    layers: [mapbox4, condorcet],
    view: new ol.View({
      center: ol.proj.fromLonLat([2.35364, 48.89321]),
      zoom: 12
    })
});

document.getElementById("retour").addEventListener("click", function() {window.scrollTo(0, 0);});

document.getElementById("christmas").addEventListener("mouseover", function() {
    document.getElementById("christmas_calque").style.display = "none"
    document.getElementById("christmas_video").setAttribute("controls", "controls")
});

document.getElementById("christmas").addEventListener("mouseout", function() {
    document.getElementById("christmas_calque").style.display = "flex"
    document.getElementById("christmas_video").removeAttribute("controls")
    document.getElementById("christmas_video").pause()
    document.getElementById("christmas_video").currentTime = 0
});