// import the useState context from the HBOprovider that is wrapped arounf the <Component />  in the _app to pass down data
import { useStateContext } from '../components/HBOProvider';


export default function Home() {
  // call/test to see if it context was imported
  const globalState = useStateContext();

  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">
            Who is watching?
          </span>
        </div>

        <div className="login-user__form">
          <div className="login-user__user-box">
            <img
              className="login-user__user-img"
              src="https://pbs.twimg.com/profile_images/378800000519722378/c0fd8906bcfeac191dac58c00e6dcda8.jpeg"
            />
            <div className="login-user__user-name">{globalState.test}</div>
          </div>
        </div>

        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
    </div>
  )
}