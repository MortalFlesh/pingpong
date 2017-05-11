import React from "react";
import PropTypes from "prop-types";
import {STATUSES} from "./constant";

import Table from "./../Table";
import Play from "./../Play";
import Stop from "./../Stop";

class PingPong extends React.PureComponent {
    render() {
        const {tableStatus, play, stop} = this.props;

        return (
            <div className="PingPong">
                <Table status={tableStatus}/>

                <div>
                    <Play onPlay={play}/>
                    <Stop onStop={stop}/>
                </div>
            </div>
        );
    }
}

PingPong.propTypes = {
    tableStatus: PropTypes.oneOf(STATUSES).isRequired,
    play: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
};

export default PingPong;
