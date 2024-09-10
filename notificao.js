document.addEventListener('DOMContentLoaded', function () {
    // Função para exibir/ocultar a caixa de notificações
    function toggleNotifications() {
        var notificationBox = document.getElementById('notificationBox');
        if (notificationBox.style.display === 'block') {
            notificationBox.style.display = 'none';
        } else {
            notificationBox.style.display = 'block';
        }
    }

    // Adiciona evento de clique no sino de notificações
    const notificationBell = document.querySelector('.notification-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', toggleNotifications);
    }
});
