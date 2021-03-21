import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  path: string;
}

export const Mode: React.FC<Props> = (props) => {
  return (
    <div className="mode-container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Link to={props.path}>{props.title}へ </Link>
      <br />
    </div>
  );
};
