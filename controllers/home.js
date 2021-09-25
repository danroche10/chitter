const User = require('../model/user');

const HomeController = {
  async Index(req, res) {
    res.render('home/index');
  },
  async Login(req, res) {
    try {
      const { username } = req.body;
      const { password } = req.body;
      const isUserAuthenticated = await User.authenticate(username, password);
      const userId = isUserAuthenticated.id;
      if (isUserAuthenticated === false) {
        return res.redirect('/');
      }
      // Add your authenticated property below:
      req.session.authenticated = true;
      // Add the user object below:
      req.session.user = {
        username,
        userId,
      };
      res.redirect('/posts');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  Logout(req, res) {
    req.session.destroy();
    res.redirect('/');
  },
};

module.exports = HomeController;