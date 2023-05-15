import './App.css';
import Brand from './components/Brand';
import Show from './components/Show';
import { React, useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filterText, setFilterText] = useState('');
  const [listServer, setlistServer] = useState([]);
  console.log(filterText);


  async function somethingSend(){
    var data = new FormData(); 
    data.append("token", "token");
    data.append("title", filterText);
    await fetch("https://playso.fun/test/", {
      method: "POST",
      body: data
    })
    .then(response => response.json())
    .then(response => {  
    setlistServer(response);
    }) 
  }
  console.log(filterText);


  return (
    <div className="App">
      <form>
        <input 
        type="text" 
        value={filterText} 
        placeholder="Search..."
        onFocus={handleOpen}
        onBlur={handleClose}
        onChange={(e)=>{setFilterText(e.target.value); somethingSend()}}
        />
      </form>
      <Show className={`list-block ${open ? 'show' : 'hidden'}`}>
        <Brand filterText={filterText} listServer={listServer}/>
      </Show>
    </div>
  );
}

export default App;
