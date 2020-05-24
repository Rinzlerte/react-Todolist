import React, { Component } from 'react'
import ListFile from './components/ListFile'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


library.add(faTrash);

export default class App extends Component {
  state = {
    items : [{
      text: 'First Commit',
      key: 114522455554
    },
    {
      text: 'Second Commit',
      key: 1145224555543434
    }
  
  ],
    currentItem : {
      text: '',
      key: ''
    }
  }

  handleInput = event => {
    this.setState({
      currentItem : {
        text : event.target.value,
        key : Date.now()
      }
    })
  }

  addItem = e =>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text!==""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items : newItems,
        currentItem : {
          text: '',
          key: ''
        }
      })
    }

  }

  deleteItem = key => {
    console.log(key);
    const filteredItems = this.state.items.filter(item =>item.key!==key);
    console.log(filteredItems);
    this.setState({
      items : filteredItems
    })
  }

  setUpdate = (text, key) =>{
    const items = this.state.items;
    items.find(item =>{
      if (item.key === key){
        item.text = text;
      }
    })
    this.setState({
      items : items
    })
  }

  render() {
    return (
      <div className="app-container">
        <AppBar>
        <Toolbar style={{display:`flex`, justifyContent:`space-around`, alignItems: `center`, flexDirection: `column`}}>
          <Typography variant="h6" style={{paddingTop: `20px`}}>
            TODO LIST /ADD /DELETE /EDIT
          </Typography>
          <form id="todolist-form"> 
            <input type="text" value={this.state.currentItem.text} placeholder="enter text here"
            onChange={this.handleInput}
            />
            <Button variant="contained" color="secondary" href="#contained-buttons" onClick={this.addItem}>ADD</Button>
          </form>
        </Toolbar>
        </AppBar>
        <ListFile data={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </div>
    )
  }
}
