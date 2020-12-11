// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    getTasks() {
        return db('tasks as t')
            .join('projects as p', 't.project_id', '=', 'p.project_id')
            .select('t.description', 't.notes', 'p.name as project_name', 'p.description as project_description', 'p.completed')
    },
    createTask(task) {
        return db('tasks').insert(task)
            .then((id) => {
                return db('tasks').where('id', id).first()
            })
    }
}