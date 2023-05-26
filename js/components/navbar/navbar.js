import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/navbar/navbar.html'),
    props:['light'],
    mounted(){
        
        if(this.light){
            document.querySelector('header').classList.add('shadow')
            document.querySelector('header').classList.add('bg-light')
        }else{
            document.querySelector('header').classList.add('text-light')
            document.querySelector('.search-icon').classList.add('d-none')
            document.addEventListener('scroll',e => {
                console.log(window.scrollY);
                if(window.scrollY >= 600 && window.innerWidth >= 768) {
                    document.querySelector('.search-bar').classList.add('scale-up-center')
                    document.querySelector('.search-bar').classList.remove('d-none')
                    document.querySelector('nav').classList.remove('d-md-flex')
                }else {
                    document.querySelector('.search-bar').classList.add('d-none')
                    document.querySelector('nav').classList.add('d-md-flex')
                }
            })
        }
    }
}