const db = require('../database/')

module.exports = {

  post: (req, res) => {
    console.log("in post")
    const { nickName, title, body, rating, fit } = req.body
    db.model.create({
      nickName, title, body, rating, fit
    })
      .then(() => res.status(201).send("post ok"))
      .catch(err => res.status(404).send("error posting: ", err))
  },

  getAll: (req, res) => {
    console.log("in get")
    db.model.find({})
      .then((data) => res.status(200).send(data))
      .catch(err => res.status(404).send("error getAll: ", err))
  },

  deleteAll: (req, res) => {
    console.log("in deleteAll")
    db.model.deleteMany({})
      .then(() => {
        res.status(200).send("all deleted");
      })
      .catch(err => res.status(404).send("error deleting all: ", err))
  },

  deleteOne: (req, res) => {

  },

  updateOne: (req, res) => {

  },

  seedDB: (req, res) => {
    console.log("in seeder")
    db.model.deleteMany({})
      .then(() => res.status(200).send('db cleared'))
      .then(() => db.seeder.insertSampleReviews())
      .catch(err => res.status(404).send("error seeding: ", err))
  }

}