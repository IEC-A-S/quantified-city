import { FC, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const initCitiesData = [
  {
    type: "Feature",
    properties: {
      fid: 76,
      City_Name: "Amman",
      center: [35.96718879043169, 32.00280698304451],
      bounds: [
        [35.7198568409558, 31.787017646708435],
        [36.221816492377535, 32.212702479475105],
      ],
      zoom: 10.000000000000009,
      bearing: 101.60000000000173,
      pitch: 49.99999999999967,
      vscale: 0.7,
    },
    geometry: {
      type: "Point",
      coordinates: [35.919336314485449, 31.951386464751504],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 336,
      City_Name: "Mexico City",
      center: [-99.09309081576346, 19.34983411479375],
      bounds: [
        [-99.4541808986348, 19.103753871288173],
        [-98.72914576803187, 19.787426523743207],
      ],
      zoom: 9.867175623863696,
      bearing: 0.0,
      pitch: 50,
      vscale: 0.9,
    },
    geometry: {
      type: "Point",
      coordinates: [-99.101091581225603, 19.457659604398632],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 799,
      City_Name: "Bangkok",
      center: [100.50324135863775, 13.719555607290715],
      bounds: [
        [100.11682209569209, 13.381599283245349],
        [100.94574809682501, 14.186645082074255],
      ],
      zoom: 9.818587811931847,
      bearing: 0.0,
      pitch: 50,
      vscale: 1,
    },
    geometry: {
      type: "Point",
      coordinates: [100.56813228239119, 13.778801078899539],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 892,
      City_Name: "Panama City",
      center: [-79.48226179199627, 9.083198866519695],
      bounds: [
        [-79.64115036528052, 8.908514147114216],
        [-79.29217630138612, 9.253113872638332],
      ],
      zoom: 10.591526871591094,
      bearing: -20.799999999999727,
      pitch: 47.51373809516402,
      vscale: 0.7,
    },
    geometry: {
      type: "Point",
      coordinates: [-79.497515260149555, 9.013829150641525],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 1165,
      City_Name: "Colombo",
      center: [80.07050699310525, 6.823336439561302],
      bounds: [
        [79.81062208541447, 6.391051108706042],
        [80.39976652710082, 7.317233471275746],
      ],
      zoom: 9.81,
      bearing: -20,
      pitch: 62,
      vscale: 0.9,
    },
    geometry: {
      type: "Point",
      coordinates: [79.958323944492406, 6.932357722680249],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 2311,
      City_Name: "Jakarta",
      center: [106.82667518481037, -6.350464399947057],
      bounds: [
        [106.25618928666822, -6.977802992854161],
        [107.26881737999841, -5.971654477138626],
      ],
      zoom: 9.099467639422393,
      bearing: -153.5999999999998,
      pitch: 46.99999999999997,
      vscale: 1,
    },
    geometry: {
      type: "Point",
      coordinates: [106.815475171798411, -6.172653326038387],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 2873,
      City_Name: "Cape Town",
      bounds: [
        [18.351874777521896, -34.15537008007874],
        [18.832695983491323, -33.75654621269811],
      ],
      center: [18.579160832283065, -33.973034474213975],
      zoom: 10.174985293257919,
      bearing: 0,
      pitch: 39.98000000000012,
      vscale: 0.8,
    },
    geometry: {
      type: "Point",
      coordinates: [18.600086702400798, -33.982889829763067],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 10,
      City_Name: "Valparaiso",
      center: [-71.48427166516629, -33.02603685224794],
      bounds: [
        [-71.67768711200193, -33.20238821383734],
        [-71.30481954611581, -32.88983942245956],
      ],
      zoom: 10.663321631643026,
      bearing: 167.86383725437076,
      pitch: 41.000000000000135,
      vscale: 1.5,
      Category: "C1",
    },
    geometry: {
      type: "Point",
      coordinates: [-71.62739583920451, -33.042575544979698],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 11,
      City_Name: "Natal",
      center: [-35.25026461835907, -5.795680924221671],
      bounds: [
        [-35.37006628652244, -5.94947724470865],
        [-35.14577208881207, -5.726346551851702],
      ], //[[-35.399881955419104, -5.979138247653976], [-35.115956419915406, -5.696685548906374]],
      zoom: 11.194733819711187,
      bearing: -151.19999999999965,
      pitch: 43.980000000000125,
      vscale: 0.7,
      Category: "B2",
    },
    geometry: {
      type: "Point",
      coordinates: [-35.212223332260749, -5.814877064286144],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 12,
      City_Name: "Dar es Salaam",
      center: [39.179162094870094, -6.884904593781215],
      bounds: [
        [38.787337918476084, -7.285461392823055],
        [39.58849369336601, -6.490094174594384],
      ],
      zoom: 9.51190944357489,
      bearing: 0.0,
      pitch: 52,
      vscale: 0.5,
      Category: "C2",
    },
    geometry: {
      type: "Point",
      coordinates: [39.218708041177813, -6.825200004764525],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 13,
      City_Name: "Brazzaville",
      center: [15.286496264601823, -4.2411132990048515],
      bounds: [
        [15.182330075279612, -4.330976002473067],
        [15.368779659676342, -4.145036314041322],
      ],
      zoom: 11.378416402173768,
      bearing: -76.7999999999999,
      pitch: 47.499999999999844,
      vscale: 0.7,
      Category: "C1",
    },
    geometry: {
      type: "Point",
      coordinates: [15.268282806301356, -4.253046135825453],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 14,
      City_Name: "Dubai",
      //coordinates: [55.03468568314278, 25.177065811310452]
      center: [55.73641246251963, 25.078748811928463],
      bounds: [
        [54.81771552997702, 24.732838199154443],
        [55.80973875103086, 25.635531983122043],
      ],
      zoom: 9.591526871591089,
      bearing: 0.0,
      pitch: 56.98,
      vscale: 1,
      Category: "A2",
    },
    geometry: {
      type: "Point",
      coordinates: [55.234685683142779, 25.177065811310452],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 15,
      City_Name: "Expo City Dubai",
      center: [55.33641246251963, 25.078748811928463],
      bounds: [
        [54.81771552997702, 24.732838199154443],
        [55.80973875103086, 25.635531983122043],
      ],
      zoom: 9.591526871591089,
      bearing: 0.0,
      pitch: 56.98,
      vscale: 1,
      Category: "A3",
    },
    geometry: {
      type: "Point",
      coordinates: [55.150946455839211, 24.96152906476464],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 16,
      City_Name: "Almaty",
      center: [76.88647818381759, 43.256008733418724],
      bounds: [
        [76.60953994730258, 43.10821822727083],
        [77.15796001255471, 43.507290264159614],
      ],
      zoom: 10.249467639422363,
      bearing: 0.0,
      pitch: 44.97999999999996,
      vscale: 1.5,
      Category: "B1",
    },
    geometry: {
      type: "Point",
      coordinates: [76.898488309803199, 43.265559102492823],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 17,
      City_Name: "Adoni",
      center: [77.2747162313259, 15.633478866808957],
      bounds: [
        [77.14053924642712, 15.501082898087077],
        [77.42237639942202, 15.772488883482364],
      ], //[[77.21099837653901, 15.568967933731024], [77.35191726931015, 15.70467131869739]],
      zoom: 11.643190533205994,
      bearing: 0.0,
      pitch: 45,
      vscale: 2, //0.35,
      Category: "C2",
    },
    geometry: {
      type: "Point",
      coordinates: [77.273189700817156, 15.62514604003816],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 18,
      City_Name: "Astana",
      center: [71.436664997192452, 51.160220893455033],
      bounds: [
        [71.23828265482321, 51.035347916724625],
        [71.63631229916322, 51.28512138639332],
      ],
      zoom: 10.63,
      bearing: 0.0,
      pitch: 51.51,
      vscale: 2,
      Category: "B1",
    },
    geometry: {
      type: "Point",
      coordinates: [71.436664997192452, 51.160220893455033],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 2874,
      City_Name: "Lahore",
      center: [ 74.3261404253931488, 31.4846764884750101],
      bounds: [
        [73.96699,31.19507], 
        [74.65612,31.79106],
      ],
      zoom: 10.63,
      bearing: 0.0,
      pitch: 40,
      vscale: 0.9,
      Category: "C2",
    },
    geometry: {
      type: "Point",
      coordinates: [74.3261404253931488, 31.4846764884750101],
    },
  },
  {
    type: "Feature",
    properties: {
      fid: 2875,
      City_Name: "Nairobi",
      center: [ 36.815253298197092, -1.240714824116606 ],
      bounds: [
        [36.49916,-1.57751], 
        [37.17832,-0.94213],
      ],
      zoom: 10.63,
      bearing: 0.0,
      pitch: 47,
      vscale: 0.3,
      Category: "C3",
    },
    geometry: {
      type: "Point",
      coordinates: [ 36.815253298197092, -1.240714824116606 ],
    },
  },
];

interface ISelectedMapProps {
  selectedCityName: string;
  isMobile?: boolean;
}

export const SelectedMap: FC<ISelectedMapProps> = ({
  selectedCityName,
  isMobile,
}) => {
  //Init params for map
  mapboxgl.accessToken =
    "pk.eyJ1IjoidHNrbm9mZiIsImEiOiJjbGNxZDlxMnowNHV4M3JwZHp0ZTlvM2NiIn0.Tz-_y_F7EwR2NkPNA-Xlkw";

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>(null);

  useEffect(() => {
    if (map.current || !mapContainerRef.current) return; // initialize map only once

    const initData = initCitiesData.find(
      (city) => city.properties.City_Name === selectedCityName
    )?.properties;

    map.current = new mapboxgl.Map({
      attributionControl: false,
      container: mapContainerRef.current,
      style: "mapbox://styles/tsknoff/cmd7fpvgl00ug01qufqmm09ze",
      bounds: initData?.bounds,
      fitBoundsOptions: {
        pitch: initData?.pitch,
        bearing: initData?.bearing,
        // padding: {top: 10, bottom:25, left: 15, right: 5}
      },
      center: initData?.center,
      zoom: isMobile ? initData?.zoom - 1.8 : initData?.zoom,
      bearing: initData?.bearing,
      pitch: initData?.pitch,
    });

    const scale = new mapboxgl.ScaleControl({
      maxWidth: 100,
    });

    map.current.addControl(scale, "top-right");

    // map.current.fitBounds([[38.787337918476084, -7.285461392823055], [39.58849369336601, -6.490094174594384]]);

    // map.current.addControl(new mapboxgl.NavigationControl());

    // map.current.scrollZoom.disable();

    map.current.on("load", () => {
      if (!map.current) return;

      map.current.resize();
      //Animation is based on increasing fill-extrusion-vertical-scale property from 0 to 1 based on a timestamp
      // console.log(map.current.getBounds())

      let start, previousTimeStamp;
      let done = false;

      function animatebars(timeStamp) {
        if (start === undefined) {
          start = timeStamp;
        }
        const elapsed = timeStamp - start;

        if (previousTimeStamp !== timeStamp) {
          // Math.min() is used here to make sure the element stops at exactly 1
          const count = Math.min(
            (initData?.vscale / 2500) * elapsed,
            initData?.vscale
          );

          map.current.setPaintProperty(
            "bars-2cl5je",
            "fill-extrusion-vertical-scale",
            count
          );

          if (count === 1) done = true;
        }

        if (elapsed < 2500) {
          // Stop the animation after 1 seconds
          previousTimeStamp = timeStamp;
          if (!done) {
            requestAnimationFrame(animatebars);
          }
        }
      }
      animatebars(0);
    });
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        pointerEvents: "none",
        position: isMobile ? "relative" : "absolute",
        // top: "20vh",
        top: isMobile ? "0" : "20vh",
        right: "0",
        // width: "60%",
        width: isMobile ? "100%" : "60%",
        height: isMobile ? "40vh" : "80vh",
      }}
    ></div>
  );
};
