import {connect} from "react-redux";
import PingPong from "./presenter";
import {play, stop} from "./../../action";
import {STOP} from "./../../constant/tableStatus";

const mapStateToProps = (state) => {
    const {pingPong, table} = state;
    console.log('Container<PingPong>:', {isPlaying: pingPong.isPlaying, status: table.status});
    console.log('=================================');

    return {
        tableStatus: pingPong.isPlaying ? table.status : STOP,
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
