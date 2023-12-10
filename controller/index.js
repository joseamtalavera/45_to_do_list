
const formidable = require('formidable');
const { create, get, remove } = require('../model/todo');



exports.create = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, async (err, fields) => {
        if (err) {
            return res.status(400).json({ error: err });
        }
        
        const { description } = fields;
        if (!description) {
            return res.status(400).json({
                error: 'Description is required',
            });
        }
        try {
            const newTask = await create(description );
            return res.status(200).send({ data: newTask.rows[0]});
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    });
}




exports.read = async (req, res) => {
    try {
        const tasks = await get();
        return res.status(200).send({ data: tasks.rows });

    } catch (err) {
        return res.status(400).json({ error: err });
    }
}




exports.removeTodo = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) {
        return res.status(400).json({
            error: 'Id is required',
        });
    }
    try {
        const deleteTask = await remove(id);
        return res.status(200).send({ data: deleteTask.rows[0] });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
}
