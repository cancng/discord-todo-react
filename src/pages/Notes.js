import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddNoteModal from '../components/AddNoteModal';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { deleteNote, getNotes } from '../store/actions/noteActions';
import { useAuth } from '../useAuth';

const Notes = () => {
  const dispatch = useDispatch();
  const { userInfo } = useAuth();

  const addNote = useSelector((state) => state.addNote);
  const { success, error: addNoteError } = addNote;

  const userNotes = useSelector((state) => state.userNotes);
  const { error, loading, notes } = userNotes;

  const deleteNotes = useSelector((state) => state.deleteNote);
  const { success: deleteSuccess } = deleteNotes;

  const deleteNoteHandler = (id) => {
    if (window.confirm('Are you sure want to delete note?')) {
      dispatch(deleteNote(id));
    }
  };

  useEffect(() => {
    dispatch(getNotes());
  }, [success, deleteSuccess]);
  return (
    <div className='section'>
      <div className='container'>
        <div className='row'>
          {loading ? (
            <Loader className='col m6 s12 offset-m3' />
          ) : !userInfo ? (
            <Message text='Unauthorized access' />
          ) : (
            <div className='col m6 s12 offset-m3'>
              {addNoteError && <Message text={addNoteError} />}
              <AddNoteModal />
              <ul className='collection'>
                {notes.map((note) => (
                  <li className='collection-item' key={note._id}>
                    {note.title}
                    <i
                      className='material-icons right blue-text'
                      style={{ cursor: 'pointer' }}
                      onClick={() => deleteNoteHandler(note._id)}
                    >
                      delete
                    </i>
                    <Link to={`/note/${note._id}`}>
                      <i className='material-icons right teal-text'>
                        visibility
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
