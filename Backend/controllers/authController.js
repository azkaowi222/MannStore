import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/userModel.js";

dotenv.config();

export const Login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      msg: "Mohon Masukan Username & Password",
    });
  }
  const user = await User.findOne({
    where: {
      username: username,
      password: password,
    },
  });
  if (!user) {
    return res.status(401).json({
      status: 401,
      msg: "Username atau password salah",
    });
  }
  const userId = user.id;
  const client = user.username;
  const token = jwt.sign({ userId, client }, "mysecretkey", {
    expiresIn: "4h",
  });
  return res.status(200).json({
    status: 200,
    msg: "Login Berhasil",
    user: client,
    token: token,
  });
};

export const Register = async (req, res) => {
  const { email, username, password, confirmpass } = req.body;
  if (password !== confirmpass) {
    return res.status(400).json({
      msg: "Password & Konfirmasi password tidak sesuai",
    });
  }

  if (!email || !username || !password || !confirmpass) {
    return res.status(400).json({
      msg: "Mohon Lengkapi Form yang tersedia",
    });
  }
  try {
    const user = await User.create({
      email: email,
      username: username,
      password: password,
      confirmpassword: confirmpass,
    });
    return res.status(200).json({
      status: 200,
      msg: "Registrasi Berhasil",
      user: username,
    });
  } catch (error) {
    console.log("Registrasi gagal ", error.message);
  }
};

export const updateData = async (req, res) => {
  const { email, username, password, confirmpass } = req.body;
  try {
    await User.update(
      {
        email,
        username,
        password,
        confirmpassword: confirmpass,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(201).json({
      msg: "Data Berhasil di update",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ msg: "data ditampilkan", users: users });
  } catch (error) {
    console.log(error);
  }
};
export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ msg: `Data berhasil dihapus` });
  } catch (error) {
    console.log(error);
  }
};
