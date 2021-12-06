const express= require('express')
const router= express.Router();
const {
  getAdmin, 
  createAdmin,
  login,
  deleteAdmin,
  updateAdmin
}= require('../controllers/admin.controller')
router.route("").get(getAdmin).post(createAdmin);
router.route("/login").post(login);
router.route("/:id").delete(deleteAdmin).patch(updateAdmin);

module.exports= router;