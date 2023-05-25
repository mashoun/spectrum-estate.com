import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/feedbacks/feedbacks.html'),
    props:['data'],
    data(){
        return{
          feedbacksSwiper:{
              slidesPerView: 1,
              autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
              },
              // loop:true,
              pagination:{
                  el:'.swiper-pagination'
              },
              spaceBetween: 20,
              breakpoints: {
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }
          },
          feedbacks: [
            {
              "name": "Rana Khalife",
              "feedback": "I had an amazing experience working with Spectrum Real Estate. They understood my requirements and found me the perfect home. I highly recommend their services.",
              "image": "https://picsum.photos/200",
              "job": "Architect"
            },
            {
              "name": "Ali Hassan",
              "feedback": "Spectrum Real Estate went above and beyond to sell my property. They were professional, knowledgeable, and kept me informed throughout the entire process. I'm grateful for their expertise.",
              "image": "https://picsum.photos/201",
              "job": "Business Owner"
            },
            {
              "name": "Layla Fakhoury",
              "feedback": "I couldn't be happier with the service provided by Spectrum Real Estate. They made the home buying process seamless and stress-free. I highly recommend their services to anyone in need of a reliable agent.",
              "image": "https://picsum.photos/202",
              "job": "Teacher"
            },
            {
              "name": "Karim Saad",
              "feedback": "Spectrum Real Estate helped me find the perfect investment property. They were responsive, professional, and negotiated an excellent deal. I'm grateful for their expertise in the market.",
              "image": "https://picsum.photos/203",
              "job": "Engineer"
            },
            {
              "name": "Maya Khoury",
              "feedback": "I had a wonderful experience selling my home with Spectrum Real Estate. They provided excellent guidance, marketed my property effectively, and sold it quickly at a great price. Highly recommended!",
              "image": "https://picsum.photos/204",
              "job": "Marketing Manager"
            },
            {
              "name": "Hassan Abboud",
              "feedback": "Spectrum Real Estate was instrumental in finding the perfect commercial space for my business. They understood my requirements and negotiated favorable terms. I'm extremely satisfied with their service.",
              "image": "https://picsum.photos/205",
              "job": "Entrepreneur"
            }
          ]
                  
        }
    }
    
}