import { resultView as common } from "./common.js";

class ResultView{
    constructor() {
        this.searchResultEl = document.querySelector(common.searchResultEl);
    }

    renderSuggetsion(suggestions, keyword) {
        this.searchResultEl.style.display = 'block';
        this.searchResultEl.textContent = '';

        const result = common.sortByKeywords(suggestions, keyword);

        result.then(function (e) {
            const maxResult = common.maxResult;
            e = e.slice(0, maxResult);
            const template = e.length === 0 ? common.noResultTemplete() : common.autoCompleteTemplete(e, keyword);
            const searchResult = document.querySelector(common.searchResultEl);
            searchResult.insertAdjacentHTML('afterbegin', template);
        });
    }
}

export default ResultView;