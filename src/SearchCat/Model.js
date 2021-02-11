import { model } from "./common.js";
import fetchData from "./fetchData.js";

class Model{

    constructor() {
        this.searchUrl = model.searchUrl,
        this.option = {
            async: true,
            crossDomain: true,
            method: "GET",
            headers: {
                "x-api-key": model.apiKey
            }
        }
    }

    async getAutoCompleteList(query) {
        const url = `${this.searchUrl}q=${query}`;
        const fetchList = fetchData(url, this.option);

        const result = fetchList.then(function (data) {
            var promises = data.map(e => { return e.name });
            return Promise.all(promises);
        })

        return result;
    }
}
 


export default Model;