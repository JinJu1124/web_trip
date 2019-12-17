const express = require('express');
const Book = require('../models/book');
const Tour = require('../models/tour');
const Answer = require('../models/answer'); 
const catchErrors = require('../lib/async-error');

const router = express.Router();

// 권한이 있는 사람들만 접근이 가능함.
function needAuth(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      req.flash('danger', 'Please signin first.');
      res.redirect('/signin');
    }
  }
  
router.get('/new', needAuth, (req, res, next) => {
  res.render('books/new', {book:{}});
});

router.get('/index', needAuth, (req, res, next) => {
  res.render('books/index', {book: {}});
});


router.post('/', catchErrors(async (req, res, next) => {
  book = new Book({
      tour_name: req.body.tour_name,
      author: user._id,
      price : req.body.price,
      people: req.body.people,
      bookAt: req.body.bookAt
    });
  await book.save();
  req.flash('success', 'Successfully posted');
  res.redirect('/books/index');
  }));

  module.exports = router;