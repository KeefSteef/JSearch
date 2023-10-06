import cls from './Home.module.scss'
import Categories from '../../components/Categories/Categories.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Map from '../../components/Map/Map.jsx'
import VacationBoard from '../../components/VacationBoard/VacationBoard.jsx'

function Home() {
  return (
    <section className={cls.home_page}>
      <Categories />
      <main className={cls.main}>
        <Navbar />
        <div className={cls.main_content}>
          <Map />
          <VacationBoard />
        </div>
      </main>
    </section>
  )
}

export default Home
