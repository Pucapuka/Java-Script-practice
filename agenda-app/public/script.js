document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-aluno');
    const listaAlunos = document.getElementById('lista-alunos');
    let alunoEditando = null; // Variável global para armazenar o ID do aluno em edição

    // Função para carregar alunos
    async function carregarAlunos() {
        const response = await fetch('/alunos');
        const alunos = await response.json();
        listaAlunos.innerHTML = '';
        alunos.forEach(aluno => {
            const li = document.createElement('li');
            li.textContent = `${aluno.nome} - ${aluno.telefone} - ${aluno.email} - ${aluno.data_nascimento}`;
            
            // Botão de excluir
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.onclick = () => excluirAluno(aluno.id);
            li.appendChild(deleteButton);

            // Botão de editar
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.onclick = () => carregarDadosParaEdicao(aluno);
            li.appendChild(editButton);

            listaAlunos.appendChild(li);
        });
    }

    // Função para adicionar ou atualizar aluno
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const data_nascimento = document.getElementById('data_nascimento').value;

        if (alunoEditando) {
            // Atualizar aluno existente
            await fetch(`/alunos/${alunoEditando}`, {
                method: 'PUT',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({ nome, telefone, email, data_nascimento })
            });
            alunoEditando = null; // Resetando a variável após a edição
        } else {
            // Adicionar novo aluno
            await fetch('/alunos', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({ nome, telefone, email, data_nascimento })
            });
        }

        form.reset();
        carregarAlunos();
    });

    // Função para excluir aluno
    async function excluirAluno(id) {
        await fetch(`/alunos/${id}`, {
            method: 'DELETE'
        });
        carregarAlunos();
    }

    // Função para carregar dados do aluno no formulário para edição
    function carregarDadosParaEdicao(aluno) {
        document.getElementById('nome').value = aluno.nome;
        document.getElementById('telefone').value = aluno.telefone;
        document.getElementById('email').value = aluno.email;
        document.getElementById('data_nascimento').value = aluno.data_nascimento;
        alunoEditando = aluno.id; // Guardar o ID do aluno sendo editado
    }

    carregarAlunos();
});
