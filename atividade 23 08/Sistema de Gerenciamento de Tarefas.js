let tarefas = [];
function adicionarTarefa(descricao) {
    tarefas.push({
        descricao: descricao,
        concluida: false
    });
}

function listarTarefas() {
    tarefas.forEach((tarefa, indice) => {
        console.log(`${indice}: ${tarefa.descricao} - ${tarefa.concluida ? 'Concluída' : 'Não concluída'}`);
    });
}

function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
    } else {
        console.log('Índice inválido.');
    }
}

function concluirTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice].concluida = true;
    } else {
        console.log('Índice inválido.');
    }
}

adicionarTarefa('Estudar JavaScript');
adicionarTarefa('Fazer compras');
listarTarefas(); 
concluirTarefa(0); 
listarTarefas(); 
removerTarefa(1); 
listarTarefas(); 