import cls from './Home.module.scss'
import Categories from '../../components/Categories/Categories.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import VacationBoard from '../../components/VacationBoard/VacationBoard.jsx'
import MapWrap from '../../components/MapWrap/MapWrap.jsx'

function Home() {
  return (
    <section className={cls.home_page}>
      <Categories />
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
