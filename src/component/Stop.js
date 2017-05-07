import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";

class Stop extends React.PureComponent {
    render() {
        return (
            <Link name="Stop" color="red" onClick={this.props.onStop}/>
        );
    }
}

Stop.propTypes = {
    onStop: PropTypes.func.isRequired,
};

export default Stop;
