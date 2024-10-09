const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_button');
const dog_btn = document.getElementById('dog_button');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            cat_result.innerHTML = `<img src="${data.file}" alt="Random Cat" style="width: 100%; height: auto;">`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            dog_result.innerHTML = `<img src="${data.message}" alt="Random Dog" style="width: 100%; height: auto;">`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
