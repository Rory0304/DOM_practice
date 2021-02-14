const global = {
    highLighted: ".highlighted",
    inputFieldEl: "#input_field",
    searchResultEl: ".search_result",
    activeEl: ".active"
}

/* 데이터 요청을 위한 소스 저장 */
export const model = {
    searchUrl: "https://api.thecatapi.com/v1/breeds/search?",
    apiKey: "76029065-05f2-43c6-ae25-71a9fa04317d"
}

export const inputView = {
    inputFieldEl: global.inputFieldEl,
    searchResultEl: global.searchResultEl,
    activeEl: global.activeEl,
    activeText: "active"
}

export const controller = {
    inputFieldEl: global.inputFieldEl,
    searchResultEl : global.searchResultEl,
    debounceDelay: 300,
    throttleDelay: 50
}

export const resultView = {
    searchResultEl: global.searchResultEl,
   
    noResultTemplete() {
        return `<li>검색결과가 없습니다</li>`;
    },

    autoCompleteTemplete(suggestions, keyword) {
        const keywordRegx = new RegExp(`${keyword}`, 'ig');
        return suggestions.reduce((prev, curr) => {
            const match = keywordRegx.exec(curr);
            const highLightItem = curr.replaceAll(keywordRegx, `<span class="highlighted">${match}</span>`);
            return `${prev}<li>${highLightItem}</li>`
        },'')
    },

    sortByKeywords(autocompleteList, keyword) {
        const upperKeyword = keyword.toUpperCase();
        const sort = (a, b) => {
            a = a.toUpperCase();
            b = b.toUpperCase();
            if (a.indexOf(upperKeyword) > b.indexOf(upperKeyword)) {
                return 1;
            }
            else if (a.indexOf(upperKeyword) < b.indexOf(upperKeyword)) {
                return -1;
            }
            else {
                return a > b ? 1: -1;
            }
        }

        const result = autocompleteList.then(function (data) {
            data.sort(sort);
            return Promise.all(data);
        })

        return result;
    },

    maxResult: 10
}