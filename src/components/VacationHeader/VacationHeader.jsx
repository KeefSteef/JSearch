import cls from './VacationHeader.module.scss'

function VacationHeader({ name, location, jobType, salary }) {
  return (
    <div className={cls.header_container}>
      <div className={cls.logo}>
        <div className={cls.logo_container}>
          <img src="/logo.png" alt="" />
        </div>
      </div>
      <div className="header_info">
        <div className="header_info_container">
          <h3>{name}</h3>
          <div className={cls.info_types}>
            <div className={cls.info_type}>
              <img src="/point.svg" alt="" />
              <p>{location}</p>
            </div>
            <div className={cls.info_type}>
              <img src="/job_type.svg" alt="" />
              <p>{jobType} </p>
            </div>
            <div className={cls.info_type}>
              <img src="/salary.svg" alt="" />
              <p>Net/month - {salary}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VacationHeader
