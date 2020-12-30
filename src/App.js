import React, {useState} from 'react';
import Todo from "./components/todo/todo.component";
import logo from './logo.svg';
import './App.css';

const App = () => {
  const[inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const itemsList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }; 

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEl, index) => {
        return index !== id;
      })
    })
}

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type='text' placeholder="Add an item" value={inputList} onChange={itemEvent} />
        <button onClick={itemsList}> + </button>

        <ol>
          {
            items.map((itemval, index) => {
             return (
              <Todo
                key= {index} id = {index}
                text= {itemval} onSelect = {deleteItems}
              />
              );
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
