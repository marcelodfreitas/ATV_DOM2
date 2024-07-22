// 1. Capture, armazene e manipule todos os elementos de classe "card".
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.style.border = '1px solid #000';
    card.style.borderRadius = '10px';
    card.style.padding = '16px';
    card.style.margin = '8px 0';
    card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    
});

// 2. Capture, armazene e manipule todos os elementos de classe "titulo-card".
const titulos = document.querySelectorAll('.titulo-card');
titulos.forEach(titulo => {
    titulo.style.fontSize = '1.5em';
    titulo.style.color = '#2b385b';
});

// 3. Modifique o texto dos títulos nos cards para "Meu card".
titulos.forEach(titulo => {
    titulo.textContent = 'Meu card';
});

// 4. Capture, armazene e manipule todos os elementos de classe "descricao-card".
const descricoes = document.querySelectorAll('.descricao-card');
descricoes.forEach(descricao => {
    descricao.style.fontSize = '1em';
    descricao.style.color = 'white';
});

// 5. Modifique o texto das descrições nos cards para "Descrição modificada pelo JavaScript".
descricoes.forEach(descricao => {
    descricao.textContent = 'Descrição modificada pelo JavaScript';
});

// 6. Capture, armazene e manipule todos os elementos de classe "botao-editar".
const botoesEditar = document.querySelectorAll('.botao-editar');
botoesEditar.forEach(botao => {
    botao.style.padding = '8px 15px';
    botao.style.margin = '4px';
    botao.style.border = 'none';
    botao.style.borderRadius = '4px';
    botao.style.cursor = 'pointer';
    botao.style.backgroundColor = '#4CAF50';
    botao.style.color = 'white';
    
    // 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
    botao.setAttribute('onclick', 'editarCard()');
});

// 7. Capture, armazene e manipule todos os elementos de classe "botao-apagar".
const botoesApagar = document.querySelectorAll('.botao-apagar');
botoesApagar.forEach(botao => {
    botao.style.padding = '8px 15px';
    botao.style.margin = '4px';
    botao.style.border = 'none';
    botao.style.borderRadius = '4px';
    botao.style.cursor = 'pointer';
    botao.style.backgroundColor = '#f44336';
    botao.style.color = 'white';
    // 9. Adicione o atributo 'onclick' nos elementos de classe “botão-apagar”.
    botao.setAttribute('onclick', 'apagarCard()');
});

// Funções de callback para os botões
function editarCard() {
    alert('Clicou em Editar!');
}

function apagarCard() {
    const confirmacao = confirm('Tem certeza que deseja excluir o card?');
    if (confirmacao) {
        alert('Confirmado!');
    } else {
        alert('Cancelou!');
    }
}