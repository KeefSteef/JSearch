import cls from './Upload.module.scss'
import UploadHeader from '../../components/UploadHeader/UploadHeader.jsx'
import Positions from '../../components/Positions/Positions.jsx'
import Textarea from '../../components/UI/Textarea/Textarea.jsx'
import UploadMap from '../../components/UploadMap/UploadMap.jsx'

function Upload(props) {
  return (
    <div className={cls.upload}>
      <div className={cls.upload_container}>
        <header className={cls.header}>
          <UploadHeader />
        </header>
        <main className={cls.main}>
          <Positions />
          <section className={cls.desc}>
            <div className={'info_title'}>
              <h3>Description</h3>
            </div>
            <Textarea name={'test'} />
          </section>
          <section className={cls.map}>
            <UploadMap />
          </section>
        </main>
      </div>
    </div>
  )
}

export default Upload
