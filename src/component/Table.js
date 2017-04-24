import React from "react";
import PropTypes from "prop-types";

class Table extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    getStyle() {
        return {
            width: 138,
            height: 78,
            padding: 10,
            paddingTop: 40,
            border: '1px solid black',
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 40,
        };
    }

    render() {
        return (
            <div className="Table" style={this.getStyle()}>
                {this.props.status}
            </div>
        );
    }
}

Table.propTypes = {
    status: PropTypes.string.isRequired,
};

export default Table;
