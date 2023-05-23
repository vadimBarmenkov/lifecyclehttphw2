import {useEffect, useState} from "react";
import Note from "../Note";

export const AddNote = () =>{

    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState();

    const update = () => fetch('http://localhost:7070/notes', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            setNotes(data);
            console.log(data)
        });

    const removeNote = (id) =>{
        fetch('http://localhost:7070/notes/' + id, {method: 'DELETE'});
        update();
    }

    useEffect(() => {
        update();
    }, [])

    const addNoteBtn = () => {

         fetch('http://localhost:7070/notes', {
            method: 'POST',
            body: JSON.stringify({
                id: 1,
                content: content,
            })
        });
         update();

    }

    const refreshBtn = () => {
        update();
    }


    return(
        <div>
            <h1>Notes</h1><button style={{textAlign: "center"}} onClick={refreshBtn}>refresh</button>
            <div>
                {notes.map((note) =>
                    <div>
                        <p>id: {note.id}</p>
                        <Note content={note.content} removeNote={removeNote} id={note.id} key={note.id}/>
                    </div>
                )}

            </div>

            <form onSubmit={event => event.preventDefault()}>
                <label>New note</label>
                <input type={"text"} value={content} onChange={ event => setContent(event.target.value)}/>
                <button onClick={addNoteBtn}>></button>

            </form>
        </div>
    )
}