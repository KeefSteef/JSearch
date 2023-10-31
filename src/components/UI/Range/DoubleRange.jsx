import { useRef } from 'react'
import cls from './DoubleRange.module.scss'

const POINTS_GAP = 5

function DoubleRange({ start, end, setRange }) {
  const smth = useRef(end)
  const procent = smth.current / 100

  const startProcent = start / procent
  const endProcent = end / procent

  return (
    <div className={cls.double_slider}>
      <div
        className={cls.track}
        style={{
          background: `linear-gradient(90deg, rgba(186,190,201,1) ${startProcent}%, rgba(28,39,76,1) ${startProcent}%, rgba(28,39,76,1) ${endProcent}%, rgba(186,190,201,1) ${endProcent}%)`,
        }}
      />
      <input
        onChange={(event) => {
          setRange((prev) => ({
            ...prev,
            from: Math.min(Math.round(+event.target.value * procent), end - POINTS_GAP * 100),
          }))
        }}
        min={0}
        max={100}
        value={startProcent}
        type="range"
      />
      <input
        onChange={(event) => {
          setRange((prev) => ({
            ...prev,
            to: Math.max(Math.round(+event.target.value * procent), start + POINTS_GAP * 100),
          }))
        }}
        min={0}
        max={100}
        value={endProcent}
        type="range"
      />
    </div>
  )
}

export default DoubleRange
