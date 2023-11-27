import cls from './MapWrap.module.scss'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { DivIcon } from 'leaflet/dist/leaflet-src.esm.js'

const coords = {
  lng: 31.590314335766053,
  lat: 48.972272868662245,
  zoom: 6.45,
}

const mockData = [
  {
    companyId: 'a9sf87sfa',
    location: { longitude: 24.714399538317267, latitude: 48.92681613657076 },
    positions: [
      { vacationId: '90a8sgf', lang: 'php', name: 'Junior PHP Developer' },
      {
        vacationId: '90f88sgf',
        lang: 'ruby',
        name: 'Senior Ruby Developer',
      },
    ],
  },
  {
    companyId: '798afs',
    location: { longitude: 24.698808735168004, latitude: 48.91594526593962 },
    positions: [{ vacationId: '90a8sgf', lang: 'js', name: 'Junior Js Developer' }],
  },
]

const generateIcon = (lang = 'js') =>
  new DivIcon({
    html: `<img src="/${lang}_point.png" class="point-icon" alt="marker-icon"/>`,
    className: 'point-icon',
    iconSize: [30, 30],
  })

const clusterIconCreateFunction = (cluster) =>
  new DivIcon({
    html: `    
             <div>
                <span>${cluster.getChildCount()}</span>
             </div>
            `,
    className: 'cluster_icon',
    iconSize: [35, 35],
  })

function MapWrap() {
  return (
    <div className={cls.map_container}>
      <MapContainer
        scrollWheelZoom={true}
        className={cls.map_container}
        center={[coords.lat, coords.lng]}
        zoom={coords.zoom}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/scarseese/clp6sv3c700ie01pcgn7majtu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2NhcnNlZXNlIiwiYSI6ImNsbjh5cXl2aDAyZm4ycWw3dTV0OXNpYWkifQ.FSNASKrYhWTNhhcu4A-6qQ"
        />
        <MarkerClusterGroup iconCreateFunction={clusterIconCreateFunction}>
          {mockData.map((item) => (
            <Marker
              key={item.companyId}
              position={[item.location.latitude, item.location.longitude]}
              icon={generateIcon()}
            ></Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}

export default MapWrap
