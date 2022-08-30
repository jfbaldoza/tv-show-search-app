const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userSearchInput = form.elements.query.value
    const config = {params: {q: userSearchInput }}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    displayImage(res.data)
    form.elements.query.value = '';

})

const displayImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium
            document.body.append(img)
            }
    }
}