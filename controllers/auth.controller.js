function getSignup(req, res) {
  res.render("user/auth/signup");
}

function signup(req, res) {
  
}

function getLogin(req, res) {
    
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
};
