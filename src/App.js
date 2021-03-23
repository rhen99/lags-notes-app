import {useState, useEffect} from 'react';

import Navbar from './components/Navbar/Navbar';
import AddItem from './components/AddItem/AddItem';
import Notes from './components/Notes/Notes';
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('notes')){
      const data = JSON.parse(localStorage.getItem('notes'));
      setNotes([...data]);
    }
  }, []);

  const deleteNote = (id) => {
    const filtered = notes.filter(note => note.id !== id);

    setNotes([...filtered]);
    localStorage.setItem('notes', JSON.stringify([...filtered])); 
  }

  return (
    <>
      <Navbar/>
      <AddItem setNotes={setNotes} notes={notes}/>
      <Notes notes={notes} deleteNote={deleteNote}/>
    </>
  );
}

export default App;
