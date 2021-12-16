// with supertest we always import the whole server
// regardless of what router we are testing here specifically
const request = require('supertest')
const server = require('../server')
const db = require('../../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy() // disconnects from db
})

it('is the correct env', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
describe('hobbits router', () => {
  describe('[GET] /hobbits', () => {
    let res
    beforeEach(async () => {
      res = await request(server).get('/hobbits')
    })
    it('responds with 200 OK', async () => {
      expect(res.status).toBe(200)
    })
    it('responds with all hobbits', async () => {
      expect(res.body).toHaveLength(4)
    })
  })
  describe('[POST] /hobbits', () => {
    it('responds with a 210 created', async () => {
      // await request(server).put('/hobbits/1').send({})
    })
    it('responds with new hobbit', async () => {

    })
  })
})
