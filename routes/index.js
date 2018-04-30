var express = require('express');
var router = express.Router();

const Todo = require('../models/todo');
const bodyParser = require('body-parser');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function (req, res) {
    Todo.find({}).then(function(results) {
      res.render('index', { todos: results });
    });
});

router.post('/', function(req, res) {
  let newTodo = new Todo({description: req.body.description})

    newTodo.save().then(function(result) {
      console.log(result);
      res.redirect('/')
    });
});

module.exports = router;
