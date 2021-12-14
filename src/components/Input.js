import { useState } from 'react';

const Input = function(props) {
  const [input, setInput] = useState(props.initial);

  const onChange = function(event) {
    setInput(event.target.value);
  };

  const onSubmit = function(event) {
    event.preventDefault();
    props.onSubmit(input);
  };

  return (
    < div className="Input" >
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange} />
        <button>{props.label}</button>
      </form>
    </div>
  );
};

export default Input;