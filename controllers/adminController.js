const menuModel = require('../models').menu;

const adminIndex = (req, res) => {
	res.render('admin/dashboard', {
		layout: 'layouts/layout',
		user: req.session.user,
	});
};

const menuIndex = async (req, res) => {
	const dataMenus = await menuModel.findAll();
	res.render('admin/menu', {
		layout: 'layouts/layout',
		user: req.session.user,
		dataMenus,
	});
};

const storeMenu = async (req, res) => {
	try {
		const result = await menuModel.create({
			nama_menu: req.body.nama_menu,
			jenis_menu: req.body.jenis_menu,
			harga: req.body.harga,
		});
		res.json({ status: 200, error: null, Response: result });
	} catch (err) {
		res.json({ status: 502, error: err.message });
	}
};

const getMenu = async (req, res) => {
	const menu = await menuModel.findByPk(req.params.id);
	res.render('admin/editMenu', {
		layout: 'layouts/layout',
		user: req.session.user,
		menu,
	});
};

const updateMenu = async (req, res) => {
	try {
		const data = await menuModel.findByPk(req.body.id);

		let nama_menu_update = req.body.nama_menu || data.nama_menu;
		let jenis_menu_update = req.body.jenis_menu || data.jenis_menu;
		let harga_update = req.body.harga || data.harga;

		const menu = await menuModel.update(
			{
				nama_menu: nama_menu_update,
				jenis_menu: jenis_menu_update,
				harga: harga_update,
			},
			{
				where: {
					id: data.id,
				},
			}
		);
		res.json({ status: 200, error: null, Response: result });
	} catch (err) {
		res.json({ status: 502, error: err.message });
	}
}

const deleteMenu = async (req, res) => {
	try {
        const menuId = req.params.id;
        await menuModel.destroy({
            where: {
                id: menuId
            }
        });
        res.status(200).json({ status: 'success', message: 'Data berhasil dihapus' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Gagal menghapus data' });
    }
}

module.exports = { adminIndex, menuIndex, storeMenu, getMenu, updateMenu, deleteMenu };
