const mainWin = document.querySelector('.main');
const img = document.querySelector('.img');
getMeme();

function getMeme() {
    fetch(`https://meme-api.herokuapp.com/gimme`)
        .then(res => {
            return res.json();
        }).then(result => {
            loader();
            setTimeout(() => {
                img.setAttribute('src', result.url);
            }, 1000);
        });
}

function loader() {
    let url1 = `./loading.gif`;
    img.setAttribute('src', url1);
}