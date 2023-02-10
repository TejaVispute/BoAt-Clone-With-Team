const express = require('express');
const cors = require('cors')
const app = express();
const port = 4000;
app.use(cors());

const productDetails = [
    {
        productName: "Airpods",
        price: 1099,
        discount: "65%",
        ratings: 4.8,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_300x.png?v=1668756103"
    },

    {
        productName: "TRebel Airdopes 131",
        price: 1299,
        discount: "57%",
        ratings: 4.7,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ivory-white_69842c05-b55f-48ff-90ed-9411992d960d_300x.png?v=1658994528"
    },
    {
        productName: "Airdopes 141",
        price: 999,
        discount: "78%",
        ratings: 4.8,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_300x.png?v=1668599490"
    },
    {
        productName: "TRebel Airdopes 141",
        price: 1499,
        discount: "67%",
        ratings: 5.0,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_92c7203d-e618-4992-864f-cc69f45cbdb2_300x.png?v=1673001301"
    },

    {
        productName: "Airdopes 131 PRO",
        price: 1199,
        discount: "60%",
        ratings: 4.9,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_300x.png?v=1657775492"
    },

    {
        productName: "Airdopes 411 ANC",
        price: 2499,
        discount: "50%",
        ratings: 4.8,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_300x.png?v=1657775492"
    },
    {
        productName: "Airdopes 121 PRO",
        price: 1499,
        discount: "50%",
        ratings: 4.9,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fvtfgvt_300x.png?v=1658150489"
    },
    {
        productName: "Airdopes 121 v2",
        price: 1299,
        discount: "57%",
        ratings: 4.8,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_300x.png?v=1612765376"
    },
    {
        productName: "Airdopes 121 v2",
        price: 1599,
        discount: "67%",
        ratings: 4.9,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main2_300x.png?v=1655368638"
    },
    {
        productName: "Airdopes 141 Pro",
        price: 1499,
        discount: "50%",
        ratings: 4.9,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD141Pro-FI_Black02_300x.png?v=1671109869"
    },
    {
        productName: "Airdopes 381",
        price: 1999,
        discount: "60%",
        ratings: 4.8,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a78da6b8-689c-40f3-9c50-bcb4998c5f2a_300x.png?v=1625045618"
    },
    {
        productName: "Airdopes 413 ANC",
        price: 2499,
        discount: "50%",
        ratings: 5.0,
        extraDiscount: "RS 15",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/413-green_300x.png?v=1658298863"
    },


]



let homeDetail = [

    {

        name: "Wireless Earbuds",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1663752600"

    },
    {

        name: "Wireless Headphones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_100x.png?v=1663752867"

    },
    {

        name: "Wired Earphones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1663753167"      

    },
    {

        name: "Smart Watches",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_100x.jpg?v=1675683311"

    },
    {

        name: "Bluetooth Speakers",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1663753243"

    },
    {

        name: "Home Theater System & Soundbars",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1663753280"

    },
    {

        name: "TRebel",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1675683871"

    },
    {

        name: "Mobile Accessories",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_100x.jpg?v=1675683444"

    },
    {

        name: "Limited Edition",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_100x.png?v=1675683940"

    },
    {

        name: "Misfit-Best Trimmer for Men",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_100x.png?v=1663753379"

    },
    {

        name: "Immortal Gaming",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_100x.png?v=1663753419"

    }
 
]


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/products', (req, res) => {
    res.json(productDetails)
})
app.get("/homep",(req,res)=>{

    res.json(homeDetail)
    
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})