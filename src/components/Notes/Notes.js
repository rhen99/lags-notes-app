import './Notes.css'
import Item from '../Item/Item';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
function Notes({notes, deleteNote}) {
    return (
        <TransitionGroup className="Notes container">
            {notes.map((note) => (
                <CSSTransition classNames="note" key={note.id} timeout={500}>
                    <Item deleteNote={deleteNote}  note={note}/>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

export default Notes
