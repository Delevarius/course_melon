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

export const addTodos = Bluebird.coroutine(function* generator(todo) {
  const body = JSON.stringify({todo});  
  yield fetch('http://localhost:8080/add_todo', {
    method: 'put',
    mode: 'no-cors',
    body
  });
});
