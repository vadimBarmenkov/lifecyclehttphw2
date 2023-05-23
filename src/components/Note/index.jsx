import React from 'react';

const Note = ({content, removeNote, id, key}) => {
    return (
        <div>
            <p>{content}<button onClick={() => removeNote(id)} style={{margin: 10}}>X</button></p>
        </div>
    );
};

export default Note;