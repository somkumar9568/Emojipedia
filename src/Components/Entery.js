import React from "react";

function Entery(props) {
  return (
    <>
      <div className="term">
        <dt>
          <span className="emoji" role="img" area-lable="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>
           {props.meaning}
        </dd>
      </div>
    </>
  );
}

export default Entery;
