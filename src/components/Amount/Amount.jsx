import cls from './Amount.module.scss'

function Amount({ amount, label }) {
  return (
    <div className={cls.amount}>
      <div className={cls.amount_container}>
        <p className={cls.amount_title}>{label}</p>
        <p>{amount} USD</p>
      </div>
    </div>
  )
}

export default Amount
