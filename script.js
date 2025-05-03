document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      // REMOVE preventDefault to allow form submission to server
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
      const termsChecked = document.getElementById('terms').checked;

      if (!email || !password) {
        alert('Please fill in all required fields');
        event.preventDefault(); // only stop if invalid
        return;
      }

      if (!termsChecked) {
        alert('You must agree to the Terms of Service');
        event.preventDefault(); // only stop if invalid
        return;
      }

      // Allow form to continue (browser will submit to /login)
    });
  }

  const twitterBtn = document.querySelector('.twitter-btn');
  if (twitterBtn) {
    twitterBtn.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('Twitter login clicked');
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