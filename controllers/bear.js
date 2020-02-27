const Bear = require('../models/Bear');

exports.createBear = (req, res, next) => {
  console.log(req.body);
  const bear = new Bear({
    name: req.body.name
  });
  bear.save((err) => {
    if (err) { return next(err); }
    res.json({ message: 'Bear created!' });
  });
};

exports.getBears = (req, res) => {
  Bear.find((err, bears) => {
    if (err) {
      res.send(err);
    }
    res.json(bears);
  });
};
