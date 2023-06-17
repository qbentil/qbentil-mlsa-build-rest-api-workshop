import { addTodo, checkTodo, deleteTodo, getTodo, getTodoById, updateTodo } from '../controllers/todo.controller';

import { Router } from 'express';

const router = Router();

// get all todos
router.get("/", getTodo)

// add todo
router.post("/", addTodo)

// update todo
router.put("/:id", updateTodo)

// check todo
router.patch("/:id", checkTodo)

// delete todo
router.delete("/:id", deleteTodo)

// get single todo
router.get("/:id", getTodoById)

export default router;