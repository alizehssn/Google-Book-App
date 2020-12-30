import React from "react";
import { Button } from "react-bootstrap"

const BookBtn = (props) => {
    return(
        <Button
            onClick={props.handleSaveBook}
            as={props.as}
            type={props.type}
            value={props.value}
            variant={props.variant}
            className={props.class}
            size={props.size}
            >
                {props.children}
        </Button>
    );
};

export default BookBtn 