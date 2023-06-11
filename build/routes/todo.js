"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_controller_1 = require("../controllers/todo.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
// get all todos
router.get("/", todo_controller_1.getTodo);
// add todo
router.post("/", todo_controller_1.addTodo);
// update todo
router.put("/:id", todo_controller_1.updateTodo);
// delete todo
router.delete("/:id", todo_controller_1.deleteTodo);
// get single todo
router.get("/:id", todo_controller_1.getTodoById);
exports.default = router;
