# Aplikasi Web Ulang Tahun Riry Indhani Kayangan (Kakak Butas) - Ke-25

Situs web estetik dan interaktif ini dibuat khusus untuk merayakan hari ulang tahun **Riry Indhani Kayangan (Kakak Butas)** yang ke-25. Web ini menggunakan HTML5, CSS3, dan JavaScript murni agar ringan, responsif, memiliki estetika pastel rose gold, serta mudah di-deploy di berbagai platform.

---

## 🚀 Cara Menjalankan Secara Lokal Menggunakan Laragon

1. **Salin Folder Proyek**:
   Pindahkan folder `Projek_Awal` ke dalam folder root server Laragon Anda, biasanya berada di:
   `C:\laragon\www\`
   Sehingga jalurnya menjadi: `C:\laragon\www\Projek_Awal\`
   
2. **Aktifkan Laragon**:
   - Buka aplikasi **Laragon**.
   - Klik tombol **"Start All"** untuk menjalankan server Apache dan MySQL.

3. **Akses Web**:
   Buka browser Anda dan akses tautan berikut:
   `http://localhost/Projek_Awal/` atau `http://projek_awal.test/`

---

## 🌐 Cara Deploy ke GitHub Pages (Gratis & Online)

Karena situs ini menggunakan teknologi statis (HTML, CSS, JS), Anda dapat mempublikasikannya secara online secara instan melalui **GitHub Pages**.

### Langkah-Langkah:

1. **Membuat Repositori Baru di GitHub**:
   - Masuk ke akun [GitHub](https://github.com/) Anda.
   - Buat repositori baru (klik tombol **"New"**).
   - Beri nama repositori, misalnya: `kakak-butas-birthday`.
   - Setel visibilitas ke **Public** dan biarkan pilihan inisialisasi kosong. Klik **"Create repository"**.

2. **Inisialisasi Git Secara Lokal**:
   Buka terminal/PowerShell di folder `d:\Projek_Awal` lalu jalankan perintah berikut:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi web ulang tahun Kakak Butas"
   git branch -M main
   ```

3. **Hubungkan & Unggah ke GitHub**:
   Salin baris kode remote dari repositori GitHub Anda dan jalankan di terminal:
   ```bash
   git remote add origin https://github.com/USERNAME_ANDA/kakak-butas-birthday.git
   git push -u origin main
   ```
   *(Ganti `USERNAME_ANDA` dengan nama pengguna GitHub Anda)*

4. **Mengaktifkan GitHub Pages**:
   - Setelah sukses terunggah, masuk ke repositori Anda di GitHub.
   - Klik tab **Settings** (Pengaturan).
   - Di menu sebelah kiri, klik bagian **Pages**.
   - Pada bagian **Build and deployment -> Source**, pilih **Deploy from a branch**.
   - Di bawah **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
   - Tunggu sekitar 1-2 menit, lalu segarkan halaman tersebut. Tautan publik web Anda akan muncul (misalnya: `https://USERNAME_ANDA.github.io/kakak-butas-birthday/`).

---

## 🎉 Fitur Utama Aplikasi

1. **Cover Lembar Undangan Estetik**:
   Cover pembuka yang memutar musik lofi instrumental ketika dibuka.
2. **Profil Interaktif (Kakak Butas)**:
   Berisi biografi jenaka dan bar statistik kemampuan unik Kakak Butas di umur 25.
3. **Polaroid Memory Gallery**:
   Galeri foto estetik menggunakan 11 foto asli dari folder `Asset` dengan efek kemiringan polaroid dan caption jenaka ketika diklik perbesar.
4. **Tombol Usil Uji Kesabaran (Challenge)**:
   Tombol klaim kado yang berpindah-pindah posisi sebanyak 10 kali saat dicoba diklik/disentuh sebelum akhirnya bisa dibuka dan menampilkan ucapan spesial.
5. **Tiup Lilin Kue Virtual & Papan Harapan**:
   Pengguna dapat mengetuk lilin kue untuk meniupnya dan menuliskan ucapan harapan ulang tahun yang akan tersimpan secara otomatis menggunakan `localStorage`.
