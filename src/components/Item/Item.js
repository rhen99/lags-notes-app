import './Item.css'
function Item({note, deleteNote}) {

    const handleDelete = (e) => {
        e.preventDefault();
        deleteNote(note.id);
    }

    return (
        <div className="Item">
            <div className="Card">
                <div className="CardBody">
                    <h4 className="CardTitle">{note.title}</h4>
                    
                    <p className="CardContent">
                        {note.note}
                    </p>
                    <div className="CardAction">
                        <a href="!#" onClick={handleDelete} className="Delete">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
