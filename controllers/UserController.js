const { User } = require("../model");

module.exports = {
    SignUp: async function (req, res) {
        try {
            const userData = await User.create(req.body);
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;

                res.status(200).json(userData);
            });
        } catch (err) {
            console.log(err);
        }
    },

    Login: async function (req, res) {
        try {
            const userData = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (!userData) {
                res
                    .json({ message: 'Incorrect email or password, please try again', auth: false });
                return;
            }

            const validPassword = await userData.checkPassword(req.body.password);

            if (!validPassword) {
                res
                    .json({ message: 'Incorrect email or password, please try again', auth: false });
                return;
            }

            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;

                res.json({ user: userData, message: 'You are now logged in!', auth: true });
            });

        } catch (err) {
            console.log(err)
        }
    },

    Logout: async function (req, res) {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    },

    hasSignedIn: async function (req, res) {
        
    }
};

