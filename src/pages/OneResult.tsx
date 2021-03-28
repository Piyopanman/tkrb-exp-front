import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "querystring";
import { getToukenOne } from "../api/getToukenOne";
import { TwitterShareButton, TwitterIcon } from "react-share";

interface toukenData {
  toukenName: string;
  level: number;
  exp: number;
  konpeto: number;
  atsukashi: number;
}

export const OneResult: React.FC = () => {
  const myLocation = useLocation();
  const parsed = queryString.parse(myLocation.search);

  const initialState: toukenData = {
    toukenName: "",
    level: 0,
    exp: 0,
    konpeto: 0,
    atsukashi: 0,
  };

  const [toukenData, setToukenData] = useState<toukenData>(initialState);

  parsed["saniwa"] = parsed["?saniwa"];
  delete parsed["?saniwa"];

  useEffect(() => {
    const func = async () => {
      const res = (await getToukenOne(parsed)) as toukenData;
      setToukenData(res);
    };
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const twitterText: string = `${parsed.saniwa}本丸の${toukenData.toukenName}の練度は根兵糖${toukenData.konpeto}個分でした！`;

  return (
    <div className="result-container">
      <h1 className="result-text">調査結果</h1>
      <h2 className="result-text">
        {parsed.saniwa}本丸の{toukenData.toukenName}は
      </h2>
      <h2 className="result-text">
        練度が{parsed.level}で、累計経験値は{toukenData.exp}です！
      </h2>
      <h2 className="result-text">これは、</h2>
      <h2 className="result-text">根兵糖{toukenData.konpeto}個分</h2>
      <h2 className="result-text">厚樫山約{toukenData.atsukashi}周分です！</h2>
      <div className="result-text twitter">
        <TwitterShareButton
          title={twitterText}
          hashtags={["とうらぶ練度チェッカー"]}
          url={window.location.href}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <p>↑Twitterで結果を共有↑</p>
      </div>
    </div>
  );
};
