const router = require('express').Router();
const controllers = require('./controller.js');

router
  .route('/reviews')
  .get(controllers.getAll)
  .post(controllers.post)
  .delete(controllers.seedDB)

router
  .route('/reviews/:id')
  .delete(controllers.deleteOne)
  .put(controllers.updateOne)

router
  .route('/reviews/all')
  .delete(controllers.deleteAll)

module.exports = router;