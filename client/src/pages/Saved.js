import React from "react";
import BookJumbotron from "../components/Jumbotron";
import SavedBookList from "../components/SavedList";


const SavedBooks = (props) => {
    return(
        <div>
            <BookJumbotron title={props.title}/>
            <SavedBookList/>
        </div>
    )
}


export default SavedBooks;