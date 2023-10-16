import cls from './Positions.module.scss'
import FormInput from '../UI/FormInput/FormInput.jsx'
import Switcher from '../UI/Switcher/Switcher.jsx'

function Position(props) {
  return (
    <div className={cls.position}>
      <div className={cls.position_container}>
        <div className="info">
          <div className={cls.info_container}>
            <FormInput name={'position_name'} label={'Position name'} />
            <Switcher name={'seniority'} variants={['Junior', 'Mid', 'Senior']} />
            <FormInput name={'position_name'} label={'Payment by month (USD)'} />
            <Switcher name={'jobType'} variants={['B2B', 'Permanent', 'Mandate Contract']} />
          </div>
        </div>
        <div className={cls.languages}></div>
      </div>
      <div className="stack">
        <div className="levels">
          <div className="level"></div>
        </div>
      </div>
    </div>
  )
}

export default Position
