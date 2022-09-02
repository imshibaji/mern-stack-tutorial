const Contact = require('../models/contacts');

class ContactController{
    static async list(req, res) {
        const findBy = (req.query.name)? {name: req.query.name} : {};
        console.log(findBy);
        const contacts = await Contact.find(findBy);
        // res.json(contacts);
        res.render('contacts/list', {contacts, req: req.query});
    }

    static async show(req, res) {
        const findBy = {name: req.params.name} || '';
        const contacts = await Contact.find(findBy);
        // res.json(contacts);
        res.render('contacts/show', {contacts});
    }

    static async create(req, res){
        const body = req.body;
        const contact = new Contact(body);
        contact.save();
        if(contact){
            res.redirect('/contacts');
        }
        res.redirect('/contacts');
    }

    static async edit(req, res) {
        const contact = await Contact.findById(req.params.id);
        res.render('contacts/edit', {contact});
    }

    static async delete(req, res) {
        const result = await Contact.findByIdAndDelete(req.params.id);
        if(result){
            res.redirect('/contacts');
        }
        res.redirect('/contacts');
    }
}

module.exports = ContactController;
