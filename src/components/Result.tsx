import React from "react";

interface Props {
  toukenName: string;
  exp: number;
  konpeto: number;
  atsukashi: number;
  level: number;
}

export const Result: React.FC<Props> = (props: Props) => {
  return (
    <div className="two-result-container result-text">
      <h2>{props.toukenName}</h2>
      <ul>
        <li>練度：{props.level}</li>
        <li>累計経験値：{props.exp}</li>
        <li>根兵糖：{props.konpeto}個分</li>
        <li>厚樫山：{props.atsukashi}周分</li>
      </ul>
    </div>
  );
};
