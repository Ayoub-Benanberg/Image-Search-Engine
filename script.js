const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResult = document.getElementById('search-result');
const more = document.getElementById('show-more');

const key = "nNFl8M9zmr9kL6VjPFrjl9mdE0KrJ6jNP-MBU909n90"

let keyWord = "";
let page = 1;

async function searchImage(){
    keyWord= searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${key}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

// refreching after new keyword
if (page == 1){
    searchResult.innerHTML = "";
}



    results.map((result)=>{
        const img = document.createElement('img');
        img.src = result.urls.small;

        // clickable img
        const imgLink = document.createElement('a');
        imgLink.href = result.links.html;
        imgLink.target = '_blank';

        imgLink.appendChild(img)
// append the imgs to the search result div
        searchResult.appendChild(imgLink)
    })
    more.style.display = 'block';
}

searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
})

// adding event in the show more btn 

more.addEventListener('click', (e) =>{
    page++;
    searchImage();
});