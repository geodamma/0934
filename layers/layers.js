var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_type__1 = new ol.format.GeoJSON();
var features_type__1 = format_type__1.readFeatures(json_type__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_type__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_type__1.addFeatures(features_type__1);
var lyr_type__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_type__1, 
                style: style_type__1,
                interactive: true,
                title: '<img src="styles/legend/type__1.png" /> type_廢'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_type__1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_type__1];
lyr_type__1.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_type__1.set('fieldImages', {'type': '', 'floor': '', });
lyr_type__1.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_type__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});