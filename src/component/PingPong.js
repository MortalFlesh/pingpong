import React from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import Play from "./Play";
import Stop from "./Stop";
import {statuses} from "./../constant/tableStatus";

class PingPong extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="PingPong">
                <Table status={this.props.tableStatus}/>

                <div>
                    <Play onPlay={this.props.onPlayClick} />
                    <Stop onStop={this.props.onStopClick} />
                </div>
            </div>
        );
    }
}

PingPong.propTypes = {
    tableStatus: PropTypes.oneOf(statuses).isRequired,
    onPlayClick: PropTypes.func.isRequired,
    onStopClick: PropTypes.func.isRequired,
};

export default PingPong;
