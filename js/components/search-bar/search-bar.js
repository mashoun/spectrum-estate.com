import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/search-bar/search-bar.html'),
    data() {
        return {
            utilities,
            property: {
                location: '',
                area: '',
                bedrooms: '',
                bathrooms: '',
                type: '',
                status: '',
                price: '',
            },
        }
    },
    computed: {
        recentLocations() {
            var locations = []
            this.properties.forEach(p => {
                locations.push(p.location)
            });
            return utilities.getDistinctValues(locations)
        },
        recentPropertyTypes() {
            var propertyTypes = []
            this.properties.forEach(p => {
                propertyTypes.push(p.type)
            });
            return utilities.getDistinctValues(propertyTypes)
        },
        recentPropertyStatus() {
            var PropertyStatus = []
            this.properties.forEach(p => {
                PropertyStatus.push(p.status)
            });
            return utilities.getDistinctValues(PropertyStatus)
        },
        maxPrice() {
            return this.property.status.toLowerCase() == 'rent' ? 10000 : 10000000;
        },
        maxPriceWithComma() {
            return utilities.addCommas(this.property.price)
        },
        step() {
            return this.property.status.toLowerCase() == 'rent' ? 50 : 1000;
        },
        query(){
            var url = '?'
            if(this.property.type) url += `type=${this.property.type}`
            if(this.property.location) url += `&location=${this.property.location}`
            if(this.property.status) url += `&status=${this.property.status}`
            if(this.property.price) url += `&price=${this.property.price}`
            if(this.property.bedrooms) url += `&bedrooms=${this.property.bedrooms}`
            if(this.property.bathrooms) url += `&bathrooms=${this.property.bathrooms}`
            if(this.property.area) url += `&area=${this.property.area}`
            return url
            // return `?type=${this.property.type}&location=${this.property.location}&status=${this.property.status}&price=${this.property.price}&beds=${this.property.beds}&bathrooms=${this.property.bathrooms}`
        }

    },
    props: ['properties']


}