import { NextFunction, Request, Response } from "express"

import TODOSCHEMA from "../model/todo.model"

export const getTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todos = await TODOSCHEMA.find();
        res.status(200).json({
            success: true,
            data: todos,
            message: "Get all todos successfully"
        })
    } catch (error) {
        next(error)
    }
}

export const addTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description } = req.body
    try {
        const todo = await TODOSCHEMA.create({
            title, description
        })

        res.status(201).json({
            success: true,
            data: todo,
            message: "Add todo successfully"
        })
    } catch (error) {
        next(error)
    }
}

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description } = req.body
    const { id } = req.params
    try {
        const todo = await TODOSCHEMA.findByIdAndUpdate(id, {
            title, description
        }, { new: true })

        res.status(201).json({
            success: true,
            data: todo,
            message: "Update todo successfully"
        })
    } catch (error) {
        next(error)
    }
}

export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const todo = await TODOSCHEMA.findByIdAndDelete(id)

        res.status(201).json({
            success: true,
            data: todo,
            message: "Delete todo successfully"
        })
    } catch (error) {
        next(error)
    }
}

export const getTodoById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const todo = await TODOSCHEMA.findById(id)

        // if not found
        if (!todo) {
            return res.status(400).json({
                success: false,
                message: "Todo not found"
            })
        }
        res.status(201).json({
            success: true,
            data: todo,
            message: "Get todo by id successfully"
        })
    } catch (error) {
        next(error)
    }
}