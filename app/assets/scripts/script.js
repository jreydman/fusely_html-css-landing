const messageField = document.getElementById("contact-field-message");
messageField.parentNode.querySelector('.field__counter').lastChild.textContent=`/${messageField.maxLength}`

function setCountLetters(field) {
    const counterSelector = field.parentNode.querySelector('.field__counter');
    counterSelector.firstChild.textContent = field.textLength;
}

messageField.addEventListener('input',
    () => setCountLetters(messageField));