const TodoModel = require("../models/TodoModel");
const mongoose = require("mongoose");

const MESSAGE_TODO_NOT_FOUND = "No such todo found";

const getTodos = async (req, res) => {
    const todos = await TodoModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(todos);
};

const getTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: MESSAGE_TODO_NOT_FOUND });
    }
    const todo = await TodoModel.findById(id);

    if (!todo) {
        return res.status(404).json({ error: MESSAGE_TODO_NOT_FOUND });
    }
    return res.status(200).json(todo);
};

const createTodo = async (req, res) => {
    const { title, dueDate, hoursNeeded } = req.body;
    try {
        const todo = await TodoModel.create({ title, dueDate, hoursNeeded });
        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: MESSAGE_TODO_NOT_FOUND });
    }
    const todo = await TodoModel.findOneAndDelete({ _id: id });
    if (!todo) {
        return res.status(404).json({ error: MESSAGE_TODO_NOT_FOUND });
    }
    return res.status(200).json(todo);
};

const updateTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: MESSAGE_TODO_NOT_FOUND });
    }
    const todo = await TodoModel.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );
    if (!todo) {
        return res.status(404).json({ error: MESSAGE_TODO_NOT_FOUND });
    }
    return res.status(200).json(todo);
};

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo,
};
