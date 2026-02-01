# 🚀 SOLE SOURCE - Navigation Structure & Development Guide

## 📋 File Structure untuk Pengembangan

```
📁 SoleSource/
├── 📄 index.html              ← Homepage / Landing page
├── 📄 home.html               ← Home page (sama dengan index atau berbeda)
├── 📄 news.html               ← News page (belum dibuat)
├── 📄 about.html              ← About page (belum dibuat)
├── 📄 new-items.html          ← New Items page (belum dibuat)
├── 📄 popular-items.html      ← Popular Items page (belum dibuat)
├── 📄 contact.html            ← Contact Us page (belum dibuat)
├── 📄 style.css               ← Main CSS file
├── 📄 script.js               ← Main JavaScript file
└── 🖼️ [All PNG files]
```

---

## 🔗 Struktur Navigasi Sidebar

Setiap menu item di sidebar sekarang mengarah ke halaman terpisah:

| Menu Item | Link | File Target |
|-----------|------|-------------|
| **Home** | `home.html` | Homepage |
| **News** | `news.html` | Halaman berita/artikel |
| **About** | `about.html` | Halaman tentang perusahaan |
| **New Items** | `new-items.html` | Halaman produk baru |
| **Popular Items** | `popular-items.html` | Halaman produk populer |
| **Contact Us** | `contact.html` | Halaman kontak |

---

## 🛠️ Cara Membuat Halaman Baru

### **Step 1: Copy Template dari index.html**

Setiap halaman baru harus menggunakan struktur yang sama:

1. Copy file `index.html`
2. Rename sesuai kebutuhan (misal: `news.html`)
3. Edit bagian `<main>` untuk konten halaman tersebut
4. **PENTING**: Jangan hapus Header, Sidebar, dan Footer!

### **Step 2: Template Dasar untuk Halaman Baru**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOLE SOURCE - [Nama Halaman]</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&family=Open+Sans+Hebrew+Condensed:wght@400&family=Inter:wght@600&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body class="min-h-screen flex flex-col">
    <!-- COPY Header dari index.html -->
    
    <!-- COPY Sidebar dari index.html -->
    
    <!-- COPY Overlay dari index.html -->
    
    <!-- Main Content Area - EDIT BAGIAN INI -->
    <main class="flex-1 gradient-bg">
        <!-- Konten halaman baru di sini -->
        <div class="container mx-auto px-4 py-8">
            <h1>Halaman [Nama]</h1>
            <!-- Konten spesifik halaman -->
        </div>
    </main>
    
    <!-- COPY Footer dari index.html -->
    
    <script src="script.js"></script>
</body>
</html>
```

---

## 📝 Panduan Pengembangan Per Halaman

### **1. home.html**
**Tujuan**: Homepage / Landing page  
**Konten yang bisa ditambahkan**:
- Hero section dengan CTA
- Featured products
- Kategori produk
- Banner promosi

### **2. news.html**
**Tujuan**: Halaman berita dan artikel  
**Konten yang bisa ditambahkan**:
- Grid artikel terbaru
- Filter berdasarkan kategori
- Search bar artikel
- Pagination

### **3. about.html**
**Tujuan**: Tentang perusahaan  
**Konten yang bisa ditambahkan**:
- Company history
- Mission & vision
- Team members
- Timeline perusahaan

### **4. new-items.html**
**Tujuan**: Produk-produk baru  
**Konten yang bisa ditambahkan**:
- Grid produk baru
- Sort by date/price
- Filter kategori
- Product cards dengan gambar

### **5. popular-items.html**
**Tujuan**: Produk-produk populer  
**Konten yang bisa ditambahkan**:
- Best seller products
- Rating & reviews
- Sort by popularity
- Recommended items

### **6. contact.html**
**Tujuan**: Halaman kontak  
**Konten yang bisa ditambahkan**:
- Contact form
- Map/lokasi
- Info kontak (email, phone, alamat)
- Social media links

---

## 🎨 Best Practices

### **Konsistensi Desain**
- ✅ Gunakan warna yang sama: `#1a3a52` (biru gelap), `#9DF29C` (hijau)
- ✅ Gunakan font yang sama: Open Sans, Inter
- ✅ Gunakan spacing yang konsisten
- ✅ Pastikan header dan footer sama di semua halaman

### **Responsive Design**
- ✅ Test di berbagai ukuran layar (desktop, tablet, mobile)
- ✅ Gunakan Tailwind breakpoints yang sudah ada
- ✅ Pastikan sidebar tetap berfungsi di semua halaman

### **Navigation**
- ✅ Highlight menu aktif di sidebar (tambahkan class `.active`)
- ✅ Pastikan semua link berfungsi
- ✅ Breadcrumb navigation untuk user experience lebih baik

---

## 🔄 Active Menu State (Optional Enhancement)

Untuk menandai menu mana yang sedang aktif, tambahkan JavaScript:

```javascript
// Tambahkan di script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all sidebar menu items
    const menuItems = document.querySelectorAll('.sidebar-item');
    
    // Highlight active menu
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'home.html')) {
            item.classList.add('active');
        }
    });
});
```

Dan tambahkan CSS untuk active state:

```css
.sidebar-item.active {
    background-color: rgba(157, 242, 156, 0.1);
    border-left: 4px solid #9DF29C;
    padding-left: 8px;
}
```

---

## 📦 Checklist Sebelum Deploy

Setiap halaman baru harus memiliki:

- [ ] Header dengan logo, menu, dan search bar
- [ ] Sidebar menu yang berfungsi
- [ ] Overlay untuk sidebar
- [ ] Main content area dengan konten unik
- [ ] Footer dengan logo, sosmed, dan copyright
- [ ] Link ke `style.css` dan `script.js`
- [ ] Semua PNG assets sudah tersedia
- [ ] Responsive di mobile, tablet, dan desktop
- [ ] Sidebar open/close berfungsi dengan baik

---

## 🚀 Workflow Pengembangan

1. **Buat halaman baru** dari template
2. **Edit konten** di bagian `<main>`
3. **Test navigasi** dari sidebar
4. **Test responsive** di berbagai device
5. **Deploy** semua file ke hosting

---

## 📌 Notes Penting

- **CSS dan JS**: Gunakan file `style.css` dan `script.js` yang sama untuk semua halaman
- **Path relatif**: Pastikan semua path file (CSS, JS, PNG) relatif terhadap root folder
- **Naming convention**: Gunakan lowercase dan dash (`-`) untuk nama file HTML

---

## 🎯 Prioritas Pengembangan (Rekomendasi)

1. **High Priority**: `home.html`, `contact.html`
2. **Medium Priority**: `new-items.html`, `popular-items.html`
3. **Low Priority**: `news.html`, `about.html`

---

Good luck dengan pengembangan website SOLE SOURCE! 🎉
