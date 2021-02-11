import { inputView as common } from "./common.js";

class InputView{
    constructor() {
        this.searchInput = document.querySelector(common.inputFieldEl);
        this.activeEl = document.querySelector(common.activeEl);
        this.searchResultEl = document.querySelector(common.searchResultEl);
    }

    /* change actived item from key evnet */
    changeActiveElem(searchResultEl, key, keyword) {
        const first = searchResultEl.firstElementChild;
        const last = searchResultEl.lastElementChild;
         
        /* active class가 있는 경우 */
        if (this.activeEl) {
            this.activeEl.classList.remove(common.activeText);
            if (key === "ArrowDown") {
                this.activeEl = this.activeEl === last ? first : this.activeEl.nextElementSibling;
                this.searchInput.value = this.activeEl.textContent.trim();
                this.activeEl.classList.add(common.activeText);
            }
            if (key === "ArrowUp") {
                if (this.activeEl === first) {
                    this.searchResultEl.style.display = "none";
                    this.searchInput.value = keyword;
                    this.activeEl = null;
                }
                else {
                    this.activeEl = this.activeEl.previousElementSibling;
                    this.searchInput.value = this.activeEl.textContent.trim();
                    this.activeEl.classList.add(common.activeText);
                }
            }
        }
        /* active class가 없는 경우 */
        else {
            if (key === "ArrowDown") {
                if (this.searchResultEl.style.display === "block") {
                    this.activeEl = first;
                    this.activeEl.classList.add(common.activeText);
                    this.searchInput.value = this.activeEl.textContent.trim();
                }
                else {
                    this.searchResultEl.style.display = "block";
                }
            }
            if (key === "ArrowUp") {
                this.searchResultEl.style.display = "none";
            }
        }
    }
}

export default InputView;