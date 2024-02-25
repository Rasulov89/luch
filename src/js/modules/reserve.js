function reserveForm() {

    let reserveBtns = document.querySelectorAll(".reserve-btn");
    let reserveForm = document.querySelector(".reserve-form")
    let closeBtn = document.querySelector(".reserve-form__close-btn")
    for (let reserveBtn of reserveBtns) {
        reserveBtn.onclick = function () {
            reserveForm.classList.toggle('reserve-form--open');
        }
    }
    closeBtn.onclick = function(){
        reserveForm.classList.remove('reserve-form--open');
    }
}

export default reserveForm;