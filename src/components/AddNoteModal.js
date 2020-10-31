import React, { useEffect, useRef, useState } from 'react';
import M from 'materialize-css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addNote } from '../store/actions/noteActions';
import Message from './Message';

const AddNoteModal = () => {
  const addNoteModal = useRef();
  const dispatch = useDispatch();
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const addNoteHandler = () => {
    dispatch(addNote({ title: noteTitle, text: noteText }));
  };

  const addNoteStore = useSelector((state) => state.addNote);
  const { success, error } = addNoteStore;

  useEffect(() => {
    M.Modal.init(addNoteModal.current, {});
  }, []);
  return (
    <>
      <div className='center' style={{ marginBottom: '20px' }}>
        <button className='btn modal-trigger' data-target='addTodoModal'>
          <i className='material-icons right'>note_add</i>New Note
        </button>
      </div>
      <div
        id='addTodoModal'
        className='modal modal-fixed-footer'
        ref={addNoteModal}
      >
        <div className='modal-content'>
          <h4>New Note</h4>
          {error && <Message text={error} />}
          <div className='input-field'>
            <input
              placeholder='Note title...'
              type='text'
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          </div>
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              const data = editor.getData();
              setNoteText(data);
              // console.log({ event, editor, data });
            }}
            config={{
              toolbar: {
                items: [
                  'heading',
                  '|',
                  'bold',
                  'italic',
                  '|',
                  'bulletedList',
                  'numberedList',
                  '|',
                  'insertTable',
                  '|',
                  'undo',
                  'redo',
                ],
              },
              image: {
                toolbar: [
                  'imageStyle:full',
                  'imageStyle:side',
                  '|',
                  'imageTextAlternative',
                ],
              },
              table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
              },
              language: 'en',
            }}
          />
        </div>
        <div className='modal-footer'>
          <a className='modal-close waves-effect waves-red btn-flat'>Cancel</a>
          <a
            className='waves-effect waves-green btn-flat'
            onClick={addNoteHandler}
          >
            Add Note
          </a>
        </div>
      </div>
    </>
  );
};

export default AddNoteModal;
