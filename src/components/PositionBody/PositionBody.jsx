import cls from './PositionBody.module.scss'
import FormInput from '../UI/FormInput/FormInput.jsx'
import Switcher from '../UI/Switcher/Switcher.jsx'
import VacationStack from '../VacationStack/VacationStack.jsx'
import Textarea from '../UI/Textarea/Textarea'

function PositionBody(props) {
  return (
    <div className={cls.position_body}>
      <div className={'info_title'}>
        <h3>Basic position info</h3>
      </div>
      <div className={cls.position_container}>
        <div className="info">
          <div className={cls.info_container}>
            <FormInput name={'position_name'} label={'Position name'} />
            <div className={`seniority_switcher`}>
              <p className={cls.switcher_label}>Level of experience</p>
              <div className={cls.switcher}>
                <Switcher name={'seniority'} variants={['Junior', 'Mid', 'Senior']} />
              </div>
            </div>
            <FormInput name={'position_name'} label={'Payment by month (USD)'} />
            <div className={`job_switcher`}>
              <p className={cls.switcher_label}>Type of Job</p>
              <div className={cls.switcher}>
                <Switcher name={'jobType'} variants={['B2B', 'Permanent', 'Mandate Contract']} />
              </div>
            </div>
          </div>
        </div>
        <div className={cls.languages}>
          <div className={cls.languages_container}>
            <div className={cls.lang}>
              <img src="/php.svg" alt="" />
            </div>
            <div className={cls.lang}>
              <img src="/html.svg" alt="" />
            </div>
            <div className={cls.lang}>
              <img src="/html.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={cls.stack}>
        <VacationStack />
      </div>
      <div className={cls.desc}>
        <div className={'info_title'}>
          <h3>Description</h3>
        </div>
        <Textarea name={'test'} />
      </div>
    </div>
  )
}

export default PositionBody

//TODO: SWitcher label to Switcher component
