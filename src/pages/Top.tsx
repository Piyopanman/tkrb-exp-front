import React from "react";
import { Mode } from "../components/Mode";
import { Notice } from "../components/Notice";
import title from "../images/title02.png";

export const Top: React.FC = () => {
  const modeProps = [
    {
      key: 1,
      title: "一口モード",
      description: "あなたの本丸の一口の刀剣の練度を調べます",
      path: "/one",
    },
    {
      key: 2,
      title: "２口モード",
      description: "あなたの本丸の２口の刀剣の練度を比べます",
      path: "/two",
    },
  ];
  return (
    <div>
      <img src={title} alt="title-logo" />
      <Notice />
      <div className="modes-container">
        {modeProps.map((m) => (
          <Mode {...m} />
        ))}
      </div>
    </div>
  );
};
