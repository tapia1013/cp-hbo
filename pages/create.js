import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage';
import { v4 } from 'uuid';
import { useRouter } from 'next/router';



export default function CreateUser() {
  // context
  const globalState = useStateContext();

  // route
  const router = useRouter();

  const saveUser = () => {
    let users = [],
      user;

    if (ls('users') < 1) {
      user = {
        id: v4(),
        user: globalState.user,
        myListID: []
      }

      // push user.id, user.user, user.myListID to the empty users[array]
      users.push(user);
      // locastorage: set key 'users' -> value of the pushed array
      ls('users', users);
      // send user back to login
      router.push('/login');

      console.log('users', users);
      console.log('lsusers', ls('users'));
    } else {
      // if there was a user in the LS, the users is going to be = to current LS
      users = ls('users')
      user = {
        id: v4(),
        user: globalState.user,
        myListID: []
      }
      users.push(user)
      // assign users to be assigned new user
      ls('users', users)

      console.log('users', users);
      console.log('lsusers', ls('users'));

      // if user push route to login page
      router.push('/login')
    }


  }

  console.log(globalState);

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
            src={globalState.defaultUserImg}
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input
              value={globalState.user}
              onChange={globalState.createUserAction}
              type="text" className="create-user__inputText"
            />
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
          <button
            onClick={saveUser}
            className="create-user__save"
          >Save</button>
        </div>
      </div>
    </div>
  )
}
