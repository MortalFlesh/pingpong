import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {play, stop} from "./action";
import {STATUS_STOP} from "./constant";
import PingPong from "./PingPong";

const mapStateToProps = ({pingPong, table}) => ({
    tableStatus: pingPong.isPlaying ? table.status : STATUS_STOP,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        onPlayClick: play,
        onStopClick: stop,
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PingPong);
