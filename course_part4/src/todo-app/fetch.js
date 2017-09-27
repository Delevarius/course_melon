import Bluebird from 'bluebird';


export const getTodos = Bluebird.coroutine(function* generator() {
  const headers = new Headers();
  const response = yield fetch('http://localhost:8080/get_todo', {
    method: 'get',
    headers
  });
  const json = yield response.json();
  return json;
});

export const addTodo = Bluebird.coroutine(function* generator(todo) {
  const body = JSON.stringify({todo});  
  yield fetch('http://localhost:8080/add_todo', {
    method: 'post',
    body
  });
});

export const deleteTodo = Bluebird.coroutine(function* generator(id) {
  const body = JSON.stringify({id});  
  yield fetch('http://localhost:8080/remove_todo', {
    method: 'delete',
    body
  });
});