import cls from './VacationBoard.module.scss'
import CompanyInfoCards from '../CompanyInfoCards/CompanyInfoCards.jsx'
import CompanyStacks from '../CompanyStacks/CompanyStacks.jsx'
import VacationForm from '../VacationForm/VacationForm.jsx'
import VacationHeader from '../VacationHeader/VacationHeader.jsx'
import VacationDescription from '../VacationDescription/VacationDescription.jsx'

const mockData = {
  img: '/logo.svg',
  companyName: 'Enigma',
  size: 700,
  seniority: 'Middle',
  email: 'test@gmail.com',
  vacationId: 'sfa8790',
  salary: 1200,
  lang: 'PHP',
  vacationName: 'Technology Strategy Consultant – Enterprise Architecture all levels',
  description:
    'We have an exciting opportunity for a mobile app developer who is interested in building a next-generation Flutter mobile app. This is a key role that will allow you to have a big impact on the entire application. Ideally you have experience building advanced applications for the iOS or Android platforms and you want to take on a new challenge with a non-native app. Flutter experience is expected but you can have experience with only one native platform. Implementing BLE communication on mobile platforms is a plus. Your technical skill set is important. However, we will choose based on your personality, attitude and desire to grow your skills. Why Sofomo? Sofomo is one of the best places to work for ambitious developers in Poland! We’re not a typical software house with hundreds of devs with boring maintenance projects. We’re a small family of 50+ experienced and friendly developers. We work with some of the most innovative companies in Silicon Valley & Europe from cryptocurrency to IoT, augmented reality and more. We value innovation, creativity, personality, teamwork and learning new things every day. Sounds interesting? Are you ready to join us? We’ve been waiting for you. Join the Sofomo team!\n' +
    '\n',
  location: 'Strzegomska 142A,Wrocław',
  jobType: 'Permanent',
  techStacks: [
    {
      name: 'PHP',
      level: 'Middle',
      skillProcent: '55%',
    },
    {
      name: 'JS',
      level: 'Middle',
      skillProcent: '55%',
    },
    {
      name: 'Angular',
      level: 'Middle',
      skillProcent: '55%',
    },
  ],
}

function VacationBoard() {
  return (
    <div className={cls.board}>
      <div className={cls.board_container}>
        <section className={cls.vacation_header}>
          <VacationHeader
            name={mockData.vacationName}
            location={mockData.location}
            jobType={mockData.jobType}
            salary={mockData.salary}
          />
        </section>
        <section className={cls.company_info}>
          <CompanyInfoCards
            data={{
              size: mockData.size,
              companyName: mockData.companyName,
              seniority: mockData.seniority,
            }}
          />
        </section>
        <section className={cls.tech_stack}>
          <div className="tech_stack_container">
            <div className={`tech_stack_header ${cls.header_block}`}>
              <p>Tech stack</p>
            </div>
            <div className={cls.stacks}>
              <CompanyStacks stacks={mockData.techStacks} />
            </div>
          </div>
        </section>
        <section className={cls.desc}>
          <div className="desc_container">
            <div className={`tech_stack_header ${cls.header_block}`}>
              <p>Description</p>
            </div>
            <VacationDescription description={mockData.description} />
          </div>
        </section>
        <section className={cls.get_in_touch}>
          <div className="get_in_touch_container">
            <div className={`${cls.header_block}`}>
              <p>Get in touch</p>
            </div>
            <div className={cls.form_container}>
              <VacationForm email={mockData.email} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default VacationBoard
