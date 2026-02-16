const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; padding:50px; font-family:Arial; background:#f0f9ff; height:100vh;">
      <h1 style="color:blue;">👑 موقع خليل الرسمي</h1>
      <p style="font-size:1.2rem;">Email: <strong>Khalilodjawad@gmail.com</strong></p>
      <div style="color:green; font-weight:bold; margin-top:20px;">تم التحديث بنجاح ✅</div>
    </div>
  `);
});
app.listen(process.env.PORT || 3000);
