import bcrypt from "bcryptjs";
import User from "../model/usermodal.js";


const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await createUser.save();

    res.status(201).json({
      message: "User Created Successfully",
      user: {
        _id: createUser._id,
        name: createUser.name,
        email: createUser.email,
      },
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Email Credentials " });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials " });
    }

    res.status(200).json({
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default { signup, login };
