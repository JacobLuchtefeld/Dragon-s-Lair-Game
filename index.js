document.getElementById('startGame').addEventListener('click', function() {
    var playerName = document.getElementById('playerName').value;
    if (playerName.trim() !== '') {
      localStorage.setItem('playerName', playerName);
      window.location.href = 'info.html'; // Redirect to info.html
    } else {
      alert('Please enter your name.');
    }
  });