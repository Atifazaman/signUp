const nameInput=document.getElementById("name")
const emailInput=document.getElementById("email")
const passwordInput=document.getElementById("password")
const signUpBtn=document.getElementById("signUpBtn")
const signUpForm=document.getElementById("signUpForm")
const Base_Url="http://localhost:3000/user"
async function addUser(obj){
    try {
        const response=await axios.post(`${Base_Url}/signup`,obj)
       console.log(response.data.message); 
       signUpForm.reset(); 
    } catch (error) {
        console.log(error.response.data.message);
    }
}

signUpForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const obj={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }

    addUser(obj)
})
