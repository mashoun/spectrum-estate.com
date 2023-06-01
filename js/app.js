const app = Vue.createApp({
    data() {
        return {
            title: 'Spectrum',

            properties: [
                {
                    id: '0',
                    location: 'Hamra',
                    area: '120',
                    beds: '2',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Apartments',
                    status: 'Rent',
                    price: '1500',
                    thumbnail: 'https://picsum.photos/1080',
                    amenities: ['pool', 'garden', 'gym']
                },
                {
                    id: '1',
                    location: 'Achrafieh',
                    area: '220',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Villas',
                    status: 'Sale',
                    price: '300000',
                    thumbnail: 'https://picsum.photos/1081',
                    amenities: ['terrace', 'garden', 'balcony']
                },
                {
                    id: '2',
                    location: 'Gemmayze',
                    area: '80',
                    type: 'Lands',
                    status: 'Rent',
                    price: '1000',
                    thumbnail: 'https://picsum.photos/1082',
                    amenities: ['park', 'view', 'garden']
                },
                {
                    id: '3',
                    location: 'Mar Mikhael',
                    area: '150',
                    beds: '2',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Offices',
                    status: 'Sale',
                    price: '200000',
                    thumbnail: 'https://picsum.photos/1083',
                    amenities: ['parking', 'security', 'meeting room']
                },
                {
                    id: '4',
                    location: 'Verdun',
                    area: '200',
                    type: 'Warehouse',
                    status: 'Sale',
                    price: '250000',
                    thumbnail: 'https://picsum.photos/1085',
                    amenities: ['loading dock', 'security', 'office space']
                },
                {
                    id: '5',
                    location: 'Ras Beirut',
                    area: '180',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Apartments',
                    status: 'Rent',
                    price: '2000',
                    thumbnail: 'https://picsum.photos/1086',
                    amenities: ['balcony', 'gym', 'pool']
                },
                {
                    id: '6',
                    location: 'Sodeco',
                    area: '250',
                    beds: '4',
                    bathrooms: '3',
                    parking: '2',
                    type: 'Villas',
                    status: 'Rent',
                    price: '2800',
                    thumbnail: 'https://picsum.photos/1088',
                    amenities: ['pool', 'garden', 'terrace']
                },
                {
                    id: '7',
                    location: 'Raouche',
                    area: '150',
                    beds: '2',
                    bathrooms: '1',
                    parking: '1',
                    type: 'Offices',
                    status: 'Sale',
                    price: '180000',
                    thumbnail: 'https://picsum.photos/1089',
                    amenities: ['parking', 'conference room', 'reception area']
                },
            ],

        }
    },
    computed: {
        filteredProperties() {
            var url = new URL(location.href)
            var fp = this.properties
            if (url.searchParams.get('type')) fp = fp.filter(p => {
                if (p.type) return url.searchParams.get('type').toLowerCase() == p.type.toLowerCase()
            })

            if (url.searchParams.get('location')) fp = fp.filter(p => {
                if (p.location) return url.searchParams.get('location').toLowerCase() == p.location.toLowerCase()
            })
            if (url.searchParams.get('price')) fp = fp.filter(p => {
                if (p.price) return parseFloat(url.searchParams.get('price')) >= parseFloat(p.price)
            })

            if (url.searchParams.get('area')) fp = fp.filter(p => {
                if (p.area) return parseFloat(url.searchParams.get('area')) >= parseFloat(p.area)
            })
            
            if (url.searchParams.get('status')) fp = fp.filter(p => {
                if (p.status) return url.searchParams.get('status').toLowerCase() == p.status.toLowerCase()
            })

            
            if (url.searchParams.get('bathrooms')) fp = fp.filter(p => {
                if (p.bathrooms) return parseFloat(url.searchParams.get('bathrooms')) >= parseFloat(p.bathrooms)
            })
            if (url.searchParams.get('beds')) fp = fp.filter(p => {
                if (p.beds)  return parseFloat(url.searchParams.get('beds')) >= parseFloat(p.beds)
            })


            return fp
        }
    },
    mounted() {

        // var url = new URL(location.href)
        // var pp = fp.filter(p => {
        //     return p.type == 'Villas'
        // })
        // console.log(pp);
    }
})

import searchBar from './components/search-bar/search-bar.js'
app.component('search-bar', searchBar)

import swiper from './components/swiper/swiper.js'
app.component('swiper-container', swiper)

import title from './components/title/title.js'
app.component('title-section', title)

import navbar from './components/navbar/navbar.js'
app.component('navbar-section', navbar)

import hero from './components/hero/hero.js'
app.component('hero-section', hero)

import property from './components/property/property.js'
app.component('property', property)

import properties from './components/properties/properties.js'
app.component('properties-section', properties)

import propertyPage from './components/property-page/property-page.js'
app.component('property-page', propertyPage)

import agent from './components/agent/agent.js'
app.component('agent', agent)

import agents from './components/agents/agents.js'
app.component('agents-section', agents)

import feedbacks from './components/feedbacks/feedbacks.js'
app.component('feedbacks-section', feedbacks)

import contact from './components/contact/contact.js'
app.component('contact-section', contact)

app.mount('#app')