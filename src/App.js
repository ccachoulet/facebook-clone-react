import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div className="app">

      {/* header */}
      <Header/>
      {/* App body */}
      <div className="app__body">
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      {/* widgets */}
      </div>

    </div>
  );
}

export default App;
