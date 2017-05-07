import React from "react";
import PropTypes from "prop-types";
import {STATUSES} from "./constant";

import Table from "./../Table";
import Play from "./../Play";
import Stop from "./../Stop";

class PingPong extends React.PureComponent {
    render() {
        const {tableStatus, onPlayClick, onStopClick} = this.props;

        return (
            <div className="PingPong">
                <Table status={tableStatus}/>

                <div>
                    <Play onPlay={onPlayClick}/>
                    <Stop onStop={onStopClick}/>
                </div>
            </div>
        );
    }
}

PingPong.propTypes = {
    tableStatus: PropTypes.oneOf(STATUSES).isRequired,
    onPlayClick: PropTypes.func.isRequired,
    onStopClick: PropTypes.func.isRequired,
};

export default PingPong;
