import cls from './DeveloperAuth.module.scss'
import FormInput from '../../components/UI/FormInput/FormInput'
import Button from '../../components/UI/Button/Button'
import Map, { Marker } from 'react-map-gl'

const coords = {
  lng: 30.5002,
  lat: 50.4383,
  zoom: 13,
}

//TODO: Create abstract map component

function Authorization(props) {
  return (
    <div className={cls.auth}>
      <div className={cls.auth_container}>
        <div className={cls.left_side}>
          <div className={cls.auth_form}>
            <h2>
              Sign up <span>as</span> <p>Developer</p>
            </h2>
            <form action="" className="form">
              <FormInput label={'E-mail'} />
              <FormInput label={'Password'} />
              <Button>Sign in</Button>
              <small>
                Have an account ?
                <span>
                  &nbsp;Sign <span>in</span>
                </span>
              </small>
            </form>
          </div>
        </div>
        <div className={cls.right_side}>
          <Map
            mapboxAccessToken={import.meta.env.VITE_MAP_ACCESS_TOKEN}
            onZoom={(value) => (value.viewState.zoom <= 12 ? false : value.viewState.zoom)}
            initialViewState={{
              longitude: coords.lng,
              latitude: coords.lat,
              zoom: coords.zoom,
              minZoom: coords.zoom,
            }}
            mapStyle="mapbox://styles/mapbox/light-v11"
          >
            <Marker longitude={30.502233271009334} latitude={50.42956736353803}>
              <img src="/js_point.svg" alt="" />
            </Marker>
            <Marker longitude={30.49409013675615} latitude={50.43933999329298}>
              <img src="/java_point.svg" alt="" />
            </Marker>
            <Marker longitude={30.51386037063963} latitude={50.44702231996462}>
              <img src="/shart_point.svg" alt="" />
            </Marker>
          </Map>
        </div>
      </div>
    </div>
  )
}

export default Authorization
