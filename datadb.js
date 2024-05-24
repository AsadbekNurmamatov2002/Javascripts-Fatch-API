
const userlist=document.getElementById("userlist")

const urlUserList=`https://jsonplaceholder.typicode.com/todos/`

fetch (urlUserList)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(userData => {
        // Process the retrieved user data
        console.log(userData.title)
        userlist.textContent=userData.title
      })
      .catch(error => {
        console.error('Error:', error);
      })