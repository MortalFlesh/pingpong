import React from "react";
import PropTypes from "prop-types";

class Link extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    getStyle() {
        return {
            backgroundColor: this.props.color,
            width: 80,
            padding: '10px 20px',
            fontSize: 16,
            color: 'white',
            borderRadius: 5,
            border: 'none',
            cursor: 'pointer',
        };
    }

    render() {
        return (
            <button className="Link" style={this.getStyle()} onClick={this.props.onClick}>
                {this.props.name}
            </button>
        );
    }
}

Link.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Link;
