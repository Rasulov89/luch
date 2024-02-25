function contactForm() {

    let contactBtn = document.querySelector(".contact-btn");
    let contactForm = document.querySelector(".contact-form")
    let closeBtn = document.querySelector(".contact-form__close-btn")

    contactBtn.onclick = function () {
        contactForm.classList.toggle('contact-form--open');
    }

    closeBtn.onclick = function () {
        contactForm.classList.remove('contact-form--open');
    }
}

export default contactForm;