import {connect} from "react-redux";
import PingPong from "./presenter";
import {play, stop} from "./../../action/pingPong";
import {STOP} from "./../../constant/tableStatus";

const mapStateToProps = (state) => {
    console.log('Container<PingPong>:', state);
    console.log('=================================');

    return {
        tableStatus: state.isPlaying ? state.tableStatus : STOP,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPlayClick() {
            console.log('Container<PingPong>.onPlayClick(dispatch)');
            dispatch(play());
        },
        onStopClick() {
            console.log('Container<PingPong>.onStopClick(dispatch)');
            dispatch(stop());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PingPong);
