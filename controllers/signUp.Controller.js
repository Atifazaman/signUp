const userTable=require("../models/usersTable")

const addUser=async(req,res)=>{
  try {
     const {name,email,password}=req.body
 const checkEmail=await userTable.findOne({where:{
    email
}})

if(checkEmail){
    return res.status(400).json({ message: "Email already exists" });
}
const newUser = await userTable.create({
            name,
            email,
            password
        });

        res.status(201).json({message: "User created successfully"});

  } catch (error) {
     res.status(500).json({ error: error.message });
  }  

}


module.exports={
    addUser
}
