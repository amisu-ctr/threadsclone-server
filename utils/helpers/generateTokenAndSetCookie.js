import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: '15D'
    })

    res.cookie('jwt', token, {
        httpOnly: true, // more secure
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15days
        sameSize:"Strict", //CSRF
    })

    return token;
}

export default generateTokenAndSetCookie;