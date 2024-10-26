import {BrowserRouter as Router , Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Forum';
import Forum from './components/Forum';

function App(){
  return(
    <Router>
      <Routes>
        <Route path ="/" element={<Login />}/>\
        <Route path="/register" element={<Register/>} />
        <Route path ="/forum" element ={<Forum />}/>
      </Routes>
    </Router>
  );
}

export default App;