var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vue-hq-8f020.firebaseio.com"
});

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello World"
  });
};
