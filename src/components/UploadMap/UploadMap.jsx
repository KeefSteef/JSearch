import cls from './UploadMap.module.scss'
import Map, { Marker } from 'react-map-gl'

const coords = {
  lng: 31.590314335766053,
  lat: 48.972272868662245,
  zoom: 4.7,
}

function UploadMap(props) {
  return (
    <section className={cls.map}>
      <div className={'info_title'}>
        <h3>Location</h3>
      </div>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAP_ACCESS_TOKEN}
        initialViewState={{
          longitude: coords.lng,
          latitude: coords.lat,
          zoom: coords.zoom,
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      ></Map>
    </section>
  )
}

export default UploadMap
