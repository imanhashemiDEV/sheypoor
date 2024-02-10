import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

let likes = document.querySelectorAll('.like')

likes.forEach(like => {
    like.addEventListener('click',function(e){
        e.preventDefault();
        // console.log('here');
    })
});