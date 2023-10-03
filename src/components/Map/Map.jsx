import mapboxgl from 'mapbox-gl'
import { useLayoutEffect, useRef } from 'react' // eslint-disable-line import/no-webpack-loader-syntax
import cls from './Map.module.scss'

mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN

const coords = {
  lng: 31.590314335766053,
  lat: 48.972272868662245,
  zoom: 5.7,
}

function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useLayoutEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [coords.lng, coords.lat],
      zoom: coords.zoom,
    })
  }, [])

  return (
    <div>
      <div ref={mapContainer} className={cls.map_container} />
    </div>
  )
}

export default Map
