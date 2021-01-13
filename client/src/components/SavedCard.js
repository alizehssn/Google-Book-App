import React from 'react'
const styles = {
    image: {
      margin: 20,
      height: "200px",
      width: "200px"
    }
  }
  
 const SavedCard = (props) => {
    return (
   
    <div 
      className="col-lg-3"
    
      key={props.book._id}
      >
      <div className="img-container">
        <h5>{props.book.title}</h5>
        {/* <h6>{props.book.authors}</h6> */}
        <img 
            alt={props.book.title} 
            src={props.book.image} 
            style={styles.image}
        />
        <p><a href={props.book.link}>LINK</a></p>
        {/* <p> <Button onClick={() => props.handleSaveClick(props)}> SAVE </Button></p> */}
        <p>{props.book.description}</p>
      </div>
    </div>
  );
       
    
}

export default SavedCard
