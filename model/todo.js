


const pool = require('./database'); 


const create = (description) => {
    return pool.query(
        'INSERT INTO todo (description) VALUES ($1) RETURNING *',
        [description]
    );
};

const get = async () => {
    try {
        const result = await pool.query('SELECT * FROM todo');
        console.log('Result:', result);
        return result;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};


const remove = (todo_id) => {
    return pool.query('DELETE FROM todo WHERE todo_id = $1', [todo_id]);
}


module.exports = {
    create,
    get,
    remove,
};