const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// แทนที่จะใช้พาธตรงๆ ให้ใช้ path.join และ __dirname แบบนี้ครับ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'templates', 'index.html')); 
    // หรือถ้าไฟล์ script นี้อยู่ในโฟลเดอร์ src อยู่แล้ว ให้ปรับเป็น:
    // res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// บรรทัดนี้สำคัญมาก! เป็นการบอก Express ให้เปิดโฟลเดอร์ public สำหรับเก็บรูปภาพ
app.use(express.static('templates'));

// กำหนด static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Route หลัก
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Route รอง
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'about.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
