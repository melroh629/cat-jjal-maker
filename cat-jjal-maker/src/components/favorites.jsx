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

const Favorites = () => {
    const CAT1 =
        "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
    const CAT2 =
        "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
    const CAT3 =
        "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";
    const cats = [CAT1, CAT2, CAT3];
    return (
        <>
            <ul className="favorites">
                {cats.map((cat) => (
                    <CatItem img={cat} key={cat} />
                ))}
            </ul>
        </>
    )
}


export default Favorites;