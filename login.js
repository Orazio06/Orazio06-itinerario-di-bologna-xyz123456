document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginMessage = document.getElementById('login-message');
  const registerMessage = document.getElementById('register-message');

  // Gestione del login
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      // Validazione semplice
      if (!email || !password) {
        loginMessage.textContent = "Per favore, compila tutti i campi.";
        loginMessage.style.color = "#b22222"; // Rosso per l'errore
        return;
      }

      // Mostra un messaggio di conferma
      loginMessage.textContent = `Accesso effettuato con: ${email}`;
      loginMessage.style.color = "#28a745"; // Verde per il successo

      // Resetta il form
      loginForm.reset();

      // Reindirizza alla homepage dopo 2 secondi
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    });
  }

  // Gestione della registrazione
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;

      // Validazione semplice
      if (!name || !email || !password) {
        registerMessage.textContent = "Per favore, compila tutti i campi.";
        registerMessage.style.color = "#b22222"; // Rosso per l'errore
        return;
      }

      // Mostra un messaggio di conferma
      registerMessage.textContent = "Registrazione completata, grazie per essere uno di noi!";
      registerMessage.style.color = "#28a745"; // Verde per il successo

      // Resetta il form
      registerForm.reset();

      // Reindirizza alla homepage dopo 2 secondi
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    });
  }
});