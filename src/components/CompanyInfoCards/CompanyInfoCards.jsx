import cls from './CompanyInfoCards.module.scss'
import CompanyInfoCard from './CompanyInfoCard.jsx'

function CompanyInfoCards({ data }) {
  const { companyName, size, seniority } = data
  return (
    <section className={cls.company_info}>
      <div className={cls.company_boxes}>
        <CompanyInfoCard title={'Company Name'} src={'/house.svg'} value={companyName} />
        <CompanyInfoCard title={'Company Size'} src={'/users.svg'} value={size} />
        <CompanyInfoCard title={'EXP. lvl'} src={'/graph.svg'} value={seniority} />
      </div>
    </section>
  )
}

export default CompanyInfoCards
