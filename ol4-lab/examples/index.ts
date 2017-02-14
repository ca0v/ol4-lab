import Map from "ol/map";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import Proj from "ol/proj";
import Projection from "ol/proj/projection";

const epsg4326 = new Projection({ code: 'EPSG:4326' });
const epsg3857 = new Projection({ code: 'EPSG:3857' });

export function run() {
    let center = Proj.transform([-0.92, 52.96], epsg4326, epsg3857);
    
    let mapContainer = document.getElementsByClassName("map")[0];
    let map = <ol.Map>new Map({
        target: mapContainer,
        layers: [
            new Tile({
                source: new OSM()
            })
        ],
        view: new View({
            center: center,
            projection: "EPSG:3857",
            zoom: 6
        })
    });
}