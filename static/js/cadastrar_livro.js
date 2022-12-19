const stars = document.querySelectorAll('.bi-star-fill')

for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', (element) => {

        stars.forEach((star) => {
            star.style.color = 'black'
        })

        let posicao = element.target.id.replace('star', '')
        
        for (let j = 0; j <= posicao; j++){
            stars[j].style.color = 'orange'
        }
    }, false);
}