import React from "react";
import PropTypes from "prop-types";

class Link extends React.PureComponent {
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
        const {name, onClick} = this.props;

        return (
            <button className="Link" style={this.getStyle()} onClick={onClick}>
                {name}
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
