const User = require('../../models/users');

class UserController{
    static async list(req, res) {
        const findBy = (req.query.name)? {name: req.query.name} : {};
        console.log(findBy);
        const users = await User.find(findBy);
        // res.json(contacts);
        res.render('admin/users/list', {users, req: req.query});
    }

    static async show(req, res) {
        const findBy = {name: req.params.name} || '';
        const user = await User.find(findBy);
        res.render('admin/users/show', {user: user[0]});
    }

    static async add(req, res) {
        res.render('admin/users/add');
    }

    static async create(req, res){
        const body = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
            image: req.file.filename
        };
        const user = new User(body);
        user.save();
        if(user){
            res.redirect('/admin/users?added=true');
        }else{
            res.redirect('/admin/users');
        }
    }

    static async edit(req, res) {
        const user = await User.findById(req.params.id);
        res.render('admin/users/edit', {user});
    }

    static async update(req, res) {
        const result = await User.updateOne({_id: req.params.id}, {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
            image: req.file.filename
        });
        if(result){
            res.redirect('/admin/users?updated=true');
        }else{
            res.redirect('/admin/users');
        }
    }

    static async delete(req, res) {
        const result = await User.findByIdAndDelete(req.params.id);
        if(result){
            res.redirect('/admin/users?deleted=true');
        }else{
            res.redirect('/admin/users');
        }
    }
}

module.exports = UserController;
