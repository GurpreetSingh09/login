import React from "react";

function Input(props) {
  return (
    <div>
      {props.fieldName ? (
        <div className="bmform_frmtext1015852">
          {props.fieldName}
          {props.req ? <span className="req"> *</span> : ""}
        </div>
      ) : (
        ""
      )}
      <input
        type={props.type}
        id={props.id}
        className={props.inputClass}
        name={props.name}
        value={props.value}
        maxLength={props.maxLength}
        onChange={props.onChangeHandler}
      />
    </div>
  );
}

export default Input;
