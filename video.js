document.addEventListener('keydown', function(event) {
  // Periksa apakah tombol yang ditekan adalah spasi
  if (event.code === 'Space') {
      event.preventDefault(); // Hindari scroll halaman dengan tombol spasi
      const video = document.getElementById('myVideo');

      // Toggle play/pause
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  }
});