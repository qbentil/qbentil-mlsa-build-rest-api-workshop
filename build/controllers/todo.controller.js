"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoById = exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodo = void 0;
const todo_model_1 = __importDefault(require("../model/todo.model"));
const getTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_model_1.default.find();
        res.status(200).json({
            success: true,
            data: todos,
            message: "Get all todos successfully"
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getTodo = getTodo;
const addTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    try {
        const todo = yield todo_model_1.default.create({
            title, description
        });
        res.status(201).json({
            success: true,
            data: todo,
            message: "Add todo successfully"
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addTodo = addTodo;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const { id } = req.params;
    try {
        const todo = yield todo_model_1.default.findByIdAndUpdate(id, {
            title, description
        }, { new: true });
        res.status(201).json({
            success: true,
            data: todo,
            message: "Update todo successfully"
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield todo_model_1.default.findByIdAndDelete(id);
        res.status(201).json({
            success: true,
            data: todo,
            message: "Delete todo successfully"
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTodo = deleteTodo;
const getTodoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield todo_model_1.default.findById(id);
        // if not found
        if (!todo) {
            return res.status(400).json({
                success: false,
                message: "Todo not found"
            });
        }
        res.status(201).json({
            success: true,
            data: todo,
            message: "Get todo by id successfully"
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getTodoById = getTodoById;
