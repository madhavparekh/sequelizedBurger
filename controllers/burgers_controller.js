var express = require('express');
var path = require('path');

var router = express.Router();

//db
var db = require('../models');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/login', (req, res) => {
  var avail = {};

  db.Customers.findOrCreate({
    where: { name: req.body.name },
  }).spread((cust, created) => {
    console.log(cust.get({ plain: true }));
    console.log(created);
    avail.customer = cust.id;

    db.Burgers.findAll({
      where: { devoured: false },
    }).then((data) => {
      avail.avail_burgers = data;
    });

    db.Burgers.findAll({
      where: { devoured: true },
    }).then((data) => {
      avail.consumed_burgers = data;
      console.log(avail);
      res.render('burgerloader', avail);
    });
  });
});

router.post('/create', (req, res) => {
  db.Burgers.create(req.body).then((data) => {
    res.redirect('/');
  });
});

router.put('/api', (req, res) => {
  var condition = `id = ${req.body.id}`;
  db.Burgers.update(req.body, {
    where: { id: req.body.id },
  }).then((data) => {
    res.end();
  });
});

module.exports = router;
