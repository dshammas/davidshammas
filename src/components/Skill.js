import React from "react";

export default function Skill({ id, title, image }) {
  return (
        <div className="tc bg-light-blue dib br4 pa4  grow bw2 shadow-5 col-md-3 col-sm-12  m-1 text-center"  style={{display:'inline-block'}}>
          <h5 className="">{title}</h5>
        </div>
  );
}
