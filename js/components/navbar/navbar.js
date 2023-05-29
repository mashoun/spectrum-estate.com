import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/navbar/navbar.html'),
    
    mounted() {
        if(location.href.includes('/property')){
            document.querySelector('header').classList.add('bg-dark')
        }
        
    }
}