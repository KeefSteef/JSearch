import cls from './FileInput.module.scss'

function FileInput({ name }) {
  return (
    <div className={cls.upload}>
      <label htmlFor="file-upload" className={cls.custom_file_upload}>
        <img src="/upload.svg" alt="" />
        <div>
          Drag and drop or <span>Browse file</span>
        </div>
      </label>
      <input id="file-upload" name={name} type="file" />
    </div>
  )
}

export default FileInput
