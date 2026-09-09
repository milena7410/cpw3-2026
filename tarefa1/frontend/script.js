  // Carrega a lista do backend ao abrir a página
    async function carregarTarefas() {
      const res = await fetch('/api/tarefas');
      const tarefas = await res.json();
      
      const lista = document.getElementById('listaTarefas');
      lista.innerHTML = tarefas.map(t => `<li>${t.descricao}</li>`).join('');
    }

    // Envia novos dados para o backend via POST
    document.getElementById('formTarefa').onsubmit = async (e) => {
      e.preventDefault();
      const input = document.getElementById('campoDescricao');

      await fetch('/api/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao: input.value })
      });

      input.value = '';
      carregarTarefas(); // Atualiza a tela sem recarregar a página!
    };

    carregarTarefas();
