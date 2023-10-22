import cls from './CreateStack.module.scss'
import CreateStackCircle from '../CreateStackCircle/CreateStackCircle.jsx'
import Rates from '../Rates/Rates'

function CreateStack(props) {
  return (
    <div className={cls.createStack}>
      <CreateStackCircle />
      <div className={cls.rates_container}>
        <input placeholder="Enter the title" className={cls.name} type="text" />
        <Rates />
        <button>Add stack</button>
      </div>
    </div>
  )
}

export default CreateStack
