const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const port = 3000;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

const getAllTours =  (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: tours.find(el => el.id === parseInt(req.params.id)),
    },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      }
    })
  });
};

app.route('/api/v1/tours/:id')
  .get(getTour)

app.route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
