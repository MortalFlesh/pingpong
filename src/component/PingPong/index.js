import {connect} from "react-redux";
import * as actions from "./action";
import {STATUS_STOP} from "./constant";
import PingPong from "./PingPong";

const mapStateToProps = ({pingPong, table}) => ({
    tableStatus: pingPong.isPlaying ? table.status : STATUS_STOP,
});

export default connect(
    mapStateToProps,
    actions
)(PingPong);
