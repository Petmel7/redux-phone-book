import axios from "axios";

// export const FetchContacts = () => {
//     fetch('https://65228621f43b1793841497a2.mockapi.io/contacts', {
//         method: 'GET',
//         headers: { 'content-type': 'application/json' },
//     }).then(res => {
//         if (res.ok) {
//             return res.json();
//         }
//         console.log('res', res)
//         // handle error
//     }).then(tasks => {
//         // Do something with the list of tasks
//     }).catch(error => {
//         // handle error
//     })

//     return
// };

// axios.defaults.baseURL = 'https://65228621f43b1793841497a2.mockapi.io/contacts/';

// export const FetchContacts = async () => {
//     const response = await axios.get('https://65228621f43b1793841497a2.mockapi.io/contacts/');
//     return response.data;
// }