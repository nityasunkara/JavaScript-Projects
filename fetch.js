const userAPI = "https://jsonplaceholder.typicode.com/users";
const getUserData = async () => {
    const response = await fetch(userAPI);
    const data = await response.json();
    console.log(data)
    let ids = "";
    let names = "";
    let emails = "";
    let usernames = "";
    let addresses = "";
    data.forEach((user) => {
        ids = ids + "\n" + user.id;
        names = names + "\n" + user.name;
        emails = emails +  "\n" + user.email;
        usernames = usernames + "\n" + user.username;
        addresses = addresses + "\n" + user.address;
    });
    console.log(`Ids: ${ids}`);
    console.log(`Names: ${names}`);
    console.log(`Emails: ${emails}`);
    console.log(`Usernames: ${usernames}`);
    console.log(`Addresses: ${addresses}`)

}
getUserData()



// fetch(userAPI).then((res)=>res.json()).then((data)=>console.log(data)).catch((er)=>console.log(er))