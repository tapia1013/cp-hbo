import { useState, useEffect } from 'react';
// import the useState context from the HBOprovider that is wrapped arounf the <Component />  in the _app to pass down data
import { useStateContext } from '../../HBOProvider';
import { useRouter } from 'next/router';
import ls from 'local-storage'
import { useMounted } from '../../Hooks/useMounted';


const Login = () => {
  // call/test to see if it context was imported
  const globalState = useStateContext();
  const router = useRouter();


  const [loadingUsers, setLoadingUsers] = useState(false)
  let users = ls('users') !== null ? ls('users') : []

  let { hasMounted } = useMounted();


  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false)
    }
    console.log('loaded Effect', users);
  }, [])



  console.log('declared users', users);
  const selectUser = (id) => {
    console.log(id);
    // pass in new key to ls that were going to pass in to find out which is the active user
    ls('activeUID', id)

    router.push('/')
  }


  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={() => selectUser(user.id)}
            className="login-user__user-box"
            key={user.id}
          >
            <img
              className="login-user__user-img"
              src="https://pbs.twimg.com/profile_images/378800000519722378/c0fd8906bcfeac191dac58c00e6dcda8.jpeg"
            />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        )
      })
    }
  }






  const createUser = () => {
    router.push('/')
  }






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
          {hasMounted ? showUsers() : ''}
        </div>

        <div className="login-user__buttons">
          <button
            onClick={createUser}
            className="login-user__kid"
          >Create User</button>
        </div>
      </div>
    </div>
  )
}


export default Login;