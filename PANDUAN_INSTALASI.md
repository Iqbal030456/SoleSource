# 🎨 SOLE SOURCE - Panduan Instalasi Lengkap

## 📦 File yang Sudah Siap Download:
1. ✅ **index.html** - File HTML (sudah ada `<img>` tag)
2. ✅ **style.css** - File CSS (background sudah diatur)
3. ✅ **script.js** - File JavaScript
4. ✅ **PANDUAN_INSTALASI.md** - File ini

---

## 🗂️ Struktur Folder yang Harus Dibuat:

```
📁 SoleSource/
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
├── 🖼️ background.png          ← Taruh PNG background di sini
├── 🖼️ menu-icon.png          ← Taruh PNG menu icon di sini
├── 🖼️ search-icon.png        ← Taruh PNG search icon di sini
├── 🖼️ logo.png               ← Taruh PNG logo di sini
├── 🖼️ instagram-icon.png     ← Taruh PNG Instagram di sini
├── 🖼️ whatsapp-icon.png      ← Taruh PNG WhatsApp di sini
└── 🖼️ twitter-icon.png       ← Taruh PNG Twitter di sini
```

---

## 🚀 Langkah-langkah Instalasi:

### **Step 1: Buat Folder Project**
1. Buat folder baru bernama `SoleSource` (atau nama apapun yang Anda mau)
2. Letakkan di Desktop atau Documents

### **Step 2: Download & Taruh File Code**
1. Download **index.html**
2. Download **style.css**
3. Download **script.js**
4. Taruh **KETIGA FILE** ini di dalam folder `SoleSource`

### **Step 3: Siapkan File PNG Anda**
Siapkan 7 file PNG dengan nama-nama berikut:

#### 📋 Daftar PNG yang Dibutuhkan:

| No | Nama File | Ukuran Rekomendasi | Keterangan |
|----|-----------|-------------------|------------|
| 1 | `background.png` | 1920×1080px | Background utama (area hijau-biru) |
| 2 | `menu-icon.png` | 40×40px | Icon menu hamburger (kiri atas header) |
| 3 | `search-icon.png` | 20×20px | Icon kaca pembesar (dalam search bar) |
| 4 | `logo.png` | 100×40px | Logo perusahaan (footer kiri) |
| 5 | `instagram-icon.png` | 40×40px | Icon Instagram (footer) |
| 6 | `whatsapp-icon.png` | 40×40px | Icon WhatsApp (footer) |
| 7 | `twitter-icon.png` | 40×40px | Icon Twitter/X (footer) |

### **Step 4: Rename PNG Sesuai Nama di Atas**
Pastikan nama file PNG Anda **PERSIS** seperti di tabel:
- Gunakan huruf kecil semua
- Tidak ada spasi
- Format `.png`

**Contoh BENAR:**
- ✅ `menu-icon.png`
- ✅ `logo.png`

**Contoh SALAH:**
- ❌ `Menu-Icon.png` (huruf besar)
- ❌ `menu icon.png` (ada spasi)
- ❌ `menu-icon.jpg` (bukan PNG)

### **Step 5: Taruh Semua PNG ke Folder SoleSource**
Taruh **SEMUA 7 FILE PNG** ke dalam folder `SoleSource` yang sama dengan file HTML, CSS, JS

Hasil akhir folder Anda harus seperti ini:
```
📁 SoleSource/
├── 📄 index.html               ✅
├── 📄 style.css                ✅
├── 📄 script.js                ✅
├── 🖼️ background.png          ✅
├── 🖼️ menu-icon.png          ✅
├── 🖼️ search-icon.png        ✅
├── 🖼️ logo.png               ✅
├── 🖼️ instagram-icon.png     ✅
├── 🖼️ whatsapp-icon.png      ✅
└── 🖼️ twitter-icon.png       ✅
```

### **Step 6: Buka Website**
1. Klik kanan pada file `index.html`
2. Pilih **"Open with"** → **Browser** (Chrome/Firefox/Edge/Safari)
3. Website Anda akan terbuka! 🎉

---

## 📍 Lokasi PNG di Code (Sudah Otomatis!)

Anda **TIDAK PERLU EDIT CODE LAGI!** Semua sudah diatur otomatis:

### 🔹 Background (Main Content)
**File:** `style.css` - Line ~20
```css
.gradient-bg {
    background-image: url('background.png');  ← Otomatis ambil background.png
}
```

### 🔹 Menu Icon (Header)
**File:** `index.html` - Line ~19
```html
<img src="menu-icon.png" alt="Menu" class="w-10 h-10">
```
↑ Otomatis ambil file `menu-icon.png`

