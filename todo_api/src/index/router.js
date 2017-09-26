import router from 'koa-router';
import todos from '../todos/';
const indexRouter = router();

indexRouter.get('/', function* index(next) {
  this.body = {
    get_todo: 'GET /get_todo',
    add_todo: 'POST /add_todo',
    remove_todo: 'DELETE /remove_todo',
    update_todo: 'PUT /update_todo'
  };
  yield next;
});

indexRouter.get('/get_todo', todos.getTodo);
indexRouter.post('/add_todo', todos.addTodo);
indexRouter.delete('/remove_todo', todos.removeTodo);
indexRouter.put('/update_todo', todos.updateTodo);

export default indexRouter;
