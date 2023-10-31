import cls from './Filter.module.scss'
import SallarySelect from '../SallarySelect/SallarySelect'
import Switcher from '../UI/Switcher/Switcher'

function Filter(props) {
  return (
    <div className={cls.filter}>
      <div className={cls.filter_container}>
        <div className={cls.filter_items}>
          <div className={cls.filter_item}>
            <h3>Salary expectations ?</h3>
            <SallarySelect />
          </div>
          <div className={cls.filter_item}>
            <h3>Employment Type</h3>
            <Switcher
              id={'as89f7'}
              name={'a87f9s'}
              variants={['B2B', 'Permanent', 'Mandate Contract', 'All']}
            />
          </div>
          <div className={cls.filter_item}>
            <h3>Seniority</h3>
            <Switcher
              id={'as8'}
              name={'18247'}
              variants={['Junior', 'Middle', 'Senior', 'All']}
            />{' '}
          </div>
        </div>
        <div className={cls.btns}>
          <button>Clear filtres</button>
          <button>Show Offers</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
