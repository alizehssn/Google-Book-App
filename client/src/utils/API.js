import axios from "axios";

const API =  {
    search: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    saveBook: function(bookInfo) {
        return axios.post(`/api/books/${bookInfo.id}`);
    }
};
export default API;