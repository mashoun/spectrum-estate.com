import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/property/property.html'),
    props:['data'],
    methods:{
        switchType(type){
            return type == 'Lands' || type == 'Warehouse'
        }
    }
}