
        //modal
        const modal = document.querySelector('#modal-produto');
        document.querySelector('#btn-abrir-modal').addEventListener('click', () => modal.showModal());
        document.querySelector('#btn-fechar').addEventListener('click', () => modal.close());

        fetch('/api/produtos')
            .then(response => response.json())
            .then(produtos => {
                const tbody = document.querySelector('#tabela-produtos tbody');
                tbody.innerHTML = ''; 

                produtos.forEach(prod => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${prod.id}</td>
                        <td>${prod.nome}</td>
                        <td>R$ ${prod.preco.toFixed(2)}</td>
                        <td>${prod.quantidade}</td>
                        <td>
                            <a href="/api/produtos/deletar/${prod.id}" onclick="return confirm('Excluir este item?')">
                                <button style="background: none; border: none; cursor: pointer;">
                                    <img width="24" height="24" src="https://img.icons8.com/scribby/50/filled-trash.png" alt="Excluir"/>
                                </button>
                            </a>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            })
            .catch(err => console.error('Erro ao carregar produtos:', err));

//buscar
document.querySelector('#input-busca').addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const linhas = document.querySelectorAll('#tabela-produtos tbody tr');

    linhas.forEach(linha => {
        const nomeProduto = linha.children[1].textContent.toLowerCase();
        
        //se o nome tiver o texto digitado, mostra a linha. Se não, esconde!
        if (nomeProduto.includes(termo)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
});
