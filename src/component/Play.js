import React from "react";
import Link from "./Link";

class Play extends React.PureComponent {
    render() {
        return (
            <Link name="Play" color="green" onClick={() => {console.log('play...')}} />
        );
    }
}

export default Play;
