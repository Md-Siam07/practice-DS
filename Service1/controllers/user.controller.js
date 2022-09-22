const mongoose = require('mongoose');
const passport = require('passport');
const jwtHelper = require('../config/jwtHelper')
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var axios = require('axios');

let data = [
    {
        name: "siam",
        age: 12
    },
    {
        name: "inzamam",
        age: 13
    }
]
    
const servURL = "http://service2:3000";

module.exports.register = async (req, res, next) => {
    let responseFromDifferentService =  await axios.get(servURL);
    // await axios.get(servURL)
    //     .then(ress => {
    //         console.log('tt2: ', ress);
    //         responseFromDifferentService = ress;
    //         data.push(responseFromDifferentService);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    res.json(responseFromDifferentService)
}

module.exports.authenticate = (req, res, next) => {
    data.push(req.body);
    res.json(data);
}


