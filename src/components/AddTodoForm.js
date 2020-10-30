import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';
import Message from './Message';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };
  const storeAddTodo = useSelector((state) => state.addTodo);
  const { error: addTodoError } = storeAddTodo;
  return (
    <div className='input-field'>
      <form onSubmit={handleSubmit}>
        {addTodoError && <Message text={addTodoError} />}
        <input
          placeholder='Todo text...'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <small>Type your todo and press enter...</small>
          <small className='right'>{text.length}/400</small>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
