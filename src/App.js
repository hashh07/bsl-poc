import './App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import ImageView from './components/ImageView';
import Circle from './components/Circle';

function App() {

  return (
    <div>
      <Routes>
       <Route path="/" exact element={<Homepage />} />
       <Route path="/Circles" exact element={<Circle />} />
       <Route path="/image/:id" element={<ImageView />} />
     </Routes>
    </div>
  );
}

export default App;
