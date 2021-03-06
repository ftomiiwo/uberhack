var users     = require('./users.routes'),
    calendar  = require('./calendar.routes'),
    requests  = require('./requests.routes'),
    shared    = require('./shared.routes'),
    keepalive = require('./keep-alive.routes'),
    location  = require('./location.routes'),
    trips     = require('./trips.routes');

module.exports = function(app, config) {
  users(app, config);
  calendar(app, config);
  requests(app, config);
  shared(app, config);
  keepalive(app, config);
  location(app, config);
  trips(app, config);
};
