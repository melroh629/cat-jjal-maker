import React from "react";

const CatItem = (props) => {
    return (
        <>
            <li>
                <img src={props.img} />
            </li>
        </>
    );
}
export default CatItem 