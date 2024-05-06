
// sign up 

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('form[needs-validation]');
  
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
  
  
      // Get form data
      const userData = {
        name: document.getElementById('name').value,
        dateOfBirth: document.getElementById('date').value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      };
  
      // Save to local storage
      localStorage.setItem('userData', JSON.stringify(userData));
  
      // Success Handling
      alert('You are now a Catbook member. Head to the login page! '); 
      
    });
  });

//login 

  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form[needs-validation]'); 
    
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const enteredEmail = document.getElementById('emailLogin').value;
      const enteredPassword = document.getElementById('passwordLogin').value;
  
      const savedUserData = JSON.parse(localStorage.getItem('userData'));
  
      // Login Validation
      if (savedUserData && 
          savedUserData.email === enteredEmail &&
          savedUserData.password === enteredPassword) { 
  
          alert('Login Successful!');
          // Redirect to home page
          window.location.href = '../Nindex.html'; 
  
      } else {
          alert('Invalid email or password'); 
      }
    });
  });
  

// logout 

  document.addEventListener('DOMContentLoaded', function() { 
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('userData'); 
        window.location.href = '../Nindex.html'; // Redirect to the home page
    });
});


function loginStatus() {
    const userData = localStorage.getItem('userData');
    const loginButton =  document.querySelector('.nav-link[href="./pages/login.html"]'); 

    const signupButton = document.querySelector('.nav-link[href="./pages/signup.html"]');
   

    if (userData) {
        
        loginButton.style.display = 'none' ; 
        signupButton.style.display = 'none'; 
        logoutButton.style.display = 'block'; 
    } else {

        loginButton.style.display = 'block';  
        signupButton.style.display = 'block'; 
        logoutButton.style.display = 'none'; 
    }
}


loginStatus(); 

logoutButton.addEventListener('click', function() {
   
    loginStatus(); 
});

