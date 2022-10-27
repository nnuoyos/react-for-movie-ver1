import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import './App.css';

const App = () => {
 return (
   //react-router-dom v6 버전
  <Router>
    <Routes>
      <Route path="/hello" element={<h1>hello</h1>}/>
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
};

export default App;