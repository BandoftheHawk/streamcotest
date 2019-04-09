import React from 'react';
import './App.scss';
import Header from './Layout/Header'
import Content from './Layout/Content'
import Footer from './Layout/Footer'

const App = () => {
    return (
        <React.Fragment>
          <Header/>
            <Content/>
          <Footer/>
      </React.Fragment>
    );
};
export default App;
