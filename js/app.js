import utilities from './utilities.js'
const app = Vue.createApp({
    data(){
        return{
            title:'spectrum real estate',
            imgs:[
                // './img/8.jpg',
                './img/5.jpg',
                './img/1.jpg',
                './img/7.jpg',
                './img/2.jpg',
                './img/6.jpg',
                './img/4.jpg',
            ],
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
                    location: 'Downtown',
                    area: '300',
                    beds: '4',
                    bathrooms: '2',
                    parking: '2',
                    type: 'Rent',
                    price: '3,500$',
                    image: 'https://picsum.photos/1084'
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
                    location: 'Museum',
                    area: '100',
                    beds: '1',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Sale',
                    price: '120,000$',
                    image: 'https://picsum.photos/1087'
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
                {
                    location: 'Tabaris',
                    area: '120',
                    beds: '2',
                    bathrooms: '1',
                    parking: '1',
                    type: 'Rent',
                    price: '1,500$',
                    image: 'https://picsum.photos/1090'
                },
                {
                    location: 'Saifi',
                    area: '180',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Sale',
                    price: '220,000$',
                    image: 'https://picsum.photos/1091'
                }
            ]
        }
    },
    mounted(){
        
        document.addEventListener('scroll',e => {
            // console.log(window.scrollY);
            if(window.scrollY >= 10) {
                document.querySelector('header').classList.add('bg-glass')
            }else document.querySelector('header').classList.remove('bg-glass')
        })
    }
})

import header from './components/header/header.js'
app.component('header-section',header)


import hero from './components/hero/hero.js'
app.component('hero-section',hero)

import properties from './components/properties/properties.js'
app.component('properties-section',properties)

app.mount('#root')