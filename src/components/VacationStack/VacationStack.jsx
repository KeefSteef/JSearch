import cls from './VacationStack.module.scss'
import CreateStack from '../CreateStack/CreateStack.jsx'
import CompanyStacks from '../CompanyStacks/CompanyStacks'

function VacationStack(props) {
  return (
    <div className={cls.stack}>
      <div className={'info_title'}>
        <h3>Tech stack</h3>
      </div>
      <div className={cls.stack_container}>
        <CreateStack />
        <div className={cls.created_stack}>
          <CompanyStacks
            isLight={false}
            stacks={[
              {
                stackName: 'HTML',
                level: 'regular',
                skillProcent: '152',
              },
              {
                stackName: 'HTML',
                level: 'regular',
                skillProcent: '152',
              },
              {
                stackName: 'HTML',
                level: 'regular',
                skillProcent: '152',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default VacationStack
