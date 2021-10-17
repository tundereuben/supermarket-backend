const auth = async (req, res, next) => {
  try {

      next()
  } catch (e) {
      res.status(401).send({ error: 'An error occurred!'})
  }
};

module.exports = auth;
