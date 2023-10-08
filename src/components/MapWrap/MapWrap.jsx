import mapboxgl from 'mapbox-gl'
import { useLayoutEffect, useRef, useState } from 'react' // eslint-disable-line import/no-webpack-loader-syntax
import cls from './MapWrap.module.scss'
import Point from '../../components/Point/Point.jsx'
import Map, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN

const coords = {
  lng: 31.590314335766053,
  lat: 48.972272868662245,
  zoom: 5.7,
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

function MapWrap() {
  return (
    <div className={cls.map_container}>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAP_ACCESS_TOKEN}
        initialViewState={{
          longitude: coords.lng,
          latitude: coords.lat,
          zoom: 5.7,
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      >
        {mockData.map(({ positions, companyId, location }) => (
          <Marker
            key={companyId}
            longitude={location.longitude}
            latitude={location.latitude}
            anchor="top"
          >
            <Point positions={positions} companyId={companyId} location={location} />
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default MapWrap
