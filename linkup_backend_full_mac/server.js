const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connexion MongoDB réussie"))
.catch((err) => console.error("❌ Erreur MongoDB :", err));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Link Up API is running!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API test réussie depuis Railway 🚀' });
const User = require('./models/User');

app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
  }
});
});app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


