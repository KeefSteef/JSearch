import cls from './Home.module.scss'
import Navbar from '../../components/Navbar/Navbar.jsx'
import VacationBoard from '../../components/VacationBoard/VacationBoard.jsx'
import MapWrap from '../../components/MapWrap/MapWrap.jsx'
import CategoriesSearchParamsConnect from '../../components/CategoriesSearchParamsConnect/CategoriesSearchParamsConnect.jsx'

function Home() {
  return (
    <section className={cls.home_page}>
      <CategoriesSearchParamsConnect />
      <main className={cls.main}>
        <Navbar />
        <div className={cls.main_content}>
          <MapWrap />
          <VacationBoard />
        </div>
      </main>
    </section>
  )
}

export default Home
