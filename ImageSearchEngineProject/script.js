const accessKey = "YOUR_ACCESS_KEY_HERE"; // Replace with your actual Unsplash API access key

const searchForm = document.getElementById("search-form"); 
const searchBox = document.getElementById("search-box"); 
const searchResult = document.getElementById("search-result"); 
const showMoreBtn = document.getElementById("show-more-btn"); 

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value.trim();
    if (!keyword) {
        alert("Please enter a search keyword.");
        return;
    }
    
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        const results = data.results;

        if (page === 1) {
            searchResult.innerHTML = "";
        }

        if (results.length === 0) {
            searchResult.innerHTML = "<p>No images found.</p>";
            showMoreBtn.style.display = "none"; 
            return;
        }

        results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        });

        showMoreBtn.style.display = "block"; 
    } catch (error) {
        console.error(error);
        alert("An error occurred: " + error.message);
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1; 
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
