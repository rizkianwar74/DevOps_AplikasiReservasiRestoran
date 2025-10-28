# DevOps_AplikasiReservasiRestoran
Aplikasi CRUD Restoran adalah sistem berbasis web yang berfungsi untuk mengelola data restoran secara digital. Sistem ini dirancang untuk memudahkan admin dalam mengelola data menu, sementara pelanggan dapat melihat daftar meja dan melakukan reservasi secara online. Proyek ini bertujuan untuk menciptakan sistem restoran yang efisien menggunakan teknologi web modern seperti Node.js, Express.js, EJS, dan MySQL.

Fitur Utama
Untuk Admin:
- Mengelola data menu (Tambah, Edit, Hapus). 
- Melihat dashboard utama yang berisi ringkasan data restoran. 
- Mengelola data meja dan reservasi pelanggan. 

Untuk Pengguna (Pelanggan):
- Melakukan login untuk mengakses sistem. 
- Melihat daftar menu yang tersedia (makanan dan minuman). 
- Melihat daftar meja beserta status ketersediaannya (tersedia/dipesan). 
- Melakukan reservasi meja dengan mengisi tanggal, waktu, dan durasi.


Instalasi dan Konfigurasi
Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda.

Prasyarat
- Pastikan Node.js dan npm sudah terinstal di perangkat Anda.
- Pastikan Git sudah terinstal.
- Pastikan Anda memiliki server database MySQL yang sedang berjalan (misalnya dari XAMPP).

Langkah-langkah Instalasi
- Clone Repositori Buka terminal Anda dan jalankan perintah berikut untuk mengunduh proyek:
- Instal Node Modules Jalankan perintah berikut untuk menginstal semua dependensi dan library yang dibutuhkan oleh proyek:
- Perintah ini akan membaca file package.json dan mengunduh semua paket yang diperlukan ke dalam folder node_modules.
- Setup Database Jalankan perintah-perintah berikut secara berurutan untuk menyiapkan database dan tabel:
- Buat database baru bernama resto-crud:
  - Buat struktur tabel di dalam database:
  - Isi tabel dengan data awal (seperti akun admin dan menu):
- Jalankan Aplikasi Setelah semua langkah di atas selesai, jalankan server aplikasi dengan perintah:
- Buka di Browser Aplikasi sekarang berjalan dan dapat diakses melalui browser di alamat: 👉 http://localhost:3000


