import cls from './CompanyInfoCards.module.scss'

function CompanyInfoCard({ src, title, value }) {
  return (
    <div className={cls.company_info_box}>
      <div className={cls.box_header}>
        <img src={src} alt="" />
      </div>
      <div className={cls.box}>
        <p>{value}</p>
        <div className={cls.box_name}>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfoCard
