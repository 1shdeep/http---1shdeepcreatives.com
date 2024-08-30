const Admin = require('../models/admin');
const { sendSuccessResponse, sendFailureResponse } = require('../helpers/responseHelper');
const { generateToken } = require('../helpers/jwtUtils');

const expiresIn = '1h';

const createAdmin = async (req, res) => {
  try {
    const { email, password, fullName, role, isActive } = req.body;

    const admin = new Admin({ email, password, fullName, role, isActive });
    await admin.save();

    return sendSuccessResponse(res, 'Admin created successfully', admin, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const loginAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne( {
    email, 
    password, 
   } ).sort({ createdAt: -1 }).exec();

   if (!admin) {
    return sendFailureResponse(res, 'Email or Password is Incorrect', 404);
  }

   const payload = { 
   'adminId': admin._id,
   'email': admin.email,
   'fullName': admin.fullName
   };

   const token = generateToken(payload, process.env.JWT_SECRET_KEY, expiresIn);

    return sendSuccessResponse(res, 'Admin Login successfully', { 
       token
    });
 
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};



module.exports = {
  createAdmin,
  loginAdmin
};
