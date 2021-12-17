
for (let i=1; i<=3; i++) {    
    document.querySelector('.card-body-front-' + i).addEventListener('click', () => {
        document.querySelector('.card-body-front-' + i).classList.add('mobile-card-body-front');
        document.querySelector('.card-body-back-' + i).classList.add('mobile-card-body-back');
    });
    document.querySelector('.back-' + i).addEventListener('click', () => {
        document.querySelector('.card-body-front-' + i).classList.remove('mobile-card-body-front');
        document.querySelector('.card-body-back-' + i).classList.remove('mobile-card-body-back');
    });
}