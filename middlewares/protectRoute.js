import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token) return res.status(401).json({message: 'Unauthorized'})

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");

        req.user = user;

        next()

    } catch {
        res.status(500).json({message: err.message})
        console.log('Error in singUser: ', err.message)
    }
}

export default protectRoute