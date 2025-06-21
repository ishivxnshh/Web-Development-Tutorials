const axios = require("axios");

// function main() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(async response => {
//             const json = await response.json();
//             console.log(json);
//         });
// };

// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: {
//             username: "shivansh",
//             password: "password123"
//         },
//         headers: {
//             "Authorization": "Bearer your_token_here"
//         }
//     });
//     const json = await response.json();
//     console.log(json);
// }

async function main() {
    const response = await axios.post("https://httpdump.app/dumps/3f54208a-6d95-4cc3-9847-3aa0d498a5dd?a=b", {
        body: {
            username: "shivansh",
            password: "password123"
        }
    },
        {
            headers: {
                "Authorization": "Bearer your_token_here"
            }
        });
    console.log(response.data);
}

main();