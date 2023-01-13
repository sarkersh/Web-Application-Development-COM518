const notFoundMiddleware = (req, res) => {
    res.status(404).send("Route does not found");
  };
  
  module.exports = notFoundMiddleware;
  