import cls from './VacationDescription.module.scss'

function VacationDescription({ description }) {
  return (
    <div className={cls.desc_info}>
      <p>{description}</p>
    </div>
  )
}

export default VacationDescription
