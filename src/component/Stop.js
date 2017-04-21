import React from "react";
import Link from "./Link";

class Stop extends React.PureComponent {
    render() {
        return (
            <Link name="Stop" color="red" onClick={() => {console.log('stop...')}} />
        );
    }
}

export default Stop;
