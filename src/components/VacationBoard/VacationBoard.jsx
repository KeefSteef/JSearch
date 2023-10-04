import cls from './VacationBoard.module.scss'
import Button from '../UI/Button/Button.jsx'

function VacationBoard() {
  return (
    <div className={cls.board}>
      <div className={cls.board_container}>
        <div className={cls.vacation_header}>
          <div className={cls.header_container}>
            <div className={cls.logo}>
              <div className={cls.logo_container}>
                <img src="/logo.png" alt="" />
              </div>
            </div>
            <div className="header_info">
              <div className="header_info_container">
                <h3>
                  Technology Strategy Consultant – Enterprise Architecture all
                  levels
                </h3>
                <div className={cls.info_types}>
                  <div className={cls.info_type}>
                    <img src="/point.svg" alt="" />
                    <p>Strzegomska 142A,Wrocław</p>
                  </div>
                  <div className={cls.info_type}>
                    <img src="/job_type.svg" alt="" />
                    <p>Permanent</p>
                  </div>
                  <div className={cls.info_type}>
                    <img src="/salary.svg" alt="" />
                    <p>Undisclosed Salary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.company_info}>
          <div className={cls.company_info_container}>
            <div>
              <div className={cls.company_info_box}>
                <div className={cls.box_header}>
                  <img src="/house.svg" alt="" />
                </div>
                <div className={cls.box}>
                  <div className="value">
                    <p>Enigma</p>
                  </div>
                  <div className={cls.box_name}>
                    <p>Company name</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={cls.company_info_box}>
                <div className={cls.box_header}>
                  <img src="/users.svg" alt="" />
                </div>
                <div className={cls.box}>
                  <div className={cls.value}>
                    <p>700</p>
                  </div>
                  <div className={cls.box_name}>
                    <p>Company size</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={cls.company_info_box}>
                <div className={cls.box_header}>
                  <img src="/graph.svg" alt="" />
                </div>
                <div className={cls.box}>
                  <div className="value">
                    <p>Middle</p>
                  </div>
                  <div className={cls.box_name}>
                    <p>EXP. lvl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.tech_stack}>
          <div className="tech_stack_container">
            <div className={`tech_stack_header ${cls.header_block}`}>
              <p>Tech stack</p>
            </div>
            <div className={cls.stacks}>
              <div className={cls.stack}>
                <div className={cls.stack_circle}>
                  <div data-progress="36">36%</div>
                </div>
                <div className={cls.stack_info}>
                  <p>PHP</p>
                  <small>Advanced</small>
                </div>
              </div>
              <div className={cls.stack}>
                <div className={cls.stack_circle}>
                  <div data-progress="36">36%</div>
                </div>
                <div className={cls.stack_info}>
                  <p>PHP</p>
                  <small>Advanced</small>
                </div>
              </div>
              <div className={cls.stack}>
                <div className={cls.stack_circle}>
                  <div data-progress="36">36%</div>
                </div>
                <div className={cls.stack_info}>
                  <p>PHP</p>
                  <small>Advanced</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.desc}>
          <div className="desc_container">
            <div className={`tech_stack_header ${cls.header_block}`}>
              <p>Description</p>
            </div>
            <div className={cls.desc_info}>
              <p>
                We have an exciting opportunity for a mobile app developer who
                is interested in building a next-generation Flutter mobile app.
                This is a key role that will allow you to have a big impact on
                the entire application. Ideally you have experience building
                advanced applications for the iOS or Android platforms and you
                want to take on a new challenge with a non-native app. Flutter
                experience is expected but you can have experience with only one
                native platform. Implementing BLE communication on mobile
                platforms is a plus. Your technical skill set is important.
                However, we will choose based on your personality, attitude and
                desire to grow your skills. Why Sofomo? Sofomo is one of the
                best places to work for ambitious developers in Poland! We’re
                not a typical software house with hundreds of devs with boring
                maintenance projects. We’re a small family of 50+ experienced
                and friendly developers. We work with some of the most
                innovative companies in Silicon Valley & Europe from
                cryptocurrency to IoT, augmented reality and more. We value
                innovation, creativity, personality, teamwork and learning new
                things every day. Sounds interesting? Are you ready to join us?
                We’ve been waiting for you. Join the Sofomo team!
              </p>
            </div>
          </div>
        </div>
        <div className={cls.get_in_touch}>
          <div className="get_in_touch_container">
            <div className={`${cls.header_block}`}>
              <p>Get in touch</p>
            </div>
            <div className={cls.form_container}>
              <div className={cls.form_tip}>
                <p>About you</p>
              </div>
              <form className={cls.form}>
                <div className={cls.basic_info}>
                  <div className={cls.basic_info_input}>
                    <label htmlFor="html">First and last name</label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className={cls.basic_info_input}>
                    <label htmlFor="html">E-mail</label>
                    <br />
                    <input type="text" />
                  </div>
                </div>
                <div className={cls.form_desc}>
                  <label htmlFor="html">Introduce yourself</label>
                  <textarea />
                </div>
                <div className="form_upload">
                  <div className={cls.form_tip}>
                    <p>File upload</p>
                  </div>
                  <div className={cls.upload}>
                    <label
                      htmlFor="file-upload"
                      className={cls.custom_file_upload}
                    >
                      <img src="/upload.svg" alt="" />
                      <div>
                        Drag and drop or <span>Browse file</span>
                      </div>
                    </label>
                    <input id="file-upload" type="file" />
                  </div>
                </div>
                <div className="form_btn">
                  <Button type={'dark'}>Apply</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VacationBoard
