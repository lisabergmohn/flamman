export function validateForm(event) {
    

    const formName = document.getElementById('name').value.trim();
    const formEmail = document.getElementById('email').value.trim();
    const formPhone = document.getElementById('phone').value;


    if(formName.length === 0 || formEmail.length === 0 || formPhone.length === 0) {
        alert('Complete the form, please');
        event.preventDefault();
        
    }

    const patternEmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    const isVallid = patternEmail.test(formEmail);

    if(!isVallid) {
        alert('For email, please use correct format');
        event.preventDefault();
    }

    const formSubject = document.getElementById('subject');
    if(formSubject.length > 200) {
        alert('Use max 200 characters');
        event.preventDefault();
    }
    
    
}

const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', validateForm);
