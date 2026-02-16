const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send(`
    <html>
    <body style="background:#0f172a; color:white; text-align:center; font-family:sans-serif; padding:50px;">
      <h1 style="color:#38bdf8;">👑 إمبراطورية خليل العصرية</h1>
      <p>Email: Khalilodjawad@gmail.com</p>
      <div style="margin-top:20px; color:#34d399;">الموقع يعمل أوتوماتيكياً الآن ✅</div>
    </body>
    </html>
  `);
});
app.listen(process.env.PORT || 3000);
