const mongoose = require("mongoose");

const adminModel = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    motdepasse: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'sub_admin']
    },
    email: { type: String, required: true },
    actualites: [{ type: mongoose.Types.ObjectId, ref: 'actualite' }]
});


module.exports = mongoose.model('admin', adminModel);