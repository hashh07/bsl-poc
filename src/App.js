import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageView from './components/ImageView';

function App() {
  return (
    <div>
      <Routes>
       <Route path="/" exact element={<Homepage />} />
       <Route path="/image/:id" element={<ImageView />} />
     </Routes>
    </div>
  );
}

export default App;
