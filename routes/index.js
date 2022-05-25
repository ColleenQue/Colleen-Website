const prime = require('./story');

const constructorMethod = (app) => {
  
  app.use('/', prime);

  app.use('*', (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;