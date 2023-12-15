import React from "react";

const ControlledComponent = () => {
    console.log('ControlledComponent');
    return <div>hello i am entered</div>
}

export default React.memo(ControlledComponent)