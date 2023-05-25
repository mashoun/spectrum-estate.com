const app = Vue.createApp({
    data(){
        return{
            title:'Spectrum',
        }
    },
    mounted(){
        
        document.addEventListener('scroll',e => {
            // console.log(window.scrollY);
            if(window.scrollY >= 10) {
                document.querySelector('header').classList.add('bg-dark')
            }else document.querySelector('header').classList.remove('bg-dark')
        })
    }
})

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

import agent from './components/agent/agent.js'
app.component('agent',agent)

import agents from './components/agents/agents.js'
app.component('agents-section',agents)

import feedbacks from './components/feedbacks/feedbacks.js'
app.component('feedbacks-section',feedbacks)

import contact from './components/contact/contact.js'
app.component('contact-section',contact)

app.mount('#app')