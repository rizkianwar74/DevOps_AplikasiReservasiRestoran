const userModel = require('../models').user;
const mejaModel = require('../models').meja;
const menuModel = require('../models').menu;
const reservasiMeja = require('../models').reservasiMeja;
const moment = require('moment');

const userIndex = async (req, res) => {
	// ambil data reservasi yang dimiliki user, serta nomor meja
	const dataReservasi = await reservasiMeja.findAll({
		where: {
			user_id: req.session.user.id,
		},
		include: [{ model: mejaModel, as: 'meja', attributes: ['nomor_meja'] }],
	});

	dataReservasi.forEach(item => {
		const originalDate = item.tanggal// Gantilah dengan nilai asli Anda
		const formattedDate = new Date(originalDate).toLocaleString('en-US', {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});

		item.tanggal = formattedDate;
	});

	res.render('dashboard', {
		layout: 'layouts/layout',
		user: req.session.user,
		dataReservasi,
	});
};

const listMeja = async (req, res) => {
	const dataMejas = await mejaModel.findAll();
	res.render('pesanMeja', {
		layout: 'layouts/layout',
		user: req.session.user,
		dataMejas,
	});
};

const listMenu = async (req, res) => {
	const makanan = await menuModel.findAll({ where: { jenis_menu: 'Makanan' } });
	const minuman = await menuModel.findAll({ where: { jenis_menu: 'Minuman' } });

	res.render('menu', {
		layout: 'layouts/layout',
		user: req.session.user,
		makanan,
		minuman,
	});
};

const reviewMeja = async (req, res) => {
	const meja = await mejaModel.findByPk(req.params.id);
	res.render('reviewMeja', {
		layout: 'layouts/layout',
		user: req.session.user,
		meja,
	});
};

const orderMeja = async (req, res) => {
	try {
		const result = await reservasiMeja.create({
			user_id: req.body.user_id,
			meja_id: req.body.meja_id,
			tanggal: req.body.tanggal,
			waktu: req.body.waktu,
			durasi: req.body.durasi,
		});
		await mejaModel.update({ status: 1 }, { where: { id: req.body.meja_id } });
		res.json({ status: 200, error: null, Response: result });
	} catch (err) {
		res.json({ status: 502, error: err.message });
	}
};

const deleteReservation = async (req, res) => {
	try {
		const resId = req.params.id;
		const dataOld = await reservasiMeja.findByPk(resId);
		await reservasiMeja.destroy({
			where: {
				id: resId,
			},
		});
		await mejaModel.update({ status: 0 }, { where: { id: dataOld.meja_id } });
		res
			.status(200)
			.json({ status: 'success', message: 'Data berhasil dihapus' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ status: 'error', message: 'Gagal menghapus data' });
	}
};

module.exports = {
	userIndex,
	listMeja,
	reviewMeja,
	orderMeja,
	deleteReservation,
	listMenu,
};
