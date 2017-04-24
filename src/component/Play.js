import React from "react";
import Link from "./Link";
import PropTypes from "prop-types";

class Play extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link name="Play" color="green" onClick={() => {
                console.log('Button<Play>.click()');
                this.props.onPlay();
            }}/>
        );
    }
}

Play.propTypes = {
    onPlay: PropTypes.func.isRequired,
};

export default Play;
