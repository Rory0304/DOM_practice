const fetchData = async (url, option) => {
    const data = await fetch(url, option).then(res => {
        return res.json();
    })
    return data;
}

export default fetchData;
