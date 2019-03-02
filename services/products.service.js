"use strict"

const DBService = require('moleculer-db');

module.exports = {
    name : "products",
    mixin : [DBService]
}