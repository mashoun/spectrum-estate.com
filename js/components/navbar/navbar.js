import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/navbar/navbar.html'),
    
    mounted() {
        document.addEventListener('scroll', e => {
            console.log(window.scrollY);
            if (window.scrollY >= 600) {
                document.querySelector('.search-icon').classList.add('scale-up-center')
                document.querySelector('.search-icon').classList.remove('d-none')
                document.querySelector('nav').classList.remove('d-md-flex')
            } else {
                document.querySelector('.search-icon').classList.add('d-none')
                document.querySelector('nav').classList.add('d-md-flex')
            }
        })
    }
}