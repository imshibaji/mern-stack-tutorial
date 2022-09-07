const Contact = require('../../models/contacts');

class ContactController{
    static async list(req, res) {
        const findBy = (req.query.name)? {name: req.query.name} : {};
        console.log(findBy);
        const contacts = await Contact.find(findBy);
        // res.json(contacts);
        res.render('admin/contacts/list', {contacts, req: req.query});
    }

    static async show(req, res) {
        const findBy = {name: req.params.name} || '';
        const contacts = await Contact.find(findBy);
        // res.json(contacts);
        res.render('admin/contacts/show', {contacts});
    }

    static async create(req, res){
        const body = req.body;
        const contact = new Contact(body);
        contact.save();
        if(contact){
            res.redirect('/admin/contacts?added=true');
        }else{
            res.redirect('/admin/contacts');
        }
    }

    static async edit(req, res) {
        const contact = await Contact.findById(req.params.id);
        res.render('admin/contacts/edit', {contact});
    }

    static async update(req, res) {
        const result = await Contact.updateOne({_id: req.params.id}, {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            message: req.body.message
        });
        if(result){
            res.redirect('/admin/contacts?updated=true');
        }else{
            res.redirect('/admin/contacts');
        }
    }

    static async delete(req, res) {
        const result = await Contact.findByIdAndDelete(req.params.id);
        if(result){
            res.redirect('/admin/contacts?deleted=true');
        }else{
            res.redirect('/admin/contacts');
        }
    }
}

module.exports = ContactController;
