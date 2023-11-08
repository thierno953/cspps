import { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { tempCartePosts } from "../../helpers/tempCartePosts";
import "./Carte.css";
import { Link } from "react-router-dom";
import { AiOutlineEnter } from "react-icons/ai";

const center = { lat: 50.8503396, lng: 4.3517103 };

export const Carte = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyADpk2bOsLjbrvC-M3F-Ojz3AOJJnYUNPI",
  });

  if (!isLoaded) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="carte">
      <GoogleMap
        center={center}
        zoom={13}
        mapContainerStyle={{ width: "100%", height: "70vh", borderRadius: "10px" }}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
        {tempCartePosts.map((item, index) => (
          <Marker
            key={index}
            position={{
              lat: item.lat,
              lng: item.lng,
            }}
            onClick={() => setSelected(item)}
          />
        ))}
        {selected && (
          <InfoWindow
            position={{
              lat: selected.lat,
              lng: selected.lng,
            }}
            onCloseClick={() => setSelected(null)}
          >
            <ul>
              <li>
                <p>
                  <span className="textstrong">Collectif occupant: </span>
                  {selected.occupant}
                </p>
                <p>
                  <span className="textstrong">Adresse du bien: </span>
                  {selected.title}
                </p>

                <button className="info">
                  <Link to={selected.info}>Plus d'infos</Link>
                  <AiOutlineEnter />
                </button>
              </li>
            </ul>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

