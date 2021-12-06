const express = require('express')

const router= express.Router();

const {
  getTkb,
  createTkb,
  deleteTkb,
  updateTkb
} = require('../controllers/tkb.controller')

router
  .route("")
  .get(getTkb)
  .post(createTkb);

router.route("/:id")
  .delete(deleteTkb)
  .patch(updateTkb);

module.exports= router;