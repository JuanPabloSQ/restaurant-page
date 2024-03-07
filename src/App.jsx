import './App.css';
import NavBar from '../src/header/navbar';
import SwipeableTextMobileStepper from '../src/bodypage/carousel';
import BasicCard from './bodypage/card';

function App() {
  return (
    <div>
      <NavBar />
      <BasicCard />
      <SwipeableTextMobileStepper />
    </div>
  );
}

export default App;