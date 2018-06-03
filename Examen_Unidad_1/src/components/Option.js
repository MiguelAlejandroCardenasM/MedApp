import React from 'react';

const Option = (props) => {
  return(
    <div>
      {props.textOption}
      <button className="button button--link" onClick = {(e) => {
        props.handleDeleteOption(props.textOption);
      }}>Remove
      </button>
    </div>
  );
};

export default Option;