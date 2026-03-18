document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const img = new Image();
  img.src = 'img/right-edge.png';

  const finishLoading = () => {
    if (loadingScreen) {
      loadingScreen.classList.add('is-hidden');
    }
    document.body.classList.add('is-loaded');
  };

  if (img.complete) {
    finishLoading();
  } else {
    img.onload = finishLoading;
    img.onerror = finishLoading; // Still hide if image fails to load
  }

  // Fallback: ensure loading screen is hidden after a timeout even if image load hangs
  setTimeout(finishLoading, 3000);
});
