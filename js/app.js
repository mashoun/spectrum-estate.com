import store from './store.js'
const app = Vue.createApp({
    data() {
        return {
            title: 'Spectrum',
            spinner: false,
            api: 'https://script.google.com/macros/s/AKfycbyV7JY10hCStCNKVo_mLbhNcAzXFkHviUFYStVM6xdjWhkRJ4LZiyzQg2K7XJU8s3YpBw/exec',
            // propertyIsFound:false,
            store

        }
    },
    computed: {
        filteredProperties() {
            var url = new URL(location.href)
            var fp = this.store.profile.properties
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
            if (url.searchParams.get('bedrooms')) fp = fp.filter(p => {
                if (p.bedrooms) return parseFloat(url.searchParams.get('bedrooms')) >= parseFloat(p.bedrooms)
            })

            // this.propertyIsFound = true
            return fp
        }
    },
    methods: {
        getProfile() {
            return new Promise((resolve, reject) => {

                fetch(`${this.api}?getContact=1`).then(res => res.json()).then(res => {
                    console.log(res);
                    resolve(res)
                })
                    .catch(err => {
                        console.log(err);
                        reject(err)
                    })
            })
        }
    },
    async mounted() {
        this.spinner = true
        this.store.profile = await this.getProfile()
        this.spinner = false
    },
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