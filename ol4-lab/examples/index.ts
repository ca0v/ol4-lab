import Map from "ol/map";
import Tile from "ol/layer/tile";
import Vector from "ol/layer/vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/vector";
import View from "ol/View";
import Proj from "ol/proj";
import Projection from "ol/proj/projection";
import Style from "ol/style/style";
import Circle from "ol/style/circle";
import Fill from "ol/style/fill";
import Feature from "ol/feature";
import Point from "ol/geom/point";

const epsg4326 = new Projection({ code: 'EPSG:4326' });
const epsg3857 = new Projection({ code: 'EPSG:3857' });

export function run() {
    let center = Proj.transform([-0.92, 52.96], epsg4326, epsg3857);

    let mapContainer = document.getElementsByClassName("map")[0];

    let vectorLayer = <ol.layer.Vector>new Vector({
        source: new VectorSource(),
        style: (feature: ol.Feature, resolution: number) => {
            let circle = new Circle({
                radius: 5,
                fill: new Fill({ color: "#000" })
            });
            return new Style({
                image: circle
            });
        }
    });

    let map = <ol.Map>new Map({
        loadTilesWhileAnimating: true,
        target: mapContainer,
        layers: [
            new Tile({
                source: new OSM()
            }),
            vectorLayer
        ],
        view: new View({
            center: center,
            projection: "EPSG:3857",
            zoom: 6
        })
    });


    let point = <ol.geom.Point>new Point(center);
    let feature = <ol.Feature>new Feature(point);
    vectorLayer.getSource().addFeature(feature);

    setTimeout(() => map.getView().animate({ zoom: 12, duration: 5000 }), 1000);
}