import {
  findUser,
  findUsers,
  createUser,
  updateUser,
  deleteUser,
  findUserByLogin,
  findUserByEmail
} from "../models/user";
import { createToken } from "../middleware/verifyToken";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";
//const router = require('express').Router;
//const Users = require('../models/users.js');
//const user = {username : req.body.email, password : req.body.password};

export const post = async (req, res, next) => {
  const paramsId = req.params.id;
  if (!paramsId) {
    try {
      const { id } = req.token;
      const user = await findUser(id);
      if (user === undefined) {
        return res.status(404).json({ msg: "404: User cannot be found." });
      }

      res.status(200).json(user);
    } catch (e) {
      e.statusCode = 400;
      next(e);
    }
  } else {
    try {
      const { id } = req.params;
      const user = await findUser(id);
      if (!user) {
        return res.status(404).json({ msg: "404: User cannot be found." });
      }
      res.status(200).json(user);
    } catch (e) {
      e.statusCode = 400;
      next(e);
    }
  }
};

export const get= async (req, res, next) => {
  try {
    const {
      email,
      first_name,
      last_name,
      phone,
      password,
      airport,
      is_admin
} catch (e) {
    e.statusCode = 400;
    next(e);
  }
};
    } = req.body;
    if (email && password) {
      const newUser = await createUser(req.body);
      console.log(newUser);
      res.status(200).json({ id: newUser[0] });
    }
 

// router.post = ('/login', (req, res) => {
  
//     const email = req.body.email;
//     const password = req.body.password;

//     user.findUserByEmail({ email })
//     .first()

//     .then( email => {
//         if(email && password) {
//             const token = generateToken(user);
//             user.token = token
//             user.password = undefined;
//             res.status(200).json({id: user.id, username: user.username, token});
//         } else {
//             res.status(401).json({message: "Invalid Credential."})
//         }
//     })
//     .catch( error => {
//         res.status(500).json({message: "Error Logging In", error: error.toString() })
//     })
// })


export const put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await updateUser(id, user);
    res.status(201).json({ token: `${createToken(updatedUser[0])}` });
  } catch (e) {
    e.statusCode = 400;
    next(e);
  }
};

export const deleteU = async (req, res, next) => {
  try {
    const { id } = req.params;
    const delUser = await deleteUser(id);
    res.status(201).json(delUser);
  } catch (e) {
    e.statusCode = 400;
    next(e);
  }
};

//module.exports=router;