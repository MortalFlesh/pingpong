import React from "react";
import Link from "./Link";
import PropTypes from "prop-types";

class Stop extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link name="Stop" color="red" onClick={() => {
                console.log('Button<Stop>.click()');
                this.props.onStop();
            }}/>
        );
    }
}

Stop.propTypes = {
    onStop: PropTypes.func.isRequired,
};

export default Stop;
