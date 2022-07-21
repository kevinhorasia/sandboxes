// const getTodos = (resource, callback) => {
//     // Create request object
//     const request = new XMLHttpRequest();

//     // Track request event
//     request.addEventListener('readystatechange', () => {
//         /* ready state
//             0 : client has been created
//             1 : open() has been called
//             2 : send() has been called
//             3 : downloading, responseText hold partial data
//             4 : operation complete
//         */
//         // console.log(request, request.readyState);
//         if (request.readyState === 4 && request.status === 200) 
//         {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data); 
//         }
//         else if (request.readyState === 4) 
//             callback('could not fetch data', undefined);
//     });

//     // Setting up request
//     request.open('GET', resource);

//     // Send request
//     request.send();
// }

// getTodos((error, data) => {
//     console.log('callback is fired');
//     if (error) {
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// });

// Sequentially requests
// getTodos('todos/mario.json', (error, data) => {
//     console.log(data);
//     getTodos('todos/luigi.json', (error, data) => {
//         console.log(data);
//         getTodos('todos/yoshi.json', (error, data) => {
//             console.log(data);
//         });
//     });
// });

// // Promises
// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) 
//             {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }
//             else if (request.readyState === 4) 
//                 reject('error getting resource');
//         });
        
//         request.open('GET', resource);
//         request.send();
//     });
// }

// getTodos('todos/mario.json').then(data => {
//     console.log('promise resolved:', data);
//     return getTodos('todos/luigi.json');
// }).then(data => {
//     console.log('promise 2 resolved:', data);
//     return getTodos('todos/yoshi.json');
// }).then(data => {
//     console.log('promise 3 resolved:', data);
// }).catch(error => {
//     console.log('promise rejected:', error);
// });

// // Fetch API
// fetch('todos/luigi.json').then(response => {
//     if (response.status !== 200) {
//         throw new Error('failed to fetch data');
//     }
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log('rejected', error);
// });

// async & await
const getTodos = async () => {
    const response = await fetch('todos/marios.json');

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    return data;
}

console.log(1);
console.log(2);

getTodos().then(data => {
    console.log('resolved:', data);
}).catch(error => {
    console.log('rejected:', error.message);
});

console.log(3);
console.log(4);