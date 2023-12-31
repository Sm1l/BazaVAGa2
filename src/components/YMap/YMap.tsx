import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import React from "react";

import iconLocation from "../../assets/images/contacts/address.svg";
import styles from "./YMap.module.scss";

interface YMapProps {
  lat: number;
  lng: number;
}

const YMap: React.FC<YMapProps> = ({ lat, lng }) => {
  const key: string | undefined = import.meta.env.VITE_YANDEX_MAPS_KEY;

  return (
    <div className={styles.ymap}>
      <YMaps query={{ apikey: key }}>
        <Map
          state={{ center: [lat, lng], zoom: 16, controls: ["zoomControl"] }}
          modules={["control.ZoomControl"]}
          width={"100%"}
          height={"100%"}
        >
          <Placemark
            key={1}
            geometry={[lat, lng]}
            modules={["geoObject.addon.balloon"]}
            options={{
              iconLayout: "default#image",
              iconImageSize: [45, 60],
              iconImageHref: iconLocation,
            }}
            properties={{
              // balloonContentBody: "BazaVAGa",
              balloonContent: `<div class="balloon"><h1>BazaVAGa</h1><p>Диагностика, обслуживание,</br> 
              ремонт автомобилей концерна VAG.</p></div>`,
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export { YMap };
