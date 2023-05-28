import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header';
import Main from './main';

// {name:"tasneem", active:true, }

class App extends React.Component{
    render(){
      return (
        <>
        <Header/>
        <Main />
        </>
      )
      
    }
}

export default App;
