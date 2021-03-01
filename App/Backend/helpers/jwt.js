const expressJwt = require('express-jwt');

function authJwt() {

    return expressJwt({
        secret: process.env.SECRET,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            `${process.env.API_URL}/usuarios/login`,
            `${process.env.API_URL}/usuarios/register`
        ]
    })
}

async function isRevoked(req, payload, done) {

    if (!payload.isAdmin) {
        return done(null, true)
    }

    done();
}

module.exports = authJwt;