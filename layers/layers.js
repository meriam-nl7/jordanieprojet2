var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Governoratesselection_1 = new ol.format.GeoJSON();
var features_Governoratesselection_1 = format_Governoratesselection_1.readFeatures(json_Governoratesselection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Governoratesselection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Governoratesselection_1.addFeatures(features_Governoratesselection_1);
var lyr_Governoratesselection_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Governoratesselection_1, 
                style: style_Governoratesselection_1,
                interactive: true,
                title: '<img src="styles/legend/Governoratesselection_1.png" /> Governorates selection'
            });
var format_Export_Output_2 = new ol.format.GeoJSON();
var features_Export_Output_2 = format_Export_Output_2.readFeatures(json_Export_Output_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_2.addFeatures(features_Export_Output_2);
var lyr_Export_Output_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_2, 
                style: style_Export_Output_2,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_2.png" /> Export_Output'
            });
var format_Export_Output_3 = new ol.format.GeoJSON();
var features_Export_Output_3 = format_Export_Output_3.readFeatures(json_Export_Output_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_3.addFeatures(features_Export_Output_3);
var lyr_Export_Output_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_3, 
                style: style_Export_Output_3,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_3.png" /> Export_Output'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Governoratesselection_1.setVisible(true);lyr_Export_Output_2.setVisible(true);lyr_Export_Output_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Governoratesselection_1,lyr_Export_Output_2,lyr_Export_Output_3];
lyr_Governoratesselection_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RSS_UTM_CO': 'RSS_UTM_CO', 'RSS_UTM__1': 'RSS_UTM__1', 'GOV_NE': 'GOV_NE', 'GOV_NA': 'GOV_NA', });
lyr_Export_Output_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'POI_NAME_A': 'POI_NAME_A', 'POI_NAME_E': 'POI_NAME_E', 'TYPE': 'TYPE', 'SUB_TYPE': 'SUB_TYPE', 'ST_NAME_AR': 'ST_NAME_AR', 'ST_NAME_EN': 'ST_NAME_EN', 'LIWA_AR': 'LIWA_AR', 'GOV_AR': 'GOV_AR', 'GOV_EN': 'GOV_EN', 'POI_CODE': 'POI_CODE', 'BUILTUP_AR': 'BUILTUP_AR', 'BUILTUP_EN': 'BUILTUP_EN', 'X_Coor': 'X_Coor', 'Y_Coor': 'Y_Coor', 'Gov_Code': 'Gov_Code', 'Qada_Code': 'Qada_Code', 'Liwa_Code': 'Liwa_Code', 'Qada_ARA': 'Qada_ARA', 'Qada_ENE': 'Qada_ENE', 'Liwa_ENE': 'Liwa_ENE', 'District_E': 'District_E', 'Subdistric': 'Subdistric', 'District_A': 'District_A', 'District_C': 'District_C', 'Subdistr_1': 'Subdistr_1', 'Subdistr_2': 'Subdistr_2', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_Export_Output_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'POI_NAME_A': 'POI_NAME_A', 'POI_NAME_E': 'POI_NAME_E', 'TYPE': 'TYPE', 'SUB_TYPE': 'SUB_TYPE', 'ST_NAME_AR': 'ST_NAME_AR', 'ST_NAME_EN': 'ST_NAME_EN', 'LIWA_AR': 'LIWA_AR', 'GOV_AR': 'GOV_AR', 'GOV_EN': 'GOV_EN', 'POI_CODE': 'POI_CODE', 'BUILTUP_AR': 'BUILTUP_AR', 'BUILTUP_EN': 'BUILTUP_EN', 'X_Coor': 'X_Coor', 'Y_Coor': 'Y_Coor', 'Gov_Code': 'Gov_Code', 'Qada_Code': 'Qada_Code', 'Liwa_Code': 'Liwa_Code', 'Qada_ARA': 'Qada_ARA', 'Qada_ENE': 'Qada_ENE', 'Liwa_ENE': 'Liwa_ENE', 'District_E': 'District_E', 'Subdistric': 'Subdistric', 'District_A': 'District_A', 'District_C': 'District_C', 'Subdistr_1': 'Subdistr_1', 'Subdistr_2': 'Subdistr_2', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_Governoratesselection_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'RSS_UTM_CO': '', 'RSS_UTM__1': '', 'GOV_NE': '', 'GOV_NA': '', });
lyr_Export_Output_2.set('fieldImages', {'OBJECTID': '', 'POI_NAME_A': '', 'POI_NAME_E': '', 'TYPE': '', 'SUB_TYPE': '', 'ST_NAME_AR': '', 'ST_NAME_EN': '', 'LIWA_AR': '', 'GOV_AR': '', 'GOV_EN': '', 'POI_CODE': '', 'BUILTUP_AR': '', 'BUILTUP_EN': '', 'X_Coor': '', 'Y_Coor': '', 'Gov_Code': '', 'Qada_Code': '', 'Liwa_Code': '', 'Qada_ARA': '', 'Qada_ENE': '', 'Liwa_ENE': '', 'District_E': '', 'Subdistric': '', 'District_A': '', 'District_C': '', 'Subdistr_1': '', 'Subdistr_2': '', 'POINT_X': '', 'POINT_Y': '', });
lyr_Export_Output_3.set('fieldImages', {'OBJECTID': '', 'POI_NAME_A': '', 'POI_NAME_E': '', 'TYPE': '', 'SUB_TYPE': '', 'ST_NAME_AR': '', 'ST_NAME_EN': '', 'LIWA_AR': '', 'GOV_AR': '', 'GOV_EN': '', 'POI_CODE': '', 'BUILTUP_AR': '', 'BUILTUP_EN': '', 'X_Coor': '', 'Y_Coor': '', 'Gov_Code': '', 'Qada_Code': '', 'Liwa_Code': '', 'Qada_ARA': '', 'Qada_ENE': '', 'Liwa_ENE': '', 'District_E': '', 'Subdistric': '', 'District_A': '', 'District_C': '', 'Subdistr_1': '', 'Subdistr_2': '', 'POINT_X': '', 'POINT_Y': '', });
lyr_Governoratesselection_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'RSS_UTM_CO': 'no label', 'RSS_UTM__1': 'no label', 'GOV_NE': 'no label', 'GOV_NA': 'no label', });
lyr_Export_Output_2.set('fieldLabels', {'OBJECTID': 'no label', 'POI_NAME_A': 'no label', 'POI_NAME_E': 'no label', 'TYPE': 'no label', 'SUB_TYPE': 'no label', 'ST_NAME_AR': 'no label', 'ST_NAME_EN': 'no label', 'LIWA_AR': 'no label', 'GOV_AR': 'no label', 'GOV_EN': 'no label', 'POI_CODE': 'no label', 'BUILTUP_AR': 'no label', 'BUILTUP_EN': 'no label', 'X_Coor': 'no label', 'Y_Coor': 'no label', 'Gov_Code': 'no label', 'Qada_Code': 'no label', 'Liwa_Code': 'no label', 'Qada_ARA': 'no label', 'Qada_ENE': 'no label', 'Liwa_ENE': 'no label', 'District_E': 'no label', 'Subdistric': 'no label', 'District_A': 'no label', 'District_C': 'no label', 'Subdistr_1': 'no label', 'Subdistr_2': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', });
lyr_Export_Output_3.set('fieldLabels', {'OBJECTID': 'no label', 'POI_NAME_A': 'no label', 'POI_NAME_E': 'no label', 'TYPE': 'no label', 'SUB_TYPE': 'no label', 'ST_NAME_AR': 'no label', 'ST_NAME_EN': 'no label', 'LIWA_AR': 'no label', 'GOV_AR': 'no label', 'GOV_EN': 'no label', 'POI_CODE': 'no label', 'BUILTUP_AR': 'no label', 'BUILTUP_EN': 'no label', 'X_Coor': 'no label', 'Y_Coor': 'no label', 'Gov_Code': 'no label', 'Qada_Code': 'no label', 'Liwa_Code': 'no label', 'Qada_ARA': 'no label', 'Qada_ENE': 'no label', 'Liwa_ENE': 'no label', 'District_E': 'no label', 'Subdistric': 'no label', 'District_A': 'no label', 'District_C': 'no label', 'Subdistr_1': 'no label', 'Subdistr_2': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', });
lyr_Export_Output_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});