### 🔹 Search Icon (Header)
**File:** `index.html` - Line ~29
```html
<img src="search-icon.png" alt="Search" class="w-5 h-5">
```
↑ Otomatis ambil file `search-icon.png`

### 🔹 Logo (Footer)
**File:** `index.html` - Line ~52
```html
<img src="logo.png" alt="Logo" class="w-[100px] h-[40px]">
```
↑ Otomatis ambil file `logo.png`

### 🔹 Instagram Icon (Footer)
**File:** `index.html` - Line ~61
```html
<img src="instagram-icon.png" alt="Instagram" class="w-[40px] h-[40px]">
```
↑ Otomatis ambil file `instagram-icon.png`

### 🔹 WhatsApp Icon (Footer)
**File:** `index.html` - Line ~63
```html
<img src="whatsapp-icon.png" alt="WhatsApp" class="w-[40px] h-[40px]">
```
↑ Otomatis ambil file `whatsapp-icon.png`

### 🔹 Twitter Icon (Footer)
**File:** `index.html` - Line ~65
```html
<img src="twitter-icon.png" alt="Twitter" class="w-[40px] h-[40px]">
```
↑ Otomatis ambil file `twitter-icon.png`

---

## ⚠️ Troubleshooting - Jika PNG Tidak Muncul:

### Problem 1: "PNG tidak muncul, masih kotak kosong"
**Solusi:**
- ✅ Cek nama file PNG **persis sama** dengan yang di code
- ✅ Pastikan semua PNG ada di **folder yang sama** dengan index.html
- ✅ Cek format file adalah `.png` bukan `.jpg` atau `.jpeg`

### Problem 2: "Background tidak muncul"
**Solusi:**
- ✅ Pastikan file bernama `background.png` (huruf kecil semua)
- ✅ Letakkan di folder yang sama dengan `style.css`
- ✅ Refresh browser (tekan F5 atau Ctrl+R)

### Problem 3: "Icon muncul tapi ukurannya aneh"
**Solusi:**
- ✅ Gunakan PNG dengan ukuran yang disarankan
- ✅ Atau edit ukuran di code (ubah angka `w-[40px]` dan `h-[40px]`)

---

## 🎯 Kalau Nama PNG Anda Beda?

Jika nama file PNG Anda berbeda, edit di bagian ini:

### Edit Background:
**File:** `style.css` - Line ~20
```css
/* GANTI 'background.png' dengan nama file Anda */
background-image: url('background.png');

/* Contoh jika file Anda bernama 'bg-hero.png': */
background-image: url('bg-hero.png');
```

### Edit Icon:
**File:** `index.html`
```html
<!-- GANTI 'menu-icon.png' dengan nama file Anda -->
<img src="menu-icon.png" alt="Menu">

<!-- Contoh jika file Anda bernama 'hamburger.png': -->
<img src="hamburger.png" alt="Menu">
```

Lakukan hal yang sama untuk semua icon lainnya.

---

## 💾 Jika PNG di Subfolder:

Jika Anda taruh PNG di subfolder (misal folder `images/`):

```
📁 SoleSource/
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
└── 📁 images/
    ├── 🖼️ background.png
    ├── 🖼️ menu-icon.png
    └── ... (semua PNG di sini)
```

Ganti path di code jadi:
```html
<!-- Tambahkan 'images/' di depan -->
<img src="images/menu-icon.png" alt="Menu">
<img src="images/logo.png" alt="Logo">
```

Dan di CSS:
```css
background-image: url('images/background.png');
```

---

## ✅ Checklist Final:

Sebelum buka website, pastikan:

- [ ] Folder `SoleSource` sudah dibuat
- [ ] File `index.html` ada di folder
- [ ] File `style.css` ada di folder
- [ ] File `script.js` ada di folder
- [ ] File `background.png` ada di folder
- [ ] File `menu-icon.png` ada di folder
- [ ] File `search-icon.png` ada di folder
- [ ] File `logo.png` ada di folder
- [ ] File `instagram-icon.png` ada di folder
- [ ] File `whatsapp-icon.png` ada di folder
- [ ] File `twitter-icon.png` ada di folder
- [ ] Semua nama file **huruf kecil** dan **tidak ada spasi**

---

## 🎉 Selamat!

Website Anda siap digunakan! Buka `index.html` di browser dan semua PNG akan muncul otomatis! 🚀

---

## 📞 Need Help?

Jika ada masalah, cek kembali:
1. Nama file PNG **persis sama** dengan di code
2. Semua file ada di **satu folder** yang sama
3. Format file adalah `.png`
4. Browser sudah di-**refresh** (F5)

Good luck! 💪
