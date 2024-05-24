document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    
    // Aqui você pode adicionar a lógica para enviar o formulário via AJAX ou outro método.
    // Por enquanto, apenas exibimos um alerta de agradecimento.
});

function edita(button) {
    // Obter o elemento pai do botão, que é a div .portfolio-item
    const portfolioItem = button.parentElement;

    // Obter os elementos h3 e p dentro do .portfolio-item
    const titleElement = portfolioItem.querySelector('h3');
    const descriptionElement = portfolioItem.querySelector('p');

    // Solicitar novos valores do usuário
    const newTitle = prompt('Digite o novo título:', titleElement.textContent);
    const newDescription = prompt('Digite a nova descrição:', descriptionElement.textContent);

    // Atualizar os elementos com os novos valores
    if (newTitle) titleElement.textContent = newTitle;
    if (newDescription) descriptionElement.textContent = newDescription;
}

function addPortfolioItem() {
    // Obter os valores do formulário
    const newTitle = document.getElementById('new-title').value;
    const newDescription = document.getElementById('new-description').value;

    // Criar um novo elemento .portfolio-item
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');

    // Adicionar o título e a descrição ao novo item
    const titleElement = document.createElement('h3');
    titleElement.textContent = newTitle;
    portfolioItem.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = newDescription;
    portfolioItem.appendChild(descriptionElement);

    // Adicionar o botão Editar ao novo item
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.setAttribute('onclick', 'edita(this)');
    portfolioItem.appendChild(editButton);

    // Adicionar o novo item ao portfólio
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.insertBefore(portfolioItem, portfolioSection.querySelector('form'));

    // Limpar os campos do formulário
    document.getElementById('add-portfolio-item-form').reset();
}
