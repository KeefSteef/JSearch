import cls from './CompanyStacks.module.scss'
import CompanyStack from './CompanyStack.jsx'

function CompanyStacks({ stacks = [], isLight = true }) {
  return (
    <div className={`${cls.stacks} ${isLight ? '' : cls.dark}`}>
      {stacks?.map(({ stackName, level, skillProcent }) => (
        <CompanyStack key={stackName} name={stackName} level={level} skillProcent={skillProcent} />
      ))}
    </div>
  )
}

export default CompanyStacks
