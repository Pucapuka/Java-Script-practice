const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const pool = new Pool({
    user :      'postgres',
    host :      'localhost',
    database :  'agenda_db',
    password :  '',
    port:       5432,  
});

//Checar conexão com o banco de dados
pool.connect()
    .then(() => {
        console.log('Conectado ao banco de dados PostgreSQL com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados', err.stack);
    });

//Rota para listar todos os alunos
app.get('/alunos', async(req, res) =>{
    try{
        const result = await pool.query('SELECT * FROM agenda_alunos');
        res.json(result.rows);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

// Rota para adicionar um novo aluno
app.post('/alunos', async (req, res) => {
    const { nome, telefone, email, data_nascimento } = req.body;
    console.log('Dados recebidos:', { nome, telefone, email, data_nascimento }); // Adicionado log

    try {
        const result = await pool.query(
            'INSERT INTO agenda_alunos (nome, telefone, email, data_nascimento) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, telefone, email, data_nascimento]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao inserir aluno:', err.message); // Adicionado log
        res.status(500).json({ error: err.message });
    }
});

//Rota para atualizar(editar) os dados de um aluno
app.put('/alunos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, telefone, email, data_nascimento } = req.body;
    try {
        const result = await pool.query(
            'UPDATE agenda_alunos SET nome = $1, telefone = $2, email = $3, data_nascimento = $4 WHERE id = $5 RETURNING *',
            [nome, telefone, email, data_nascimento, id]
        );
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Aluno não encontrado' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Rota para deletar um aluno
app.delete('/alunos/:id', async (req, res) => {
    const { id } = req.params;
    try{
        await pool.query('DELETE FROM agenda_alunos WHERE id = $1', [id]);
        res.json({message: 'Aluno deletado com sucesso!'});
    }catch(err){
        res.status(500).json({error : err.message});
    }
});

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});