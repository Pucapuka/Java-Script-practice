class Tarefa {
    constructor(titulo, descricao, prioridade, stat) {
        this.titulo = titulo;           // título
        this.descricao = descricao;     // descrição
        this.prioridade = prioridade;   // prioridade (alta, média, baixa)
        this.stat = stat;               // status (pendente, em progresso, concluída)
    }

    // Função para criar nova tarefa
    static novaTarefa(titulo, descricao, prioridade, stat) {
        return new Tarefa(titulo, descricao, prioridade, stat);
    }
}

let tarefas = []; // Coleção de tarefas

// Função para listar tarefas
function listarTarefas() {
    console.log("Tarefas:\n");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.titulo} - ${tarefa.prioridade} - ${tarefa.stat}`);
    });
}

// Criando um leitor para o log
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para exibir o menu
function exibirMenu() {
    console.log("\nTO-DO List\nOpções:\n");
    console.log("1. Adicionar Tarefa");
    console.log("2. Listar Tarefas");
    console.log("3. Filtrar Tarefas Por Prioridade");
    console.log("4. Remover Tarefa");
    console.log("0. Sair");
    rl.question("Escolha uma opção: ", (escolha) => {
        switch (escolha) {
            case '1': // Adicionar tarefa
                adicionarTarefa();
                break;
            case '2': // Listar tarefas
                listarTarefas();
                break;
            case '3': // Filtrar tarefas por prioridade
                filtrarTarefasPorPrioridade();
                break;
            case '4': // Remover tarefa
                removerTarefa();
                break;
            case '0': // Sair
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                exibirMenu();
                break;
        }
    });
}

// Função para adicionar tarefa
function adicionarTarefa() {
    rl.question("Título: ", (titulo) => {
        rl.question("Descrição: ", (descricao) => {
            rl.question("Prioridade (alta, média, baixa): ", (prioridade) => {
                rl.question("Status (pendente, em progresso, concluída): ", (stat) => {
                    const novaTarefa = Tarefa.novaTarefa(titulo, descricao, prioridade, stat);
                    tarefas.push(novaTarefa);
                    console.log("Tarefa adicionada com sucesso!");
                    exibirMenu();
                });
            });
        });
    });
}

// Função para filtrar tarefas por prioridade
function filtrarTarefasPorPrioridade() {
    rl.question("Qual prioridade você deseja buscar (alta, média, baixa)? ", (prioridade) => {
        const tarefasFiltradas = tarefas.filter(tarefa => tarefa.prioridade === prioridade);
        if (tarefasFiltradas.length > 0) {
            console.log("Tarefas filtradas por prioridade:");
            tarefasFiltradas.forEach(tarefa => {
                console.log(`${tarefa.titulo} - ${tarefa.prioridade} - ${tarefa.stat}`);
            });
        } else {
            console.log("Nenhuma tarefa encontrada com essa prioridade.");
        }
        exibirMenu();
    });
}

// Função para remover tarefa
function removerTarefa() {
    listarTarefas();
    rl.question("Digite o número da tarefa que você quer remover: ", (numero) => {
        const index = parseInt(numero) - 1;
        if (index >= 0 && index < tarefas.length) {
            tarefas.splice(index, 1);
            console.log("Tarefa removida com sucesso!");
        } else {
            console.log("Tarefa não encontrada.");
        }
        exibirMenu();
    });
}

// Iniciar o menu
exibirMenu();
