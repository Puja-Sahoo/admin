import './css/style.css';
import './css/responsive.css';
import Header from './components/Header';

import { BrowserRouter as Router,Routes} from "react-router-dom"; 

function App() {

  
  return (
    <div className="App">
       <Header/>
      <Router>
        <Routes>
        {/* <Route   path ="/register" element={<Register/>}/> */}
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;
