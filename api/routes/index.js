var register_team = require('./register.routes.js');
var users = require('./users.routes');
module.exports = function(app, config) {
  register_team(app, config);
  users(app, config);
};