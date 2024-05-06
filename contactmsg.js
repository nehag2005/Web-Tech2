//Contact 


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[needs-validation]');
  
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
  
      alert('We will get back in touch with you shortly. '); 
      
    });
  });