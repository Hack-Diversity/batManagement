import React, {useState} from 'react';

function Input(props){


  const [inputType] = useState(props.type);
  const [inputName] = useState(props.name);
  const [inputPlaceholder] = useState(props.placeholder);
  const [inputValue] = useState(props.value);
  const [inputChange, setChange] = useState(props.onChange);
  const [inputClass] = useState(props.className);


  const [inputChange2] = useState(props.onChange);
  const [inputValue2] = useState(props.value);



  return(
    <>
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputChange}
        class={inputClass}
        />
    </>
  );
};

export default Input;
