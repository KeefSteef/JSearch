import cls from './Textarea.module.scss'

function Textarea({ label, name }) {
  return (
    <div className={cls.textarea}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} />
    </div>
  )
}

export default Textarea
