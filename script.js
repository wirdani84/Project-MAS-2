document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        const termsChecked = document.getElementById('terms').checked;
        
        if (!email || !password) {
          alert('Please fill in all required fields');
          return;
        }
        
        if (!termsChecked) {
          alert('You must agree to the Terms of Service');
          return;
        }
        
        // Here you would typically make an API call to authenticate the user
        console.log('Login attempt:', { email, termsAccepted: termsChecked });
        alert('Login functionality would be implemented here');
        
        // For demonstration only - normally would redirect after successful login
        // window.location.href = '/dashboard.html';
      });
    }
    
    // Twitter login button handler
    const twitterBtn = document.querySelector('.twitter-btn');
    if (twitterBtn) {
      twitterBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Twitter login clicked');
        alert('Twitter OAuth login would be implemented here');
      });
    }
    
    // Learn more button animation
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    if (learnMoreBtn) {
      learnMoreBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
      });
      
      learnMoreBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
      });
    }
  });