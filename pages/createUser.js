import Head from 'next/head'
import Image from 'next/image'


export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">
            Who is watching?
          </span>
        </div>

        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src="https://pbs.twimg.com/profile_images/378800000519722378/c0fd8906bcfeac191dac58c00e6dcda8.jpeg"
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input type="text" className="create-user__inputText" />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2, 27, 64)",
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1)100%)'
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(30, 45, 64)",
                  background: 'linear-gradient(135deg, rgba(30, 45, 64,1) 11%, rgba(30, 145, 64,1)100%)'
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(190, 54, 24)",
                  background: 'linear-gradient(135deg, rgba(190, 54, 24,1) 11%, rgba(190, 54, 24,0.1)100%)'
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(24, 75, 164)",
                  background: 'linear-gradient(135deg, rgba(24, 75, 164,1) 11%, rgba(24, 75, 164,0.2)100%)'
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(35,200,200)",
                  background: 'linear-gradient(135deg, rgba(35,200,200,1) 11%, rgba(35,200,200,0.1)80%)'
                }}
              />

            </div>
          </div>
        </div>

        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  )
}
// CREATE TEMPALTE LAYOUTS @ 0:12S ... npm run dev