const Hobbit = require('./hobbits-model')
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

describe('hobbits model', () => {
  describe('getAll', () => {
    it('resolves all hobbits in h table', async () => {
      const result = await Hobbit.getAll()
      expect(result).toHaveLength(4)
    })
  })
  describe('getById', async () => {
    // the hobbit comes in the correct shape (id, name)
    
  })
})
