const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const data = req.body;

    // Salvar os dados no arquivo no seu repositório GitHub
    const filePath = 'Minha-Pesquisa/dados.json';
    
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }

        let jsonData = JSON.parse(fileData);
        jsonData.push(data);

        fs.writeFile(filePath, JSON.stringify(jsonData), 'utf8', (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
                res.status(500).json({ error: 'Erro interno do servidor' });
                return;
            }

            console.log('Dados salvos com sucesso!');
            res.json({ success: true });
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
