const Tkb = require("../models/tkb.model")
const errorResponse = require('../response/errorResponse')
const successResponse = require('../response/successResponse')

module.exports.getTkb= async(req, res)=>{
  const Tkbs= await Tkb.find();
  if (Tkbs.length==0){
    return res.status(404).json(new errorResponse(404, "Tkbs trống"));
  }
  return res.status(200).json(new successResponse(200, "Lấy Tkb thành công", Tkbs));
}

module.exports.createTkb = async(req, res)=>{
  let body = req.body;  
  a= await Tkb.create(body);
  return res.status(201).json(new successResponse(201, "Tạo tkb thành công", a));
}

module.exports.deleteTkb= async(req, res)=>{
  let a= await Tkb.findById(req.params.id);
  if (!!a){
    let r= await Tkb.deleteOne({
      _id: req.params.id
    })
    return res.status(200).json(new successResponse(200, "Xóa thành công", r));
  }
  return res.status(404).json(new errorResponse(404, "Không tìm thấy Tkb: "+ req.params.id))
}


module.exports.updateTkb= async(req, res)=>{
  let a= await Tkb.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true
  });
  if (!!a){
    return res.status(200).json(new successResponse(200, "Sửa thành công", a));
  }
  return res.status(404).json(new errorResponse(404, "Không tìm thấy Tkb: "+ req.params.id))
}