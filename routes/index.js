const storyRoutes = require('./story');
// const privateRoutes = require('./private');
// const groupRoutes=require('./groups');
// const blogRoutes = require('./blogs')
 const aboutRoutes=require('./about');
 const homeRoutes = require("./home");


const constructorMethod = (app) => {
  app.use('/story', storyRoutes);
  app.use('/about',aboutRoutes);
  // app.use('/private', privateRoutes);
  // app.use('/groups',groupRoutes);
  // app.use('/idols',idolRoutes);
   app.use("/home", homeRoutes);

  app.use("/", (req, res) => {
    res.redirect("/home");
  });

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });

};

module.exports = constructorMethod;