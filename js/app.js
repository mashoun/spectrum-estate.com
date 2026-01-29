import store from './store.js'
import utilities from './utilities.js'
const app = Vue.createApp({
    data() {
        return {
            title: 'Spectrum',
            spinner: false,
            api:'https://script.google.com/macros/s/AKfycbwDIbL6GoYBQqTwx6Eg2BZbfudX6kkH_HlkA1UccgkbcQbaEosCHqccxFDxmz-iiMafvw/exec',
            // api: 'https://script.google.com/macros/s/AKfycbwupgqw4SiSB8EvGWXs_8Kqutco0QzMfdRcmeMwaIZqxxu39E9D378VCg6774RCQ-KbGA/exec',
            // propertyIsFound:false,
            store,
            utilities,
            searchByText: '',

        }
    },
    computed: {
        filteredProperties() {
            var url = new URL(location.href)
            var fp = this.store.profile.properties
            // console.log(fp);
            // console.log(url.searchParams.get('refId'));
            
            if (url.searchParams.get('refId')) fp = fp.filter(p => {
                
                if (p.date) {
                    // console.log(this.utilities.dateId(p.date));
                    return url.searchParams.get('refId') == this.utilities.dateId(p.date).trim()
                }
                
            }) 
            if (url.searchParams.get('isHotDeal')) fp = fp.filter(p => {
                
                // return p.isHotDeal
                // console.log(p.isHotDeal);
                // console.log(url.searchParams.get('hotDeal'));
                return p.isHotDeal
                
            })
            if (url.searchParams.get('type')) fp = fp.filter(p => {
                if (p.type) return url.searchParams.get('type').toLowerCase() == p.type.toLowerCase()
            })

            if (url.searchParams.get('location')) fp = fp.filter(p => {
                if (p.location) return url.searchParams.get('location').toLowerCase().trim() == p.location.toLowerCase().trim()
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

            // just merge the results with the search by text input , if the searchByText match these fields 
            // location , type , price , area , status , bathrooms , bedrooms , description , title , refId, landZone, landType, landSlope,, warehouseType, warehouseHeight
            
            if (this.searchByText) {
                fp = fp.filter(p => {
                    const searchText = this.searchByText.toLowerCase()
                    const fields = [
                        'location', 'type', 'price', 'area', 'status', 
                        'bathrooms', 'bedrooms', 'description', 'title', 
                        'landZone', 'landType', 'landSlope', 
                        'warehouseType', 'warehouseHeight'
                    ]
                    
                    // Check standard fields
                    for (let field of fields) {
                        if (p[field] && p[field].toString().toLowerCase().includes(searchText)) {
                            return true
                        }
                    }

                    // Check refId (derived from date)
                    if (p.date && this.utilities.dateId(p.date).includes(searchText)) {
                        return true
                    }
                    
                    // Check if explicit refId exists
                    if (p.refId && p.refId.toString().toLowerCase().includes(searchText)) {
                        return true
                    }

                    return false
                })
            }
            
            
            return fp.reverse()
        },
        appliedFilters() {
            var url = new URL(location.href)
            let filters = []

            if (url.searchParams.get('refId')) filters.push(`Reference ID: ${url.searchParams.get('refId')}`)
            if (url.searchParams.get('isHotDeal')) filters.push(`Hot Deals`)
            if (url.searchParams.get('type')) filters.push(`Type: ${url.searchParams.get('type')}`)
            if (url.searchParams.get('location')) filters.push(`Location: ${url.searchParams.get('location')}`)
            if (url.searchParams.get('price')) filters.push(`Max Price: ${this.utilities.addCommas(url.searchParams.get('price'))}`)
            if (url.searchParams.get('area')) filters.push(`Min Area: ${url.searchParams.get('area')} m²`)
            if (url.searchParams.get('status')) filters.push(`Status: ${url.searchParams.get('status')}`)
            if (url.searchParams.get('bathrooms')) filters.push(`Bathrooms: ${url.searchParams.get('bathrooms')}+`)
            if (url.searchParams.get('bedrooms')) filters.push(`Bedrooms: ${url.searchParams.get('bedrooms')}+`)

            if (filters.length > 0) {
                return 'Filters: ' + filters.join(', ')
            }
            return ''
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

import story from './components/story/story.js'
app.component('story-section', story)

import swiper from './components/swiper/swiper.js'
app.component('swiper-container', swiper)

import title from './components/title/title.js'
app.component('title-section', title)

import navbar from './components/navbar/navbar.js'
app.component('navbar-section', navbar)

import hero from './components/hero/hero.js'
app.component('hero-section', hero)

import hotDeals from './components/hot-deals/hot-deals.js'
app.component('hot-deals', hotDeals)

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