const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('hobbits')
}

function getById(id) {
  return db('hobbits')
    .where('id', id)
    .first()
}

async function insert(hobbit) {
  // with postgres you can do:
  // return db('hobbits').insert(hobbit, ['id', 'name'])
  return db('hobbits')
    .insert(hobbit)
    .then(([id]) => {
      return getById(id)
    })
}

async function update(id, changes) {
  return null
}

function remove(id) {
  return null
}
