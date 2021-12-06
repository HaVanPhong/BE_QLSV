const Admin= require('../models/admin.models')
const errorResponse = require('../response/errorResponse')
const successResponse = require('../response/successResponse')

module.exports.login= async(req, res)=>{
  const {username, password}= req.body;
  let admin= await Admin.findOne({
    username: username,
    password: password
  })
  if (!!admin){
    return res.status(200).json(new successResponse(200, "ADMIN đăng nhập thành công", admin));
  }
  return res.status(404).json(new errorResponse(404, "Sai TK hoặc MK ADMIN"));
}

module.exports.getAdmin= async(req, res)=>{
  let admins= await Admin.find();
  if (admins.length==0){
    return res.status(404).json(new errorResponse(404, "Admin trống"));
  }
  return res.status(200).json(new successResponse(200, "Lấy Admins thành công", admins));
}


module.exports.createAdmin = async(req, res)=>{
  let body = req.body;  
  a= await Admin.create(body);
  return res.status(201).json(new successResponse(201, "Tạo admin thành công", a));
}

module.exports.deleteAdmin= async(req, res)=>{
  let a= await Admin.findById(req.params.id);
  if (!!a){
    let r= await Admin.deleteOne({
      _id: req.params.id
    })
    return res.status(200).json(new successResponse(200, "Xóa thành công", r));
  }
  return res.status(404).json(new errorResponse(404, "Không tìm thấy Admin: "+ req.params.id))
}


module.exports.updateAdmin= async(req, res)=>{
  let a= await Admin.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true
  });
  if (!!a){
    return res.status(200).json(new successResponse(200, "Sửa thành công", a));
  }
  return res.status(404).json(new errorResponse(404, "Không tìm thấy Admin: "+ req.params.id))
}