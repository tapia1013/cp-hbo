import { useEffect } from 'react';
// import the useState context from the HBOprovider that is wrapped arounf the <Component />  in the _app to pass down data
import { useStateContext } from '../components/HBOProvider';
import Login from '../components/UI/Login/Login';
import { useRouter } from 'next/router'




export default function Home() {
  // call/test to see if it context was imported
  const globalState = useStateContext();
  // next.js router
  const router = useRouter();

  useEffect(() => {
    const loggedIn = false;
    if (loggedIn === false) {
      router.push('/create')
    }
  }, [])


  return (
    <div>
      <Login />
    </div>
  )
}