// @flow
import type {State} from "./reducer";

import {connect} from "react-redux";
import * as actions from "./action";
import {STATUS_STOP} from "./constant";
import PingPong from "./PingPong";

const mapStateToProps = ({pingPong, table}: State) => ({
    tableStatus: pingPong.isPlaying ? table.status : STATUS_STOP,
});

export default connect(mapStateToProps, actions)(PingPong);
