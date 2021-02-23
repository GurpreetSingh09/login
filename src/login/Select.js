import React from "react";

function Select(props) {
  return (
    <div>
      <div className="bmform_frmtext1015852">{props.fieldName}</div>

      <select className={"select-div " + props.inputClass} onChange={props.onChangeHandler}>
        <option default value="Select">
          Select
        </option>
        {props.values
          ? props.values.map((val, idx) => {
              return (
                <option key={idx} value={val}>
                  {val}
                </option>
              );
            })
          : ""}
      </select>
    </div>
  );
}

export default Select;
