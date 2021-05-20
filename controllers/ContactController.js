const { Contacts } = require("../model");
const { User } = require("../model");

module.exports = {
    NewContact: async function (req, res) {
        try {
            const contact = await Contacts.create(req.body);
            res.status(200).json(contact);
        } catch (err) {
            console.log(err);
        };
    },

    GetContacts: async function (req, res) {
        try {
            const all = await Contacts.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['name']
                    }
                ]
            });

            const contacts = all.map((contacts) => contacts.get({ plain: true }));

            res.status(200).json(contacts)
        } catch (err) {
            console.log(err)
        }
    },

    GetContacter: async function (req, res) {
        try {
            const contacter = await Contacts.findAll({
                where: {
                    user_id: req.params.id,
                },
                include: [
                    {
                        model: User,
                        attributes: ['name']
                    }
                ]
            });

            const contact = contacter.map((contacter) => contacter.get({ plain: true }));

            res.status(200).json(contact)
        } catch (err) {
            console.log(err)
        }
    },

    DeleteContact: async function (req, res) {
        try {
            const contact = await Contacts.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (!contact) {
                res.status(404).json({ message: 'No contact found with this id!' });
                return;
            }
            res.status(200).json(contact);
        } catch (err) {
            console.log(err);
        }
    }
}


