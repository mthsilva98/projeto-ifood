document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Função para marcar o link como ativo
  function marcarLinkAtivo(link) {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Marca o link clicado como ativo
      marcarLinkAtivo(link);

      // Salva o link ativo no localStorage
      localStorage.setItem('activeLink', link.href);

      // Navega para a página após um pequeno atraso para garantir que o localStorage seja atualizado
      setTimeout(() => {
        window.location.href = link.href;
      }, 10);
    });
  });

  // Ao carregar a página, verifica se há um link ativo salvo no localStorage
  const activeLink = localStorage.getItem('activeLink');
  if (activeLink) {
    navLinks.forEach(link => {
      if (link.href === activeLink) {
        marcarLinkAtivo(link);
      }
    });
  }
});