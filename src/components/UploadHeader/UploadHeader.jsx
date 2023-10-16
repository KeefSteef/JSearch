import cls from './UploadHeader.module.scss'
import FormInput from '../UI/FormInput/FormInput.jsx'

function UploadHeader(props) {
  return (
    <section className={cls.basic_info}>
      <div className={cls.basic_info_container}>
        <div className={cls.img_container}>
          <img src="/logo.png" alt="" />
        </div>
        <div className="info">
          <div className={cls.info_container}>
            <div className={'info_title'}>
              <h3>Basic information</h3>
            </div>
            <div className={cls.info_form}>
              <FormInput name={'company_name'} label={'Company name'} />
              <FormInput name={'size'} label={'Company size'} />
              <FormInput name={'email'} label={'E-mail'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UploadHeader
