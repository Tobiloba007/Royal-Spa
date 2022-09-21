import pediImg from '../src/resources/pedi.jpg'
import facial from '../src/resources/facial.jpg'
import butt from '../src/resources/butt.jpg'
import antiAge from '../src/resources/anti-age.jpg'
import teeth from '../src/resources/teeth.jpg'
import fruity from '../src/resources/Fruity.jpg'
 


 const MenuItems = [
        {
            id: 1,
            image: facial,
            service: "CLASSIC FACIAL",
            price: "₦4,000" 
        },
        {
            id: 2,
            image: pediImg ,
            service: "PEDI-MANI" ,
            price: "₦3,000" 
        },
        {
            id: 3,
            image: butt,
            service: "BUTT ENHANCEMENT",
            price: "₦10,000"  
        },
        {
            id: 4,
            image: fruity,
            service: "FRUITY PEDICURE" ,
            price: "₦6,000" 
        },
        {
            id: 5,
            image: teeth,
            service: "TEETH WHITENING",
            price: "₦10,000"  
        },
        {
            id: 6,
            image: antiAge,
            service: "ANTI-AGING" ,
            price: "₦5,000" 
        },
    ]

    export default MenuItems;