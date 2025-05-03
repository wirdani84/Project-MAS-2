document.addEventListener('DOMContentLoaded', function () {
  const twitterBtn = document.querySelector('.twitter-btn');
  if (twitterBtn) {
    twitterBtn.addEventListener('click', function (event) {
      event.preventDefault();
      alert('Twitter OAuth login would be implemented here');
    });
  }

  const learnMoreBtn = document.querySelector('.learn-more-btn');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });

    learnMoreBtn.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
    });
  }
});