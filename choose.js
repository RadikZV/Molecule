var choosing__selectField = document.getElementsByClassName("choosing__selectField");
var choosing__selectText = document.getElementsByClassName("choosing__selectText");
var choosing__item = document.getElementsByClassName("choosing__item");
var choosing__list = document.getElementsByClassName('choosing__list');

selectField.onclick = function() {
    list.classList.toggle('hide');
}

for (option of choosing__item) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
    }
}