import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";

class Play extends React.PureComponent {
    render() {
        return (
            <Link name="Play" color="green" onClick={this.props.onPlay}/>
        );
    }
}

Play.propTypes = {
    onPlay: PropTypes.func.isRequired,
};

export default Play;
