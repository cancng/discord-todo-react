import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Loader from '../components/Loader';
import { getNote } from '../store/actions/noteActions';

const Note = () => {
  const dispatch = useDispatch();
  const { noteId } = useParams();

  const userNote = useSelector((state) => state.userNote);
  const { loading, note } = userNote;

  useEffect(() => {
    dispatch(getNote(noteId));
  }, [dispatch, noteId]);
  return (
    <div className='section'>
      <div className='container'>
        <div className='row'>
          <div className='right'>
            <Link to='/notes' className='btn'>
              Go back
            </Link>
          </div>
          <div className='col m6 s12 offset-m3'>
            {loading ? (
              <Loader />
            ) : (
              note && (
                <div>
                  <h2 className='center'>{note.title}</h2>
                  {parse(note.text)}
                </div>
              )
            )}
            {/* <h2>{note.title}</h2>
            {note.text} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
