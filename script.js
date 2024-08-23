
var typed = new Typed('#element', {
      strings: ['<i>Web Developer</i> ', 'Graphic Designer', 'Web Designer', 'Video Editor'],
      typeSpeed: 50,
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      const data = {
          name: name,
          email: email,
          message: message
      };
  
      fetch('https://your-server-endpoint.com/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          alert('Message sent successfully!');
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });