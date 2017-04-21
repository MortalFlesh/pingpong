import React from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import Play from "./Play";
import Stop from "./Stop";

class PingPong extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="PingPong">
                <Table status={this.props.tableStatus}/>

                <div>
                    <Play />
                    <Stop />
                </div>
            </div>
        );
    }
}

PingPong.propTypes = {
    tableStatus: PropTypes.string.isRequired,
};

export default PingPong;
