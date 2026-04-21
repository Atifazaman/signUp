const {Sequelize}=require("sequelize")
const sequelize=new Sequelize("users","root","aaaa",{
   host:"localhost",
   dialect:"mysql"
});


(async()=>{
    try {
        await sequelize.authenticate()
        console.log("Sequelize is connected to the db")
    } catch (error) {
        console.log(error.message)
    }
})()


module.exports=sequelize
