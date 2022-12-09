const jwt = require("jsonwebtoken");

const JWT_SECRET = "rahasia";

const generateToken = (payload, expiresIn ='10s') => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn
  });
  
  return token;
};

const refreshToken = (payload, expiresIn = '20s') => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn
  })

  return token
}

const verifyToken = (token) => {
  const isVerified = jwt.verify(token, JWT_SECRET);

  return isVerified;
};

module.exports = { generateToken, refreshToken, verifyToken }