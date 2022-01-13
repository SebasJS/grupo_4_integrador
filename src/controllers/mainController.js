
module.exports = {
    home: (req,res)=>{
        res.render(("users/home"));
    },
    productInfo: (req,res) => {
        res.render(("products/product-info"));
    },
    loginUser: (req,res)=> {
        res.render(("users/login"));
    },
    registerUser: (req,res) => {
        res.render(("users/registro"));
    },
    create: (req,res)=>{
        res.render(("products/createProduct"));
    }
}