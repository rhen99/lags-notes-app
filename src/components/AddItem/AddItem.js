import { v4 } from 'uuid';
import {useState} from 'react';
import './AddItem.css';
function AddItem({setNotes, notes}) {
    
    const [modal, setModal] = useState(false);

    const [note, setNote] = useState({
        title: '',
        note: '',
    });

    const toggleModal = (e) => {
        e.preventDefault();
        setModal(!modal);
       setNote({...note, id: v4()});

    }
    const addNote = (e) => {
        e.preventDefault();
        setNotes([...notes, note]);
        
        setNote({...note, id: v4()});
        localStorage.setItem('notes', JSON.stringify([...notes, note]));
        setNote({
            title: '',
            note: ''
        });
    }

    return (
        <div className="container Container">
            <a className="Button" onClick={toggleModal} href="!#">Add Item</a>
            <div className={modal ? "ModalContainer show" : "ModalContainer"}>
                <div className={modal ? "Modal showModal" : "Modal"}>
                    <div className="Close">
                        <a href="!#" onClick={toggleModal} className="CloseButton">&times;</a>
                    </div>
                    <h2 className="Title">Create a note</h2>
                    <form action="#" onSubmit={addNote}>
                        <div className="InputGroup">
                            <label>Title</label>
                            <input type="text" className="Input" name="title" onChange={(e) => setNote({...note, [e.target.name]: e.target.value})} value={note.title}/>
                        </div>
                        <div className="InputGroup">
                            <label>Note</label>
                            <textarea name="note" className="InputTextarea" onChange={(e) => setNote({...note, [e.target.name]: e.target.value})} value={note.note}></textarea>
                        </div>
                        <div className="InputGroup">
                            <input className="Button" type="submit" value="Add Note"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddItem
