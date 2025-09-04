// Atualizar ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Função para enviar mensagem para o WhatsApp
function sendToWhatsApp() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Verifica se todos os campos estão preenchidos
  if (!name || !email || !message) {
    document.getElementById('formFeedback').textContent = 'Por favor, preencha todos os campos.';
    document.getElementById('formFeedback').style.color = '#cc0000'; // Cor de erro
    return;
  }

  // Prepara a mensagem para a URL
  const whatsappMessage = `Olá, vim do site SeuSite e gostaria de mais informações.%0A%0A*Nome:* ${name}%0A*E-mail:* ${email}%0A*Mensagem:* ${message}`;

  // Use um dos seus números de telefone
  const phoneNumber = '5511992800309';

  // Cria a URL do WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  // Abre a URL em uma nova aba
  window.open(whatsappURL, '_blank');

  // Exibe mensagem de sucesso e limpa o formulário
  document.getElementById('formFeedback').textContent = 'Redirecionando para o WhatsApp...';
  document.getElementById('formFeedback').style.color = '#0077cc';
  
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
