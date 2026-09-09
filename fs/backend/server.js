const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
       cb(null, Date.now() + '.png');
    }
});

const upload = multer({ storage });

app.post('/perfil', upload.single('foto'), (req, res) => {
    if (!req.file) {
        return res.status(400).send("Nenhuma foto foi enviada.");
    }

    res.send(`Foto salva com sucesso como: ${req.file.filename}`);
    
    res.send(`    <img src="/uploads/${req.file.filename}" alt="Foto de perfil" style="max-width: 300px;" />
`)
    
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));