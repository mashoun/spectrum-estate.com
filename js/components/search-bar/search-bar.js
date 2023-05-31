import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/search-bar/search-bar.html'),
    data() {
        return {
            property: {
                location: '',
                area: '',
                beds: '',
                bathrooms: '',
                type: '',
                status: 'Rent',
                price: '100',
            }
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
        maxPrice(){
            return this.property.status.toLowerCase() == 'rent' ? 10000 : 10000000;
        },
        maxPriceWithComma(){
            return utilities.addCommas(this.property.price)
        }
        
    },
    props: ['properties']


}