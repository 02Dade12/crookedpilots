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

    NewContact: async function(contactInfo) {
        const result = await axios.post('/api/contacts', contactInfo);
        return result;
    },

    hasSignedIn: async function() {
        const result = await axios.get('/api/users/auth');
        return result;
    },

    logout: async function() {
        const res = await axios.post('/api/users/logout');
        return res;
    },

    getMessages: async function() {
        const res = await axios.get('/api/contacts');
        return res;
    },

    getMessage: async function(id) {
        const res = await axios.get('/api/contacts/' + id);
        return res;
    },

    deleteMessage: async function(id) {
        const res = await axios.delete('/api/contacts/' + id);
        return res;
    }

}