import React from 'react';

import Note from './Note.jsx';
import Editable from './Editable.jsx';

import LaneActions from '../actions/LaneActions';

export default ({notes, onValueClick, onEdit, onDelete}) => {
    return (
        <ul className="notes">{notes.map((note) =>
            <Note
                className="note"
                editing={note.editing}
                id={note.id}
                onMove={LaneActions.move}
                key={note.id}>
                <Editable
                    editing={note.editing}
                    value={note.task}
                    onValueClick={onValueClick.bind(null, note.id)}
                    onEdit={onEdit.bind(null, note.id)}
                    onDelete={onDelete.bind(null, note.id)}
                />
            </Note>
        )}</ul>
    )
}
