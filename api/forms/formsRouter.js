import Router from 'express'
import { check } from "express-validator"
import controller from './formsController.js'

const router = new Router()


router.post('/contact', [
    check('name', 'Имя не может быть пустым').notEmpty(),
    check('subject', 'Тема не может быть пустым').notEmpty(),
    check('email', 'Email не может быть пустым').notEmpty(),
    check('message', 'Поле сообщения вопроса не может быть пустым').notEmpty(),
], controller.contact)


export default router