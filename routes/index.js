const storyRoutes = require('./story');
// const privateRoutes = require('./private');
// const groupRoutes=require('./groups');
const resumeRoutes = require('./resume')
const aboutRoutes = require('./about');
const homeRoutes = require("./home");
const artRoutes = require("./art");
const projectRoutes = require("./project");

const constructorMethod = (app) => {
  app.use('/story', storyRoutes);
  app.use('/about', aboutRoutes);
  app.use('/resume', resumeRoutes);
  app.use("/home", homeRoutes);
  app.use("/art", artRoutes);
  app.use("/project", projectRoutes);

  app.use("/", (req, res) => {
    res.redirect("/home");
  });

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });

};

module.exports = constructorMethod;