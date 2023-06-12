import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/contact/contact.html'),
    data(){
        return{
            store,
            utilities,
            links:[
                {
                    title:'Appartments',
                    url:`${utilities.env('/properties/?type=Apartments')}`
                },
                {
                    title:'Villas',
                    url:`${utilities.env('/properties/?type=Villas')}`
                },
                {
                    title:'Lands',
                    url:`${utilities.env('/properties/?type=Lands')}`
                },
                {
                    title:'Offices',
                    url:`${utilities.env('/properties/?type=Offices')}`
                },
                {
                    title:'Warehouse',
                    url:`${utilities.env('/properties/?type=Warehouse')}`
                },
                {
                    title:'Chalet',
                    url:`${utilities.env('/properties/?type=Chalet')}`
                },
                {
                    title:'Buildings',
                    url:`${utilities.env('/properties/?type=Buildings')}`
                },
            ],
            checkAlso:[
                {
                    title:'Home Page',
                    url:`${utilities.env('/')}`
                },
                {
                    title:'Join the team',
                    url:'https://forms.gle/pCwePLy4XUXVnqLfA'
                },
                {
                    title:'Our Consultants',
                    url:`${utilities.env('/#agents')}`
                },
                {
                    title:'Our properties',
                    url:`${utilities.env('/properties/')}`
                },
                {
                    title:'Terms and conditions',
                    url:`${utilities.env('/terms.html')}`
                },
                {
                    title:'Privacy policy',
                    url:`${utilities.env('/privacy-policy.html')}`
                },
            ],
        }
    },
    
}