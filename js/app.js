const app = Vue.createApp({
    data(){
        return{
            title:'Spectrum',
            
            properties:[
                {
                    location: 'Hamra',
                    area: '120',
                    beds: '2',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Rent',
                    price: '1,500$',
                    image: 'https://picsum.photos/1080'
                },
                {
                    location: 'Achrafieh',
                    area: '220',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Sale',
                    price: '300,000$',
                    image: 'https://picsum.photos/1081'
                },
                {
                    location: 'Gemmayze',
                    area: '80',
                    beds: '1',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Rent',
                    price: '1,000$',
                    image: 'https://picsum.photos/1082'
                },
                {
                    location: 'Mar Mikhael',
                    area: '150',
                    beds: '2',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Sale',
                    price: '200,000$',
                    image: 'https://picsum.photos/1083'
                },
                {
                    location: 'Verdun',
                    area: '200',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Sale',
                    price: '250,000$',
                    image: 'https://picsum.photos/1085'
                },
                {
                    location: 'Ras Beirut',
                    area: '180',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Rent',
                    price: '2,000$',
                    image: 'https://picsum.photos/1086'
                },
                {
                    location: 'Sodeco',
                    area: '250',
                    beds: '4',
                    bathrooms: '3',
                    parking: '2',
                    type: 'Rent',
                    price: '2,800$',
                    image: 'https://picsum.photos/1088'
                },
                {
                    location: 'Raouche',
                    area: '150',
                    beds: '2',
                    bathrooms: '1',
                    parking: '1',
                    type: 'Sale',
                    price: '180,000$',
                    image: 'https://picsum.photos/1089'
                },
            ]
        }
    },
    mounted(){
        

    }
})

import searchBar from './components/search-bar/search-bar.js'
app.component('search-bar',searchBar)

import swiper from './components/swiper/swiper.js'
app.component('swiper-container',swiper)

import title from './components/title/title.js'
app.component('title-section',title)

import navbar from './components/navbar/navbar.js'
app.component('navbar-section',navbar)

import hero from './components/hero/hero.js'
app.component('hero-section',hero)

import property from './components/property/property.js'
app.component('property',property)

import properties from './components/properties/properties.js'
app.component('properties-section',properties)

import propertyPage from './components/property-page/property-page.js'
app.component('property-page',propertyPage)

import agent from './components/agent/agent.js'
app.component('agent',agent)

import agents from './components/agents/agents.js'
app.component('agents-section',agents)

import feedbacks from './components/feedbacks/feedbacks.js'
app.component('feedbacks-section',feedbacks)

import contact from './components/contact/contact.js'
app.component('contact-section',contact)



const About = { template: '<div>About</div>' }
const routes = [
    { path: '/', component: propertyPage },
    { path: '/about', component: About },
]
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

app.use(router)
app.mount('#app')