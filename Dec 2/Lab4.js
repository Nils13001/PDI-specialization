const api_url = "https://randomuser.me/api/?results=3";

fetch(api_url)
.then(resp => resp.json())
.then(data=>{
    const users = data.results;
    const userDet = users.map(user =>{
        return `Username: ${user.login.username}
        Date: ${user.dob.date}
        City: ${user.location.city}`
    })
    console.log(userDet);
})
.catch((err)=>console.log("Error in fetching", err)
);