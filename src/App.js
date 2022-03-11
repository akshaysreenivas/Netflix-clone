import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/NavBar/Navbar';
import Rowpost from './components/rowpost/Rowpost';
import { Action, Originals,Trending,Romance,Comedy,Horror,Documentaries } from './url/Urls';
import React from 'react';
function App() {
  return (
    <div className="">
     <Navbar/>
     <Banner/>
     <Rowpost url={Originals} title="Netflix Originals"  />
     <Rowpost url={Trending} title="Trending Now" isSmall />
     <Rowpost url={Action} title="Action" isSmall />
     <Rowpost url={Romance} title="Romance" isSmall />
     <Rowpost url={Comedy} title="Comedy" isSmall />
     <Rowpost url={Horror} title="Horror" isSmall />
     <Rowpost url={Documentaries} title="Documentaries" isSmall />
    </div>
    
  );
}

export default App;
