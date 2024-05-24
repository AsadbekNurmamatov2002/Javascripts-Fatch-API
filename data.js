console.log("hello")
const userlist=document.getElementById("userlist")

const urlUserList="https://jsonplaceholder.typicode.com/users/1"

fetch (urlUserList)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(userData => {
        // Process the retrieved user data
        console.log(userData.id)
        userlist.textContent=userData.email + userData.username
		
      })
      .catch(error => {
        console.error('Error:', error);
      })