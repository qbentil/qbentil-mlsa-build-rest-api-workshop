"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = __importDefault(require("./DB"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const todo_1 = __importDefault(require("./routes/todo"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
// init APP
const APP = (0, express_1.default)();
APP.use(express_1.default.json());
APP.use((0, cors_1.default)({ credentials: true, origin: true }));
// Routes
APP.use("/todo", todo_1.default);
// Error Handler
APP.use(errorHandler_1.default);
(0, DB_1.default)(() => {
    APP.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
});
