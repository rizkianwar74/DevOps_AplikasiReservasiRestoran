const userModel = require('../models').user;
const bcrypt = require('bcrypt');

const loginPage = (req, res) => {
	try {
		// jika session masih ada, kembalikan ke halaman sebelumnya
		if (req.session.user) {
            if (req.session.user.isAdmin) {
                res.redirect('/dashboard-admin');
            }
            res.redirect('/dashboard');
		}
		res.render('login', { layout: false });
	} catch (error) {
		console.log(error);
	}
};

const loginCheck = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await userModel.findOne({
			where: {
				email: email,
			},
		});

		if (user) {
			const isMatch = await bcrypt.compare(password, user.password);
			if (isMatch) {
				// pengecekan otorisasi, jika user adalah admin maka redirect ke url admin, jika bukan maka ke url user biasa
				if (user.isAdmin == 1) {
					req.session.user = user;
					res.redirect('/dashboard-admin');
                } else {
					req.session.user = user;
                    res.redirect('/dashboard');
                }
			} else {
				res.render('login', {
					layout: false,
					error: 'Invalid email or password',
				});
			}
		} else {
			res.render('login', {
				layout: false,
				error: 'Invalid username or password',
			});
		}
	} catch (error) {
		console.log(error);
	}
};

const logout = (req, res) => {
	req.session.destroy(err => {
		if (err) {
			console.log(err);
		}
		res.redirect('/login');
	});
};

module.exports = { loginPage, loginCheck, logout };
