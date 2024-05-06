//POST- posts the data
// const postAPI = "https://jsonplaceholder.typicode.com/posts";
// const postData = async (title, body, userId) => {
//     const response = await fetch(postAPI, {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     });
//     const data = await response.json();
//     console.log(data);

// }
// postData("Nitya", 4887, 21)
// postData("Suma", 8990, 45)








// //PUT- update all the entries
// const putAPI = "https://jsonplaceholder.typicode.com/posts/1";
// const updateData = async () => {
//     const response = await fetch(putAPI, {
//         method: 'PUT',
//         body: JSON.stringify({ 
//             title: "Kedar",
//             body: "Hello",
//             userId: 35,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     });
//     const data = await response.json();
//     console.log(data);

// }
// updateData()





//PATCH- update specific entries
const patchAPI = "https://jsonplaceholder.typicode.com/posts/2";
const patchData = async()=> {
    const response = await fetch(patchAPI, {
        method: "PATCH",
        body: JSON.stringify({ 
            title: "Suma",
            
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',

        }
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

}
patchData();


//DELETE
// const deleteAPI = "https://jsonplaceholder.typicode.com/posts/1";
// const deletData = async()=> {
//     const response = await fetch(deleteAPI, {
//         method: "DELETE",
        
//     });
//     const data = await response.json();
//     console.log(data);

// }
// deletData();

