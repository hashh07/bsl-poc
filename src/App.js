import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageView from './components/ImageView';

function App() {
  return (
    // <div className="">
    //     <Homepage />
    //   {/* <header className="App-header">
    //   </header> */}
    // </div>
    //  <Router>
     <Routes>
       <Route path="/" exact element={<Homepage />} />
       <Route path="/image/:id" element={<ImageView />} />
     </Routes>
  //  </Router>
  );
}

export default App;
