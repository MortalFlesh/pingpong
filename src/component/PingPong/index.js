import {connect} from "react-redux";
import PingPong from "./presenter";
import {play, stop} from "./../../action/pingPong";
import {STOP} from "./../../constant/tableStatus";

const mapStateToProps = (state) => {
    const {pingPong} = state;
    console.log('Container<PingPong>:', pingPong);
    console.log('=================================');

    return {
        tableStatus: pingPong.isPlaying ? pingPong.tableStatus : STOP,
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
