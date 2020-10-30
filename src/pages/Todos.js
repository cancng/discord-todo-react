import React, { useEffect, useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Moment from 'react-moment';
import {
  deleteTodo,
  getUserTodos,
  markTodo,
} from '../store/actions/todoActions';
import { useAuth } from '../useAuth';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddTodoForm from '../components/AddTodoForm';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Todos = () => {
  const dispatch = useDispatch();
  const { pageNumber = 1 } = useParams();
  const { userInfo, loading } = useAuth();
  const [todoFilter, setTodoFilter] = useState('all');

  const storeAddTodo = useSelector((state) => state.addTodo);
  const { success: addTodoSuccess } = storeAddTodo;

  const userTodos = useSelector((state) => state.userTodos);
  const {
    loading: getTodosLoading,
    error: getTodosError,
    todos,
    pages,
    page,
  } = userTodos;

  const storeDeleteTodo = useSelector((state) => state.deleteTodo);
  const {
    error: deleteTodoError,
    success: deleteTodoSuccess,
  } = storeDeleteTodo;

  const storeMarkTodo = useSelector((state) => state.markTodo);
  const { success: markTodoSuccess } = storeMarkTodo;
  const tabsRef = useRef();

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure want to delete todo?')) {
      dispatch(deleteTodo(id));
    }
  };

  useEffect(() => {
    M.Tabs.init(tabsRef.current, {});
  }, [todos]);

  useEffect(() => {
    dispatch(getUserTodos(pageNumber));
  }, [
    dispatch,
    addTodoSuccess,
    deleteTodoSuccess,
    markTodoSuccess,
    pageNumber,
  ]);
  return (
    <div className='section'>
      <div className='container' style={{ marginTop: 20 }}>
        <div className='row'>
          {loading ? (
            <Loader className='center' />
          ) : !userInfo ? (
            <Message text='Unauthorized access' />
          ) : (
            <>
              <div className='col s12 m4'>
                <AddTodoForm />
              </div>
              <div className='col s12 m8'>
                {getTodosLoading ? (
                  <Loader size='big' />
                ) : getTodosError ? (
                  <Message text={getTodosError} />
                ) : (
                  <>
                    {deleteTodoError && <Message text={deleteTodoError} />}
                    {todos.length === 0 && (
                      <Message text="You don't have any todo." color='teal' />
                    )}
                    <ul className='collection'>
                      <div className='row'>
                        <div className='col s12'>
                          <ul className='tabs' ref={tabsRef}>
                            <li
                              className='tab col s4'
                              onClick={(e) => setTodoFilter('all')}
                            >
                              <a href='/#'>All</a>
                            </li>
                            <li
                              className='tab col s4'
                              onClick={(e) => setTodoFilter('undone')}
                            >
                              <a href='/#'>Undone</a>
                            </li>
                            <li
                              className='tab col s4'
                              onClick={(e) => setTodoFilter('done')}
                            >
                              <a href='/#'>Done</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {todos && todoFilter === 'undone'
                        ? todos
                            .filter((todo) => todo.isCompleted === false)
                            .map((todo) => (
                              <li className='collection-item' key={todo._id}>
                                <p>
                                  <label
                                    style={{
                                      color: todo.isCompleted && '#eb173b',
                                    }}
                                  >
                                    <input
                                      type='checkbox'
                                      checked={
                                        todo.isCompleted ? 'checked' : ''
                                      }
                                      onChange={() =>
                                        dispatch(markTodo(todo._id))
                                      }
                                    />
                                    <span>{todo.text}</span>
                                  </label>
                                </p>
                                <small>
                                  Created{' '}
                                  <Moment fromNow>{todo.createdAt}</Moment>
                                </small>
                                <span
                                  className='right'
                                  onClick={() => deleteHandler(todo._id)}
                                >
                                  <FaTrash
                                    size={18}
                                    color='gray'
                                    className='delete_icon'
                                  />
                                </span>
                              </li>
                            ))
                        : todoFilter === 'done'
                        ? todos
                            .filter((todo) => todo.isCompleted === true)
                            .map((todo) => (
                              <li className='collection-item' key={todo._id}>
                                <p>
                                  <label
                                    style={{
                                      color: todo.isCompleted && '#eb173b',
                                    }}
                                  >
                                    <input
                                      type='checkbox'
                                      checked={
                                        todo.isCompleted ? 'checked' : ''
                                      }
                                      onChange={() =>
                                        dispatch(markTodo(todo._id))
                                      }
                                    />
                                    <span>{todo.text}</span>
                                  </label>
                                </p>
                                <small>
                                  Created{' '}
                                  <Moment fromNow>{todo.createdAt}</Moment>
                                </small>
                                <span
                                  className='right'
                                  onClick={() => deleteHandler(todo._id)}
                                >
                                  <FaTrash
                                    size={18}
                                    color='gray'
                                    className='delete_icon'
                                  />
                                </span>
                              </li>
                            ))
                        : todos.map((todo) => (
                            <li className='collection-item' key={todo._id}>
                              <p>
                                <label
                                  style={{
                                    color: todo.isCompleted && '#eb173b',
                                  }}
                                >
                                  <input
                                    type='checkbox'
                                    checked={todo.isCompleted ? 'checked' : ''}
                                    onChange={() =>
                                      dispatch(markTodo(todo._id))
                                    }
                                  />
                                  <span>{todo.text}</span>
                                </label>
                              </p>
                              <small>
                                Created{' '}
                                <Moment fromNow>{todo.createdAt}</Moment>
                              </small>
                              <span
                                className='right'
                                onClick={() => deleteHandler(todo._id)}
                              >
                                <FaTrash
                                  size={18}
                                  color='gray'
                                  className='delete_icon'
                                />
                              </span>
                            </li>
                          ))}
                    </ul>
                    <Pagination pages={pages} page={page} />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx='true'>
        {`
          .delete_icon:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Todos;
