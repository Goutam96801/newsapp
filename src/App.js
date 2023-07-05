import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key='general' apiKey={apiKey} pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path="/Business" element={<News setProgress={setProgress} key='business' apiKey={apiKey} pageSize={pageSize} country="in" category="business" />}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} key='entertainment' apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />}></Route>
          <Route exact path="/General" element={<News setProgress={setProgress} key='general' apiKey={apiKey} pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path="/Health" element={<News setProgress={setProgress} key='health' apiKey={apiKey} pageSize={pageSize} country="in" category="health" />}></Route>
          <Route exact path="/Science" element={<News setProgress={setProgress} key='science' apiKey={apiKey} pageSize={pageSize} country="in" category="science" />}></Route>
          <Route exact path="/Sports" element={<News setProgress={setProgress} key='sports' apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />}></Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} key='technology' apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;