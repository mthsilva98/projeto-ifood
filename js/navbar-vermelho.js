document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Função para marcar o link como ativo
  function marcarLinkAtivo(link) {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  }

  // Função para marcar o link com base na URL atual
  function marcarLinkAtivoPorURL() {
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
      // Verifica se a URL do link corresponde à seção atual
      if (link.href.includes(currentPath)) {
        marcarLinkAtivo(link);
      }
    });
  }

  // Chama a função para marcar o link ativo ao carregar a página
  marcarLinkAtivoPorURL();

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      marcarLinkAtivo(link);
      localStorage.setItem('activeLink', link.href);
      setTimeout(() => {
        window.location.href = link.href;
      }, 10);
    });
  });

  
});