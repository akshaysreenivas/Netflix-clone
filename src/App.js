import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/NavBar/Navbar';
import Rowpost from './components/rowpost/Rowpost';
import { Action, Originals } from './url/Urls';

function App() {
  return (
    <div className="">
     <Navbar/>
     <Banner/>
     <Rowpost url={Originals} title="Netflix Originals"  />
     <Rowpost url={Action} title="Action" isSmall />
    </div>
  );
}

export default App;
