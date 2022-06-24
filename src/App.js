import './App.css';
import Chat from './group-chat(auth)/Chat';
import SignIn from './group-chat(auth)/SignIn';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
