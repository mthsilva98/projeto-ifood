
document.addEventListener('DOMContentLoaded', function () {

    
    function toggleNotifications() {
        
        var notificationBox = document.getElementById('notificationBox');

        
        if (notificationBox.style.display === 'block') {
            
            notificationBox.style.display = 'none';
        } else {
            
            notificationBox.style.display = 'block';
        }
    }

    
    const notificationBell = document.querySelector('.notification-bell');

    
    if (notificationBell) {

        notificationBell.addEventListener('click', toggleNotifications);
    }
    
});