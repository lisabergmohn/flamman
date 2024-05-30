export function validateForm(event) {


    const formName = document.getElementById('name').value.trim();
    const formEmail = document.getElementById('email').value.trim();
    const formPhone = document.getElementById('phone').value;
    const formSubject = document.getElementById('subject').value;
    const bookingForm = document.getElementById('bookingForm');


    if (formName.length === 0 || formEmail.length === 0 || formPhone.length === 0) {
        alert('Complete the form, please');
        event.preventDefault();
        return;
    }

    const patternEmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    const isValid = patternEmail.test(formEmail);

    if (!isValid) {
        alert('For email, please use correct format');
        event.preventDefault();
        return;
    }


    if (formSubject.length > 200) {
        alert('Use max 200 characters');
        event.preventDefault();
        return;
    }

    bookingForm.reset();
   
}

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', validateForm);

    bookingForm.reset();
});

