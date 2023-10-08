import cls from './CompanyStacks.module.scss'

function CompanyStack({ name, level, skillProcent }) {
  return (
    <div className={cls.stack}>
      <div className={cls.stack_circle}>
        <div data-progress="50">{skillProcent}</div>
      </div>
      <div className={cls.stack_info}>
        <p>{name}</p>
        <small>{level}</small>
      </div>
    </div>
  )
}

export default CompanyStack
