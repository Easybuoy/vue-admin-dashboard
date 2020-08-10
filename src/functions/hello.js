
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vue-hq-8f020.firebaseio.com"
});


exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello World",
  });
};

{
  "type": "service_account",
  "project_id": "vue-hq-8f020",
  "private_key_id": "9091eb646da8d2d86819b8cba5678cf7825404c8",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDC1AaJQNCLwfiE\nx0nXzYKtATthWyYQX7zgI0Kr0spUY+0NdOsz3dRZNfL864KTt/4z1CZzoHNN3sH8\njNF4BcCPJCUEzNwiS/hF6ZBaH7EIcloY1441UaLEYa8DhU3AZjbjb+6oNDf5ebUc\nJ2nr0ITQbEG3lrwVcCxHdrPi59XSckV9Apbxj27q5xm21CpzKhQJspnQnna+ne1x\nKULTUw9uEes24dQpmFVnPea+MvuAHwYzLOoUb+O2cew8Hv5hNf9UQlikkjI1g2gC\nBNpdsuHJnImJOBPld7Ks6wbDEAhqc22M7GJuIxyW/8OnIYddjtX9q7y2zBR2xccr\nMsLB66gBAgMBAAECggEAK60kmfhxyCL/96RFpZ9owCgai8THT7xmt0iwVZy3xxtv\ntSiU4dfFFwrFInYZm8wPrMbOp/U8ZCSgEGHxQ5rmhDByLBVQ9E9bpTCrL8kTAvW/\nxPnt434dozDS71MfDxbbDzm0ovix47epJlqfoEHqxF7AjMu59oRjKNIvmZqnkLmx\nD6KELiJF2BdUeA6bOMtOeeN5l9tyGWTTaPXohUIpW4zM6e2TO9T2ZRFaHaHc6PKy\nvQ9+Z134q0zSKAV+lZVvWsdsSeyeFytN3WXkYQ6NwoA8S/LzZbmkE+7SJvIuRbTJ\nrpLZOokcI3APbEBoUZCqmLqp+wKOmUFYG9Miq2Cs0QKBgQDtg9HWCMhSggJ5OGkA\nkHRHPpmM+LNMGw7bMn/XaEsRfKKGVvq6bjdlEicCv8ehYHAD+v2qgrh+ew+aX21J\nrQFv57gMJ6+sZYpe+z+WpzSpVPrQviTOQ26qmGL56kYVKyXls616r5HgOBCABSk2\nIiQNKDykgTB6ec98vuHlIZxYSwKBgQDR/bpo8HiziwZH/QGDqrLiqFq26u2SZ3+D\nwFivChrDyQrhubwTpMsMu9QQjGTlQuNJmB6ZkaPhIescdXpSByU128yY/ha54V95\nFpigf7qrTJcmE4Egirz1uOXlk4Diuxo+ZfTR56X1jF/GupOGPN0WCNlWJD5jNXzs\nT4s6oQSpYwKBgQCUpNXTBKYR9OmFYcddIgqTd9rzPcZAUALJLd6SOeQZKo4wUwkR\nWd7zMxwU/V77YPZZl1/fsXWzOmL2cthbrplipnspqECqPNYPQWB3cWdkvhlGQGma\naNs+iqYO0A5SOzG5guyEBpLd51h0NkanaVB0p4TkUzG6xLcU1AVdt9435wKBgQCr\n9FvLRu9wBq4UEQhGa2ek1zvBgcsdEgeHOeDlJR8Zp+1zPgbXByEGwmA7VNviKM26\nHAkis/JAjufaHBEYTqWX3u9BcP/nIrhtjaVZ+H5Be6xiD6KzpShrBweq4QivoYsy\nAYdiw5BQ7KwZLftT908Llh9yvKch0lEDqXdXgTcyBQKBgQDtMP9ushmyy9XLReO+\ncntmR/+qRITrkP2ANN7zb1bL+ytMQiWRPTMj7NbyOz53aGca5yA9zSiYyxSMgif6\nIhay4Dik4FhozyTqBKhOaAo/Zw7W4VyEHbfoAWyL/CtRY3ZtgdKUCcSo8woSdx81\nfgcI97C4+8H2K1KSMfvt4uBSlw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-frkrk@vue-hq-8f020.iam.gserviceaccount.com",
  "client_id": "103482020241601938015",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-frkrk%40vue-hq-8f020.iam.gserviceaccount.com"
}
