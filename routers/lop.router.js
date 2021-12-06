const express = require('express')

const router= express.Router();

const {
  getLop,
  createLop,
  deleteLop,
  updateLop,
  getLopByID
} = require('../controllers/lop.controller')

router
  .route("")
  .get(getLop)
  .post(createLop);

router.route("/:id")
  .get(getLopByID)
  .delete(deleteLop)
  .patch(updateLop);

module.exports= router;