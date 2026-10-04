const questionForm = document.querySelector('#questionForm');

if (questionForm) {
  const submitButton = questionForm.querySelector('.question-submit');
  const statusMessage = document.querySelector('#questionStatus');

  questionForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!questionForm.reportValidity()) {
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    statusMessage.textContent = '';
    statusMessage.dataset.state = '';

    try {
      const response = await fetch(questionForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(questionForm)))
      });
      const result = await response.json();

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'The message could not be sent.');
      }

      questionForm.reset();
      statusMessage.textContent = 'Thanks! Your question has been sent. We will reply to your email.';
      statusMessage.dataset.state = 'success';
    } catch (error) {
      statusMessage.textContent = error.message && /activation/i.test(error.message)
        ? 'The question form needs email activation. Open the FormSubmit activation email sent to The Fix Crew and click its activation link. Until then, please contact us on WhatsApp.'
        : 'Sorry, your question could not be sent right now. Please try again later or contact us on WhatsApp.';
      statusMessage.dataset.state = 'error';
      console.error('Question form submission failed:', error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Send question';
    }
  });
}
