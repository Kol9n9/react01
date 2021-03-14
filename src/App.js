import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeaderComponent from './HeaderComponent';
import NavigationComponent from './NavigationComponent';
import MainContent from './MainContent';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      ShopName : "InterShop.ru"
    };
  }
  render()
  {
    return(
      <div>
        <HeaderComponent ShopName={this.state.ShopName}/>
        <NavigationComponent />
        <MainContent />
      </div>
    );
  }
}


export default App;
