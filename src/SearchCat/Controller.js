import { controller as common } from "./common.js";

class Controller{

    constructor() {
        this.inputFieldEl = document.querySelector(common.inputFieldEl); //<input>
        this.searchResultEl = document.querySelector(common.searchResultEl); //<ul>
        this.debounceDelay = common.debounceDelay;
        this.throttleDelay = common.throttleDelay;
        this.debounce = null;
        this.throttle = null;
        this.suggestions = null;
        this.keyword = null;
        this.eventHandler();
    }

    /* attatch event function */
    eventHandler() {
        this.inputFieldEl.addEventListener('keyup', e => this.handelInputKeyup(e));
        this.inputFieldEl.addEventListener('keydown', e => this.handleInputKeydown(e));
    }

    /* keyup events */
    handelInputKeyup(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            return;
        }
        else if (e.key === 'Enter') {
            return;
        }
        else {
            clearTimeout(this.debounce);
            this.getSuggestions(e.target.value);
        }
    }

    /* keydown events */
    handleInputKeydown(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            if (!this.throttle) {
                this.throttle = true;
                setTimeout(() => {
                    this.inputView.changeActiveElem(this.searchResultEl, e.key, this.keyword);
                    this.throttle = false;
                },this.throttleDelay)
            }
        }
    }

    /* get suggestions from input value */
    getSuggestions(query) {
        this.debounce = setTimeout(() => {
            this.keyword = query;
            this.suggestions = this.model.getAutoCompleteList(query);
            this.resultView.renderSuggetsion(this.suggestions, query);            
        }, this.debounceDelay);
    }
}

export default Controller;