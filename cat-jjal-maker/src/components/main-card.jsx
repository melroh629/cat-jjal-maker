import React from "react";

const MainCard = (props) => {

    return (
        <>
            <div className="main-card">
                <img src={props.img} alt="고양이" width="400" />
                <button onClick={props.handleFavorite}>🤍</button>
            </div>
        </>
    )
}
export default MainCard;