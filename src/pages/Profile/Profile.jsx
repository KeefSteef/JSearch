import cls from './Profile.module.scss'
import FileInput from '../../components/UI/File/FileInput'
import Switcher from '../../components/UI/Switcher/Switcher'
import Button from '../../components/UI/Button/Button'
import FormInput from '../../components/UI/FormInput/FormInput'
import Textarea from '../../components/UI/Textarea/Textarea'

function Profile(props) {
  return (
    <div className={cls.profile}>
      <div className={cls.profile_container}>
        <div className={cls.left_side}>
          <div className={cls.basic_info}>
            <div className={cls.avatar}>
              <img src="/logo.png" alt="" />
            </div>
            <div className={cls.basic_inputs}>
              <FormInput label={'Name'} />
              <FormInput label={'Surname'} />
            </div>
          </div>
          <div className={cls.details}>
            <h3>Details</h3>
            <div className={cls.details_container}>
              <FormInput label={'E-mail'} defaultValue="test@gmail.com" />
              <Textarea label={'Description'} />
            </div>
          </div>
        </div>
        <div className={cls.right_side}>
          <div className={cls.upload_cv}>
            <h3>Upload CV</h3>
            <div className={cls.cv_container}>
              <FileInput />
            </div>
          </div>
          <div className={cls.seniority}>
            <h3>Your level</h3>
            <div className={cls.seniority_switcher}>
              <Switcher name={'129058'} variants={['Junior', 'Middle', 'Senior']} />
            </div>
          </div>
          <div className={cls.update_btn}>
            <Button>Update profile</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
