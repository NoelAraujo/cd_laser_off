const button = document.getElementById('notifications');

button.addEventListener('click', () => {
  Notification.requestPermission().then(result => {
    if (result === 'granted') {
      new Notification('Oi', {
        body: 'Teste',
        icon: './polygon.png',
      });
    }
  });
});
