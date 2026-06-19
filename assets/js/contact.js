    document.getElementById('contact-form').addEventListener('submit', async function(e) {
        e.preventDefault();

        const form = e.target;
        const submitBtn = form.querySelector('input[type="submit"]');
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.innerHTML = '<p style="color: #49bf9d; font-size: 1.1em;">✓ Message sent! I\'ll get back to you soon.</p>';
            } else {
                submitBtn.value = 'Send Message';
                submitBtn.disabled = false;
                alert('Something went wrong. Please try again.');
            }
        } catch (err) {
            submitBtn.value = 'Send Message';
            submitBtn.disabled = false;
            alert('Network error. Please try again.');
        }
    });