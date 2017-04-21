import {connect} from "react-redux";
import PingPong from "../component/PingPong";

const mapStateToProps = (state) => {
    return {
        tableStatus: '',
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PingPong);
