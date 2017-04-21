import {connect} from "react-redux";
import PingPong from "../component/PingPong";
import {play, stop} from "./../action/pingPongActions";
import {STOP} from "./../constant/tableStatus";

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

const PingPongContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PingPong);

export default PingPongContainer;
