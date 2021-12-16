// with supertest we always import the whole server
// regardless of what router we are testing here specifically
const server = require('../server')
const request = require('supertest')
const db = require('../../data/dbConfig')
