import React from "react";

const Title = (props) => {
    return <div>
        <h1 style={{fontSize: 50, color: "red"}}>{props.value}</h1>
    </div>
}

export default Title;