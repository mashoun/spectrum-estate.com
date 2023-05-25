import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/contact/contact.html'),
    props:['title'],
    data(){
        return{
            contact:{
                whatsapp:'http://wa.spectrum-estate.com',
                facebook:'http://fb.mashoun.com',
                instagram:'http://ig.mashoun.com',
                email:'info@spectrum-estate.com',
                number:'96170696906',
                address:'Dekwaneh, Mkalles highway, Debabas ST, RAAD BLDG 6th floor'
            },
            links:[
                {
                    title:'Appartments',
                    url:'#'
                },
                {
                    title:'Villas',
                    url:'#'
                },
                {
                    title:'Lands',
                    url:'#'
                },
                {
                    title:'Offices',
                    url:'#'
                },
                {
                    title:'Warehouse',
                    url:'#'
                },
            ]
        }
    }
    
}