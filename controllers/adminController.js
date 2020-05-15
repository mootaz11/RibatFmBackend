const adminModel = require("../models/admin");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.delete_Sous_Admin = function(req, res) {

    adminModel.findByIdAndDelete(req.params.id)
        .exec()
        .then(result => {
            if (result) {
                return res.status(200).json({ message: 'sous admin deleted' });
            } else {
                return res.status(401).json({ message: 'sous admin delete failed' });
            }
        })
        .catch(err => {
            return res.status(500).json(err);
        })

}
exports.all_admins=function(req,res){


    adminModel.find({ role: "admin" })
    .populate('actualites')
    .exec()
    .then(result => {
        if (result.length > 0) {
            return res.status(200).json(result)

        } else {
            return res.status(404).json({ message: ' admins not found' })
        }
    })
    .catch(err => {
        return res.status(500).json(err)
    })

    
}

exports.All_sub_admins = function(req, res) {
    adminModel.find({ role: "sous-admin" })
        .exec()
        .then(result => {
            if (result.length > 0) {
                return res.status(200).json(result)

            } else {
                return res.status(404).json({ message: ' admins not found' })
            }
        })
        .catch(err => {
            return res.status(500).json(err)
        })

}




exports.updateInfo = function(req, res) {
    adminModel.findById(req.params.id)
        .exec()
        .then(admin => {
            if (admin) {
                bcrypt.hash(req.body.motdepasse, 10, (err, encrypted) => {
                    if (err) {
                        throw new Error();
                    }
                    if (encrypted) {
                        admin.motdepasse = encrypted;
                        admin.nom = req.body.nom;
                        admin.prenom = req.body.prenom;
                        admin.email = req.body.email;
                        admin.role = req.body.role;
                        admin.save()
                            .then(admin => {
                                if (admin) {
                                    return res.status(200).json({ message: 'admin updated', admin });
                                } else {
                                    return res.status(401).json({ message: 'update failed' });
                                }
                            })
                            .catch(err => {
                                return res.status(500).json(err)
                            })
                    }
                })
            } else {
                return res.status(404).json({ message: 'admin not found' });
            }
        })
        .catch(err => {
            return res.status(500).json(err)
        })
}
exports.login = function(req, res) {
    adminModel.findOne({ email: req.body.email })
        .exec()
        .then(admin => {
            if (admin) {
                bcrypt.compare(req.body.motdepasse, admin.motdepasse, (err, same) => {
                    if (err) {

                        return new Error("comparing failed");

                    }
                    if (same) {

                        const token = jwt.sign({ nom: admin.nom, admin_id: admin._id, role: admin.role }, "Secret", { expiresIn: 60 * 60 * 60 })
                        return res.status(200).json({ message: 'login successfully', token });

                    } else

                    {
                        return res.status(401).json({ message: 'mot de passe incorrect' });
                    }

                })
            }
        })
        .catch(err => {
            return res.staus(500).json(err);
        });
}

exports.signup = function(req, res) {
    adminModel.findOne({ email: req.body.email })
        .exec()
        .then(admin => {
            if (admin) {
                return res.status(401).json({ message: 'email exists try another one' });
            } else {

                bcrypt.hash(req.body.motdepasse, 10, (err, encrypted) => {
                    if (err) {
                        return new Error("crypting error");
                    }
                    if (encrypted) {
                        const admin = new adminModel({
                            _id: new mongoose.Types.ObjectId(),
                            nom: req.body.nom,
                            prenom: req.body.prenom,
                            motdepasse: encrypted,
                            email: req.body.email,
                            role: req.body.role
                        })
                        admin.save()
                            .then(admin => {
                                if (admin) {
                                    return res.status(201).json({ message: 'Admin created', admin });
                                }
                            })
                            .catch(err => {
                                return res.status(500).json(err);
                            })
                    }
                })
            }
        })
        .catch(err => {
            return res.status(500).json(err);

        })

}