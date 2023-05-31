import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/navbar/navbar.html'),
    props:['properties'],
    mounted() {
        if(location.href.includes('/property') || location.href.includes('/properties')){
            document.querySelector('header').classList.add('bg-dark')
        }
        
    }
}