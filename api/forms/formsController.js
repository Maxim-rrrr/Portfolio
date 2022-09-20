import { validationResult } from 'express-validator';
import logger from '../../modules/logger.js'
import mail from '../../modules/mail.js';
import MessageContact from '../../Schemes/MessageContact.js'

class Controller {
    async contact(req, res) {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            logger.warn(`Невалидные данные \nERRORS: ${JSON.stringify(errors)}`)
            return res.status(400).json({errors})
        }

        function htmlMessageContact(name, email, subject, message) {
            return '<head> <style> body { margin: 0; padding: 0 10%; } * { font-family: Geneva, Arial, Helvetica, sans-serif; } .line { height: 1px; background-color: #00000041; } .name { margin: 20px 0; font-size: 20px; color: #00477F; font-weight: 700; } .qestion { margin: 20px 0; line-height: 1.5; } .email { margin: 20px 0 10px 0; color: #00477F; } .phone { color: #00477F; } a { color: #00477F; } </style></head><body>'
            + `<div class="name">${name}</div> `
            + `<div class="line"></div> `
            + `<div class="qestion"> ${subject} <br> ${message} </div> `
            + `<div class="line"></div>`
            + `<div class="email"> Email: <a href="mailto:${email}">${email}</a> `
            + `</div></body>`
        }

        async function sendMessage() {
            const html = htmlMessageContact(req.body.name, req.body.email, req.body.subject, req.body.message)
    
            if (await mail('kewin.rrrr@gmail.com', 'Портфолио', '', html)) {
                return 'Отправлено'
            } else {
                return 'Не отправлено'
            }
        }

        const status = await sendMessage()
 

        MessageContact.create({...req.body, status}).then(message => {
            logger.info(`Успешное создание документа MessageContact \nDOC: ${JSON.stringify(message)}`)
            res.send({status: 'OK', message})
        }).catch(error => {
            logger.error(`Ошибка при создании документа MessageContact \nERRORS: ${JSON.stringify(error)}`)
        })
    }
}

export default new Controller()