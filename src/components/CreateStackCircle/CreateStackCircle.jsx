import cls from './CreateStackCircle.module.scss'
import StackInput from '../UI/StackInput/StackInput.jsx'

function CreateStackCircle(props) {
  return (
    <div className={cls.stack_circle}>
      <div data-progress="100">
        <StackInput />
      </div>
    </div>
  )
}

export default CreateStackCircle
