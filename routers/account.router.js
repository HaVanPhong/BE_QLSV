const express= require('express')

const router= express.Router();

const {
  getAccount,
  createAccount,
  deleteAccount, 
  updateAccount,
  login,
  getAllAccountOfClass
} = require('../controllers/account.controller')

router
  .route("")
  .get(getAccount)
  .post(createAccount);

router
  .route("/:id")
  .delete(deleteAccount)
  .patch(updateAccount);

router.route("/login").post(login);  
router.route("/lop/:id").get(getAllAccountOfClass)

module.exports= router;  