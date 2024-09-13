// Aguarda o carregamento completo do DOM (conteúdo da página)
document.addEventListener('DOMContentLoaded', function () {

    // Define a função `toggleNotifications` para mostrar/ocultar a caixa de notificações
    function toggleNotifications() {
        // Seleciona o elemento da caixa de notificações pelo ID
        var notificationBox = document.getElementById('notificationBox');

        // Verifica o estilo de exibição atual da caixa de notificações
        if (notificationBox.style.display === 'block') {
            // Se estiver visível ('block'), oculta a caixa
            notificationBox.style.display = 'none';
        } else {
            // Se estiver oculta, exibe a caixa como 'block'
            notificationBox.style.display = 'block';
        }
    }

    // Seleciona o elemento do sino de notificações usando um seletor de classe
    const notificationBell = document.querySelector('.notification-bell');

    // Verifica se o elemento do sino de notificações foi encontrado na página
    if (notificationBell) {
        // Se o sino de notificações existir, adiciona um ouvinte de evento de clique
        notificationBell.addEventListener('click', toggleNotifications);
    }
    // Se o sino não for encontrado, não faz nada (evita erros no console)
});