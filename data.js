console.log("HELLO")


const url = 'https://jsonplaceholder.typicode.com/posts/';

// fetch().then().then().catch()
// fetch(url, {}).then(()=>{}).then(()=>{}).catch(()=>{})

fetch(url, {})
	.then((response)=> response.json())
	.then((data)=>{
		console.log(data)
		return data
	})
	.catch((err)=>console.log(err))




const username=document.getElementsByClassName("user-name").value()
const password=document.getElementsByClassName("password").value()


const textpassword=document.getElementsByClassName("text-password")
const usernametext=document.getElementsByClassName("text-username")



	