import React from 'react';
import PropTypes from 'prop-types';

const Forms = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) => {
  return(
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        style={error && {border: 'solid 1px red'}}
        >
      </input>
      {error && <p>{error}</p>}
    </React.Fragment>
  )
};

Forms.defaultProps={
  type:"text",
  className:""
}

Forms.propTypes = {
  name: PropTypes.string.isRequired,
  type:PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value:PropTypes.string,
  onChange:PropTypes.func
};

export default Forms;
