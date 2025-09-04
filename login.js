document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidade de mostrar/esconder senha
  const passwordField = document.getElementById('password');
  const togglePassword = document.querySelector('.toggle-password');

  if (passwordField && togglePassword) {
    togglePassword.addEventListener('click', function() {
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  }

  // --- Funcionalidade de Pop-up ---
  const popupOverlay = document.getElementById('popupOverlay');
  const popupTitle = document.getElementById('popupTitle');
  const popupText = document.getElementById('popupText');
  const closePopup = document.getElementById('closePopup');

  function showPopup(title, text) {
    popupTitle.textContent = title;
    popupText.textContent = text;
    popupOverlay.style.display = 'flex'; // Torna o overlay visível
    document.body.style.overflow = 'hidden'; // Impede a rolagem do fundo
  }

  function hidePopup() {
    popupOverlay.style.display = 'none'; // Esconde o overlay
    document.body.style.overflow = ''; // Restaura a rolagem do fundo
  }

  // Event Listeners para fechar o pop-up
  closePopup.addEventListener('click', hidePopup);
  popupOverlay.addEventListener('click', (e) => {
    // Fecha se clicar fora do conteúdo do pop-up
    if (e.target === popupOverlay) {
      hidePopup();
    }
  });

  // Event Listeners para os botões e links
  document.getElementById('loginFacebookBtn').addEventListener('click', (e) => {
    e.preventDefault(); // Impede a ação padrão do link
    showPopup('Login via Facebook', 'Esta funcionalidade de login via Facebook seria implementada com a API do Facebook.');
  });

  document.getElementById('loginGoogleBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showPopup('Login via Google', 'Esta funcionalidade de login via Google seria implementada com a API do Google.');
  });

  document.getElementById('loginYahooBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showPopup('Login via Yahoo', 'Esta funcionalidade de login via Yahoo seria implementada com a API do Yahoo.');
  });

  document.getElementById('loginLinkedInBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showPopup('Login via LinkedIn', 'Esta funcionalidade de login via LinkedIn seria implementada com a API do LinkedIn.');
  });

  document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
    e.preventDefault();
    showPopup('Esqueceu a Senha?', 'Aqui você inseriria seu e-mail para receber instruções de recuperação de senha.');
  });

  document.getElementById('createAccountLink').addEventListener('click', (e) => {
    e.preventDefault();
    showPopup('Criar Conta', 'Esta página permitiria o registro de novos usuários, com campos como nome, e-mail e senha.');
  });

  // Funcionalidade de envio do formulário de login (apenas para demonstração)
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        showPopup('Login Tradicional', `Tentativa de login com: E-mail: ${email}, Senha: ${password}. (Isso seria validado em um servidor real).`);
    } else {
        showPopup('Erro de Login', 'Por favor, insira seu e-mail e senha.');
    }
  });

});
