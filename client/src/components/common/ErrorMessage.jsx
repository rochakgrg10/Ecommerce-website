import React from "react";

function ErrorMessage(props) {
  return (
    <div>
      {props.msg ? (
        <span className="text-sm text-red-500">{props.msg}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default ErrorMessage;
