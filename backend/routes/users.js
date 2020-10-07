// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
let userModel = require('../models/user.model');

router.route('/').get((req, res) => {
  try {
    userModel
      .find()
      .exec()
      .then((reponse) => res.send(reponse));
  } catch (error) {
    res.status(500).send(error);
  }
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new userModel({ email, password });
  console.log('newUser', newUser);
  newUser.save();
  res.send('success');
});

router.route('/').post((req, res) => {
  const email = req.body.email;
  try {
    var result = userModel.find((item) => item.email === email).exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.route('/add').post((req, res) => {
//   console.log('body', req);
//   const username = req.body.username;

//   const newUser = new User({ username });

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/delete').delete((req, res) => {
  console.log('delete', req);
  // const username = req.body.username;

  // const newUser = new User({ username });

  // newUser.save()
  //   .then(() => res.json('User added!'))
  //   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
