import React from 'react';
import PropTypes from 'prop-types'


const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className="form-control form-control-lg"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

TextInputGroup.prototype = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}
TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;