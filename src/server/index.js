const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const CryptoJS = require('crypto-js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = __dirname + '/user.json';

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return { users: [] };
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8') || '{"users":[]}');
}

function writeUsers(data) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2));
}

app.post('/register', (req, res) => {
  const { name, lastName, email, password, country } = req.body;

  if (!name || !lastName || !email || !password || !country) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  let data = readUsers();

  const exists = data.users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ message: 'Usuario ya registrado' });
  }

  const newUser = {
    id: uuidv4(),
    name,
    lastName,
    email,
    password: CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex),
    country
  };

  data.users.push(newUser);
  writeUsers(data);

  return res.json({
    token: uuidv4(), 
    expiresIn: 3600,
    user: newUser
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  let data = readUsers();

  const user = data.users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: 'Usuario no encontrado' });
  }

  const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  if (user.password !== hashedPassword) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  return res.json({
    token: uuidv4(),
    expiresIn: 3600,
    user
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
