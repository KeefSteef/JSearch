import cls from './CreateStack.module.scss'
import CreateStackCircle from '../CreateStackCircle/CreateStackCircle.jsx'

function CreateStack(props) {
  return (
    <div className={cls.createStack}>
      <CreateStackCircle />
    </div>
  )
}

export default CreateStack
