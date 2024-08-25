import Joi from "joi";
import { apiResponseCode } from "../helper.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"



const registration = async(req, res) => {
    const registerSchema = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        userName: Joi.string().required(),
        password: Joi.string().min(8).required()
    });
    try {
        //validate user request
        const {error} = registerSchema.validate(req.body)
        if (error) {
            return res.status(400).json({
                responseCode: apiResponseCode.BAD_REQUEST,
                responseMessage: error.details[0].message,
                data: null
        })
        }
        //destructure fields from the request body
        const { fullName, email, phoneNumber, userName, password } = req.body;
       
       //check if email already exist in database
        let user = await User.findOne({ email });
        if (user) {
               return res.status(400).json({
                 responseCode: apiResponseCode.BAD_REQUEST,
                 responseMessage: `${email} already exists`,
                 data: null,
               });
        }
    
     //Hashing password before saving to the database
    const hashPassword = await bcrypt.hash(password, 10)
        
        //create the information as a new user
        user = new User({
            fullName,
            email,
            phoneNumber,
            userName,
            password: hashPassword,
        })
        
        //save the user to the database
        await user.save();

        res.status(201).json({
             responseCode: apiResponseCode.SUCCESSFUL,
            responseMessage: `${email} registered successfully`,
            data: {
                fullName,
                email,
                phoneNumber,
                userName,
                
             }
        })
       
    } catch (error) {
        console.error(error)
        res.status(500).json({
            responseCode: apiResponseCode.INTERNAL_SERVER_ERROR,
            responseMessage:  "An error occurred while processing your request.",
            data:null,
        })
        
    }
};

const login = async (req, res) => {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }) 
    try {
           const { error } = loginSchema.validate(req.body);
           if (error) {
             return res.status(400).json({
               responseCode: apiResponseCode.BAD_REQUEST,
               responseMessage: error.details[0].message,
               data: null,
             });
        }
        //destructure fields from request body
        const { email, password } = req.body;

        //find if user email exist
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
              responseCode: apiResponseCode.BAD_REQUEST,
              responseMessage: "invalid credentials",
              data: null,
            });
        }
        //check if password sent matches the password on database
        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
              return res.status(400).json({
                responseCode: apiResponseCode.BAD_REQUEST,
                responseMessage: "invalid credentials",
                data: null,
              });
        }
        // token that user can use to access protected routes
                console.log("JWT_SECRET:", process.env.JWT_SECRET);
        
        const token = jwt.sign({ id: user._id, email: user.email },
                process.env.JWT_SECRET,
            {expiresIn: "1h"},
        )
            res.status(200).json({
              responseCode: apiResponseCode.SUCCESSFUL,
              responseMessage: `${email} login successfully`,
              data: {
                fullName: user.fullName,
                email: user.email,
                phoneNumber:user.phoneNumber,
                userName: user.userName,
                token,
              },
            });
    } catch (error) {
         console.error(error);
         res.status(500).json({
           responseCode: apiResponseCode.INTERNAL_SERVER_ERROR,
           responseMessage: "An error occurred while processing your request.",
           data: null,
         });
        
    }
}

    




export {
    registration,
    login
}