// import { searchResult as common } from "./common.js";

/* api information */
const commonAPI = "https://api.themoviedb.org/3/search/movie?";
const secretKey = "b1306395631dc84cde154096963c13db";

/* dom object */
const searchBox = document.querySelector('.search_box');
const searchInput = document.querySelector('#search_input');
const autoCompleteUl = document.querySelector('.auto_complete ul');

let debounce = null;
let throttle = null;

searchInput.addEventListener('keyup', function (e) {

    clearTimeout(debounce);
    autoCompleteUl.textContent = '';

    /* debounce 처리 */
    debounce = setTimeout(() => {
        const searchText = e.target.value;
        const option = {
            async: true,
            crossDomain: true,
            method: "GET",
            headers: {
                "x-api-key": "76029065-05f2-43c6-ae25-71a9fa04317d"
            }
        }
        const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchText}`;
        getList(url, option, searchText);
    }, 50);
});

async function getList(url, options, searchText) {    
    
    let catList = [];
    
    await fetch(url, options).then(res => {
        if (res.status === 200 || res.status === 201) {
            res.json().then(data => {
                data.forEach((cat) => {
                    catList.push(cat.name);
                });

                if (catList.length > 0) {
                    catList.sort(function (cat1, cat2) {
                        cat1 = cat1.toUpperCase();
                        cat2 = cat2.toUpperCase();
                        searchText = searchText.toUpperCase();
                        if (cat1.indexOf(searchText) > cat2.indexOf(searchText)) {
                            return 1;
                        }
                        else if (cat1.indexOf(searchText) < cat2.indexOf(searchText)) {
                            return -1;
                        }
                        else {
                            return cat1 > cat2 ? 1 : -1;
                        }
                    });
                }
                
                let autoCompleteList = autoCompleteTemplete(catList, searchText);
                autoCompleteUl.insertAdjacentHTML('afterbegin', autoCompleteList);
            });
        }
    }).catch(err => {
        let errorMessage = document.createElement("LI");
        errorMessage.setAttribute("class", "autocomplete-item");
        errorMessage.textContent = "api 요청 오류!";
        autoCompleteUl.appendChild(errorMessage);
    });
}

function autoCompleteTemplete(autocompleteList, keyword) {
    const keywordRegx = new RegExp(`${keyword}`, 'ig');
    return autocompleteList.reduce((prev, curr) => {
        const match = keywordRegx.exec(curr);
        const highLightItem = curr.replaceAll(keywordRegx, `<span class=".highlighted">${match}</span>`);
        return `${prev}<li>${highLightItem}</li>`
    })
}