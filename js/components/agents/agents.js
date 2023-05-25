import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/agents/agents.html'),
    data() {
        return {
            agents: [
                {
                    name: 'John Smith',
                    bio: 'John Smith is a seasoned real estate agent with over 10 years of experience. He specializes in residential properties and has a proven track record of helping clients find their dream homes.',
                    image: 'https://picsum.photos/1080',
                    email: 'john.smith@spectrum-estate.com'
                },
                {
                    name: 'Emily Johnson',
                    bio: 'Emily Johnson is a dedicated real estate agent who is passionate about helping people navigate the home buying and selling process. She goes above and beyond to ensure her clients find the perfect property.',
                    image: 'https://picsum.photos/1081',
                    email: 'emily.johnson@spectrum-estate.com'
                },
                {
                    name: 'David Brown',
                    bio: 'David Brown has extensive knowledge of the local real estate market and is committed to providing exceptional service to his clients. Whether you are buying or selling, David will guide you through the process with ease.',
                    image: 'https://picsum.photos/1082',
                    email: 'david.brown@spectrum-estate.com'
                },
                {
                    name: 'Sarah Wilson',
                    bio: 'Sarah Wilson has a keen eye for detail and a deep understanding of the real estate industry. She takes pride in assisting her clients in finding properties that perfectly align with their needs and preferences.',
                    image: 'https://picsum.photos/1083',
                    email: 'sarah.wilson@spectrum-estate.com'
                },
                {
                    name: 'Michael Johnson',
                    bio: 'Michael Johnson is a highly motivated real estate agent who is dedicated to helping his clients achieve their real estate goals. With his strong negotiation skills, he consistently delivers successful outcomes.',
                    image: 'https://picsum.photos/1084',
                    email: 'michael.johnson@spectrum-estate.com'
                },
                {
                    name: 'Jennifer Davis',
                    bio: 'Jennifer Davis has a deep passion for real estate and prides herself on providing personalized service to each of her clients. Her attention to detail and excellent communication skills make the buying or selling process seamless.',
                    image: 'https://picsum.photos/1085',
                    email: 'jennifer.davis@spectrum-estate.com'
                }
            ],
            
            agentsSwiper:{
                slidesPerView: 1,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop:true,
                // pagination:{
                //     el:'.swiper-pagination'
                // },
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

        }
    }
}