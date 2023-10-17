import cls from './Positions.module.scss'
import FormInput from '../UI/FormInput/FormInput.jsx'
import Switcher from '../UI/Switcher/Switcher.jsx'
import VacationStack from '../VacationStack/VacationStack.jsx'

function Position(props) {
  return (
    <div className={cls.position}>
      <div className={'info_title'}>
        <h3>Basic position info</h3>
      </div>
      <div className={cls.position_container}>
        <div className="info">
          <div className={cls.info_container}>
            <FormInput name={'position_name'} label={'Position name'} />
            <div className={`seniority_switcher`}>
              <p className={cls.switcher_label}>Level of experience </p>
              <div className={cls.switcher}>
                <Switcher name={'seniority'} variants={['Junior', 'Mid', 'Senior']} />
              </div>
            </div>
            <FormInput name={'position_name'} label={'Payment by month (USD)'} />
            <div className={`job_switcher`}>
              <p className={cls.switcher_label}>Type of Job </p>
              <div className={cls.switcher}>
                <Switcher name={'jobType'} variants={['B2B', 'Permanent', 'Mandate Contract']} />
              </div>
            </div>
          </div>
        </div>
        <div className={cls.languages}></div>
      </div>
      <div className="stack">
        <VacationStack />
      </div>
    </div>
  )
}

export default Position
