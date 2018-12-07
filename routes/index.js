const express = require('express');
const router = express.Router();
const DisneyFilm = require('../models/disneyFilm');

/* GET home page. */
router.get('/films', ((req, res, next) => {
  DisneyFilm.find()
    .then((film)=>{
      res.json(film);
    })
    .catch(next);
}));

router.post('/films', ((req, res, next) => {
  
  const newFilm = new DisneyFilm({name: 'cars', year: 2002, protagonist: 'car'})
  newFilm.save()
    .then((film)=>{
      res.json(film)
    })
    .catch(next);

}));




router.put('/films/:id', ((req, res, next) => {

  const filmId = req.params.id;
  //const updatedFilm = req.body;

  // $set = find the filmId and update it with updatedFilm
  DisneyFilms.findByIdAndUpdate(filmId, { $set: {name: 'toy story'} } )
    .then((film) => {
      res.json(film);
    })
    .catch(next);
}));

module.exports = router;
