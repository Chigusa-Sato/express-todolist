var express = require('express');
const app = require('../app');
var router = express.Router();

let todos = [];
// todosの表示
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo', todos: todos });
});

// タスクの追加
router.post('/', function(req, res, next){
  const todo = req.body.add;
  todos.push(todo);
  //todoを追加して画面に再表示
  res.redirect('/'); //router.post()内でレンダリングを行わずとも、リダイレクトによりrouter.get()が実行され、最終的に問題なくレンダリングされる
})

//タスクの削除
// app.post('/delete/:id',(req,res)=>{
//   todos.splice(req.params.id,1)
//   res.redirect('/')
// })

module.exports = router;
