import cls from './VacationStack.module.scss'
import CreateStack from '../CreateStack/CreateStack.jsx'

function VacationStack(props) {
  return (
    <div className={cls.stack}>
      <div className={'info_title'}>
        <h3>Tech stack</h3>
      </div>
      <CreateStack />
    </div>
  )
}

export default VacationStack
