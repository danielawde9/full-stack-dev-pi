

const express = require('express');
const router =  express.Router();

const Book = require('../../models/Book');

//  @route GET /books/test
router.get('/test', (req, res) => {
    Book.find()
        // send json response
        .then((books) => res.json(books))
        .catch (err=> res.status(404).json({nobooksfound: 'no books found'}))

})


router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err=> res.status(404).json({nobooksfound: 'no books found'}))
})

// add book
router.post('/',(req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg:'book created'}))
        .catch(err=> res.status(400).json({err:'cant create book'}))
})

// update book
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg: 'update success'}))
        .catch(err=> res.status(400).json({ message:' error to update'))
})




router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a book' }));
  });


  module.exports = router;



