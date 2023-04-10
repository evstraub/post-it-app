
import './App.css';
import Navbar from './components/Navbar';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat';
function App() {
const [user] =useAuthState(auth)
// console.log(user)

  return (
    <div>
      <Navbar />
      {user ? <Chat /> : null}
    </div>
  );
}

export default App;
