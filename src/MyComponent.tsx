import React from "react";

export interface MyData {
    test?: String
}

const MyComponent: React.FC<MyData> = ({test}): JSX.Element => {
    return (
        <>Hello, change 7, {test}</>
    )
}

export default MyComponent;
