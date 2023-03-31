import axios from "axios";
import { Dispatch, SetStateAction } from "react";

declare const window: typeof globalThis & {
  Tmapv2: any;
};

interface IMapFindRoadProps {
  isSearch?: boolean;
  data: any;
  setMap?: Dispatch<any>;
  map?: any;
  marker?: any[];
  isWrite?: boolean;
  setMarker?: Dispatch<SetStateAction<any[]>>;
  findLine?: any[];
  setFindLine?: Dispatch<SetStateAction<any[]>>;
  setInfoWindow?: Dispatch<SetStateAction<any[]>>;
}

export const mapFindRoad = (props: IMapFindRoadProps): void => {
  if (props.findLine?.length !== 0) {
    props.findLine?.map((el) => el.setMap(null));
    props.setFindLine?.([]);
  }

  const drawData = (result: any): void => {
    for (let i = 0; i < result.features.length; i++) {
      const feature = result.features[i];
      if (feature.geometry.type === "LineString") {
        const path = [];
        for (let j = 0; j < feature.geometry.coordinates.length; j++) {
          const startPt = new window.Tmapv2.LatLng(
            feature.geometry.coordinates[j][1],
            feature.geometry.coordinates[j][0]
          );
          path.push(startPt);
        }
        const TLine = new window.Tmapv2.Polyline({
          path,
          strokeColor: "#457aff",
          strokeWeight: 4,
          map: props.map,
        });
        props.setFindLine?.((prev) => [...prev, TLine]);
      }
    }
  };

  const startFind = async (): Promise<void> => {
    console.log(props.data.info, "제발");
    const dataPos: any = {};
    for (let i = 0; i < props.data.info.length; i++) {
      if (props.data.info[i].restaurantName === "상호명") {
        break;
      }

      if (i === 0) {
        dataPos.start = props.data.info[i].location;
      } else if (
        Object.prototype.hasOwnProperty.call(props, "isWrite") &&
        i === 1
      ) {
        dataPos.end = props.data.info[i].location;
      } else if (
        !Object.prototype.hasOwnProperty.call(props, "isWrite") &&
        i === props.data.info.length - 1
      ) {
        dataPos.end = props.data.info[i].location;
      } else {
        if (dataPos.stopOver === undefined) {
          dataPos.stopOver = `${String(
            props.data.info[i].location.lng
          )},${String(props.data.info[i].location.lat)}`;
        } else {
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          dataPos.stopOver += `_${String(
            props.data.info[i].location.lng
          )},${String(props.data.info[i].location.lat)}`;
        }
      }
    }

    const result = await axios({
      method: "POST",
      headers: { appKey: "kzTmdjGzc91aQiicRAWjBCpCySY90Cs3AZJ7iVbd" },
      url: "https://apis.openapi.sk.com/tmap/routes?version=1&format=json",
      data: {
        startX: dataPos.start?.lng,
        startY: dataPos.start?.lat,
        endX: dataPos.end?.lng,
        endY: dataPos.end?.lat,
        passList: dataPos.stopOver,
        reqCoordType: "WGS84GEO",
        resCoordType: "WGS84GEO",
        trafficInfo: "Y",
      },
    });

    drawData(result.data);
  };
  void startFind();
};
