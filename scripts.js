document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
    }
    
    alert('Thank you for your message! We will get back to you soon.');
    
    // You can add form submission logic here, e.g., using AJAX to send form data to a server.
    
    document.getElementById('contact-form').reset();
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
