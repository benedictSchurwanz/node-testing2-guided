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
  describe('getById', () => {
    it('resolves a hobbit with given id, name', async () => {
      const result = await Hobbit.getById(1)
      expect(result).toMatchObject({ id: 1, name: 'sam' })
    })
  })
  describe('insert', () => {
    it('creates a new hobbit in db', async () => {
      await Hobbit.insert({ name: 'bilbo' })
      const bilbo = await db('hobbits').where('id', 5)
      expect(bilbo).toMatchObject({ id: 5, name: 'rosie' })
      // const bilbo = await Hobbit.getById('id', 5) NOOO!!!!
    })
    it('resolves the new hobbit with id, name', async () => {

    })
  })
})
