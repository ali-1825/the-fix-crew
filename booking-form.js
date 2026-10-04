const bookingForm = document.querySelector('#booking-form');

if (bookingForm) {
  const submitButton = bookingForm.querySelector('button[type="submit"]');
  const errorMessage = document.querySelector('#error');
  const statusMessage = document.querySelector('#success');
  const whatsappLink = document.querySelector('#whatsapp-booking-link');

  bookingForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!bookingForm.reportValidity()) {
      errorMessage.style.display = 'block';
      return;
    }

    errorMessage.style.display = 'none';
    statusMessage.style.display = 'block';
    statusMessage.dataset.state = '';
    statusMessage.textContent = 'Sending your booking details to our team...';
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const booking = new FormData(bookingForm);
    const details = [
      'New The Fix Crew booking request',
      '',
      `Service: ${booking.get('service')}`,
      `Work option: ${booking.get('job')}`,
      `Name: ${booking.get('name')}`,
      `Phone: ${booking.get('phone')}`,
      `Address: ${booking.get('address')}`,
      `Preferred date: ${booking.get('date')}`,
      `Additional details: ${booking.get('notes') || 'None'}`
    ].join('\n');
    const whatsappUrl = `https://wa.me/923097862739?text=${encodeURIComponent(details)}`;
    whatsappLink.href = whatsappUrl;
    whatsappLink.hidden = false;
    const whatsappWindow = window.open(whatsappUrl, '_blank');

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }

    try {
      const response = await fetch(bookingForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(booking))
      });
      const result = await response.json();

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'The booking could not be emailed.');
      }

      statusMessage.textContent = 'Booking sent to our email. If WhatsApp did not open, use the green button below. Tap Send in WhatsApp to send your WhatsApp copy too.';
      statusMessage.dataset.state = 'success';
    } catch (error) {
      statusMessage.textContent = error.message && /activation/i.test(error.message)
        ? 'Email delivery needs activation. Use the green button below to send this booking on WhatsApp, then activate the form using the email sent to The Fix Crew and submit again.'
        : 'Email delivery failed. Use the green button below to send this booking on WhatsApp, then try submitting again to retry email delivery.';
      statusMessage.dataset.state = 'error';
      console.error('Booking email submission failed:', error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit Booking';
    }
  });
}
