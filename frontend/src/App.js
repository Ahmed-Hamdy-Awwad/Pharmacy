import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import  ItemList from './listItems'
import CreateItem from './createItem'
import ListTrx from './listTrx'
import './App.css';

const BaseLayout = () => (
    <div className="content">
        <a href='/' className='Lable'>Items</a>
        <a href='/createItem' className='Lable'>Create Item</a>
        <a href='/listTrx' className='Lable'>List Transactions</a>
        <Route path="/" exact component={ItemList}/>
        <Route path="/createItem" component={CreateItem}/>
        <Route path="/listTrx" component={ListTrx}/>
    </div>)

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;