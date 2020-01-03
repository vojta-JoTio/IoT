        adminAuth: {
           type:"strategy",
           strategy: {
             name: "github",
             label: 'Sign in with Github',
             icon:"fa-github",
             strategy: require("passport-github").Strategy,
            options: {
                clientID: "efb15b57d6421daca197",
                clientSecret: "0d1b99e53ec0bd3c20abcf07572bab96f2cb917",
                callbackURL: "http://localhost:1880/auth/strategy/callback",
            verify: function(accesstoken, refreshToken, profile, done) {
                done(null, profile);
            }
         },
        },
        users: [
         { username: "vojta-novak",permissions: ["*"]}
         ]
        },

0d1b99e53ec0bd3c20abcf07572b2ab96f2cb917
0d1b99e53ec0bd3c20abcf07572bab96f2cb917

adminAuth: require('node-red-auth-github')({
    clientID: 'efb15b57d6421daca197',
    clientSecret: '0d1b99e53ec0bd3c20abcf07572b2ab96f2cb917',
    baseURL: "http://localhost:1880",
    users: [
       { username: "vojta-novak",permissions: ["*"]}
    ]
}),


        adminAuth: {
           type:"strategy",
           strategy: {
             name: "auth0",
             label: 'Sign in with Auth0',
             icon:"fa-github",
             strategy: require("passport-auth0").Strategy,
            options: {
                domain: "dev-tsoo5tq5.eu.auth0.com",
                clientID: "vKIwgyxDEKd9Xqn3wlaBaBF0Tbp9d37S",
                clientSecret:"BumZ40uvrusEbkCHiJnI3CHYgisOCYDwrXXgI4kaeZJacxujGByHOAOK1eloJOI_",
                callbackURL: "http://localhost:1880/auth/strategy/callback",
            verify: function(accesstoken, refreshToken,extraParams, profile, done) {
                done(null, profile);
            }
         },
        },
        users: [
         { username: "vojta.novak@atlas.cz",permissions: ["*"]}
         ]
        },
