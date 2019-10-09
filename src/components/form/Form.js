import React from "react";

import "./form.scss";

const Form = ({ onChange, label, ...otherProps }) => {
  return (
    <div className='group'>
      <input type='form-input' onChange={onChange} />
    </div>
  );
};

export default Form;
