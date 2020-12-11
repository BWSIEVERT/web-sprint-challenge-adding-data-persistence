// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    getTasks() {
        return db('tasks')
    },
    createTask(task) {
        return db('tasks').insert(task)
            .then((id) => {
                return db('tasks').where('id', id)
            })
    }
}