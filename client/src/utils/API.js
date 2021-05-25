/*

Routes
Login/Signup Page
- Login
- Signup (only to add comments as a fan)*

Dashboard / Events (Sanity API)
- Fetch

Contacts
- Post 
- Get
- Delete

*/
import axios from "axios";

export default {
    login: async function(userInfo) {
        const result = await axios.post('/api/users/login', userInfo);
        return result;
    },

    NewContact: function(contactInfo) {
        return axios.post('/api/contacts', contactInfo);
    }
}