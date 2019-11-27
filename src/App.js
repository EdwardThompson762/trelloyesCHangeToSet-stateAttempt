import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

 
  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

function deleteItem(item)
  return (
    <ul>
      {item.items.map(item, i)}
    </ul>
  )



const objectWithKVPs = {
  key : 'value',
  object : 'object',

}

//Event Listener for delete
handleDeleteItem = (item) => {
  const newItems = this.StaticRange.trelloyes.filter
  (itm => itm !== item)
  this.setState ({
    shoppingItems: newItems
  })
}

//Event Listener for add random item
handleAddRandomItem = (item) => {

  this.setState ({

})
}


export default App;