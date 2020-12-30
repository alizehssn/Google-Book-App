import axios from "axios";

const API =  {
getBooks: (query) => {
return axios.get('https://wwww.googleapis.com/books');
},
deleteBook: (id) => {
    return axios.delte("/api/books" + id).then((result)=> result.data);
},
saveBook: (bookData) => {
    return axios.post("/api/books", bookData).then((result)=> result.data);
},
savedBook: () => {
    return axios.get("/api/books").then((result) => result.data);
},
   
};

export default API;