import cls from './CompanyStacks.module.scss'
import CompanyStack from './CompanyStack.jsx'

function CompanyStacks({ stacks = [] }) {
  return (
    <div className={cls.stacks}>
      {stacks?.map(({ name, level, skillProcent }) => (
        <CompanyStack key={name} name={name} level={level} skillProcent={skillProcent} />
      ))}
    </div>
  )
}

export default CompanyStacks
