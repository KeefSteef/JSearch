import cls from './Upload.module.scss'
import UploadHeader from '../../components/UploadHeader/UploadHeader.jsx'
import Positions from '../../components/Positions/Positions.jsx'
import UploadMap from '../../components/UploadMap/UploadMap.jsx'

function Upload(props) {
  return (
    <div className={cls.upload}>
      <div className={cls.upload_container}>
        <UploadHeader />
        <main className={cls.main}>
          <Positions />
          <UploadMap />
        </main>
        <div className={cls.save_btn}>
          <button>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Upload
