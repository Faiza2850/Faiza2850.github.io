
var typed = new Typed('#element', {
      strings: ['<i>Web Developer</i> ', 'Graphic Designer', 'Web Designer', 'Video Editor'],
      typeSpeed: 50,
    });
document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Message sent successfully!');
  });