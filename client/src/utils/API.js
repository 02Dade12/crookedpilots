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
// import axios from "axios";

export default {
    login: function(userInfo) {
        return axios.post('/api/login', userInfo);
    },

    NewContact: function(contactInfo) {
        return axios.post('/api/contacts', contactInfo);
    }
}