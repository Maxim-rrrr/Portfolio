import pkg from 'mongoose';
const {Schema, model} = pkg;

const MessageContact = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    subject: {type: String, require: true},
    message: {type: String, require: true},
},
{
    timestamps: true
})

export default model('message_contact', MessageContact)
