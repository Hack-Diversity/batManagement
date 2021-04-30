import React, {useState} from 'react';
import PropTypes from 'prop-types';

function ButtonComponent(buttonProps){

  const [btnType] = useState(buttonProps.type);
  const [btnClass] = useState(buttonProps.className);
  const [btnVariant] = useState(buttonProps.variant);
  const [btnClick] = useState(buttonProps.onClick);

  return(
    <>
      <button
        type={btnType}
        className={btnClass}
        onClick={btnClick}
        variant={btnVariant}
        />
    </>
  );
};

ButtonComponent.defaultProps={
  type:"button",
  className:""
}

ButtonComponent.propTypes = {
  type:PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  className: PropTypes.string,
  onClick:PropTypes.func.isRequired,
  variant: PropTypes.string,
};

export default ButtonComponent;
