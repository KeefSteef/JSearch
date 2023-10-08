import cls from './VacationForm.module.scss'
import Button from '../UI/Button/Button.jsx'
import FormInput from '../UI/FormInput/FormInput.jsx'
import Textarea from '../UI/Textarea/Textarea.jsx'
import FileInput from '../UI/File/FileInput.jsx'

function VacationForm({ email }) {
  return (
    <>
      <div className={cls.form_tip}>
        <p>About you</p>
      </div>
      <form className={cls.form}>
        <div className={cls.basic_info}>
          <div className={cls.basic_info_input}>
            <FormInput name={'fullname'} label={'First and last name'} />
          </div>
          <div className={cls.basic_info_input}>
            <FormInput name={'email'} label={'E-mail'} />
          </div>
        </div>
        <div className={cls.form_desc}>
          <Textarea label={'Description'} name={'description'} />
        </div>
        <div className="form_upload">
          <div className={cls.form_tip}>
            <p>File upload</p>
          </div>
          <FileInput />
        </div>
        <div className="form_btn">
          <Button type={'dark'}>Apply</Button>
        </div>
      </form>
    </>
  )
}

export default VacationForm
