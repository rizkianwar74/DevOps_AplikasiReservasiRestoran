const express = require('express')
const { loginPage, loginCheck, logout } = require('../controllers/authController')
const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')
const route = express.Router()

// middleware manual yang digunakan agar user yang telah login tidak bisa ke halaman login sebelum logout
const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/login')
    }
}

// middleware manual untuk otorisasi admin
const isAdmin = (req, res, next) => {
    let user = req.session.user || ""
    if (user && user.isAdmin) {
        next()
    } else {
        res.send('forbidden')
    }
}

// --> Routing Autentikasi (login,logout) <--
route.get('/login', loginPage)
route.post('/login', loginCheck)
route.get('/logout', logout)

// --> Routing User Biasa <--
route.get('/dashboard', isLoggedIn, userController.userIndex)
route.get('/list-meja', isLoggedIn, userController.listMeja)
route.get('/list-menu', isLoggedIn, userController.listMenu)
route.get('/pesan-meja/:id', isLoggedIn, userController.reviewMeja)
route.post('/api/pesan-meja', isLoggedIn, userController.orderMeja)
route.delete('/api/pesan-meja/:id', isLoggedIn, userController.deleteReservation)

// --> Routing User Admin <--
route.get('/dashboard-admin', isLoggedIn, isAdmin, adminController.adminIndex)
route.get('/kelola-menu', isLoggedIn, isAdmin, adminController.menuIndex)
route.get('/menu/:id', isLoggedIn, isAdmin, adminController.getMenu)
route.post('/api/menu', isLoggedIn, isAdmin, adminController.storeMenu)
route.put('/api/menu/:id', isLoggedIn, isAdmin, adminController.updateMenu)
route.delete('/api/menu/:id', isLoggedIn, isAdmin, adminController.deleteMenu)

module.exports = route