import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/navbar/navbar.html'),
    // props:['properties'],
    data(){
        return{
            store,
            utilities
        }
    },
    mounted() {
        if (location.href.includes('/property') || location.href.includes('/properties') || location.href.includes('/privacy-policy') || location.href.includes('/terms')) {
            document.querySelector('header').classList.add('bg-dark')
        }


    }
}