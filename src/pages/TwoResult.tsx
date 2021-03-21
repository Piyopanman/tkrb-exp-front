import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "querystring";
import { getToukenTwo } from "../api/getToukenTwo";
import { Result } from "../components/Result";
import { TwitterShareButton, TwitterIcon } from "react-share";

interface toukenDataIF {
  touken: {
    toukenName: string;
    level: number;
    exp: number;
    konpeto: number;
    atsukashi: number;
  }[];
  isSameExp: boolean;
  moreGrown: number;
  lessGrown: number;
  diffKonpeto: number;
  diffAtsukashi: number;
}

export const TwoResult: React.FC = () => {
  const myLocation = useLocation();
  const parsed = queryString.parse(myLocation.search);

  const initialState: toukenDataIF = {
    touken: [
      {
        toukenName: "",
        level: 0,
        exp: 0,
        konpeto: 0,
        atsukashi: 0,
      },
    ],
    isSameExp: false,
    moreGrown: 0,
    lessGrown: 0,
    diffKonpeto: 0,
    diffAtsukashi: 0,
  };

  const [toukenData, setToukenData] = useState<toukenDataIF>(initialState);

  useEffect(() => {
    const func = async () => {
      const res = (await getToukenTwo(parsed)) as toukenDataIF;
      setToukenData(res);
    };
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var twitterText: string;
  if (toukenData.isSameExp) {
    twitterText = `${parsed.saniwa}本丸の${
      toukenData.touken[toukenData.moreGrown].toukenName
    }と${
      toukenData.touken[toukenData.lessGrown].toukenName
    }の練度は同じでした☺️`;
  } else {
    twitterText = `${parsed.saniwa}本丸の${
      toukenData.touken[toukenData.lessGrown].toukenName
    }は、根平糖${toukenData.diffKonpeto}個食べたら${
      toukenData.touken[toukenData.moreGrown].toukenName
    }に追いつきます！`;
  }

  return (
    <div className="result-container">
      <h1>調査結果</h1>
      <h2 className="top-sentence">{parsed.saniwa}本丸の...</h2>
      {toukenData.isSameExp ? (
        <h2 className="content">
          {toukenData.touken[toukenData.lessGrown].toukenName}と
          {toukenData.touken[toukenData.moreGrown].toukenName}
          の練度は同じでした！
        </h2>
      ) : (
        <h2 className="content">
          {toukenData.touken[toukenData.lessGrown].toukenName}は<br />
          根平糖を{toukenData.diffKonpeto}個食べるか、
          <br />
          厚樫山を{toukenData.diffAtsukashi}周したら、
          <br />
          {toukenData.touken[toukenData.moreGrown].toukenName}に追いつきます！
          <br />
        </h2>
      )}
      {toukenData.touken.map((t) => (
        <Result key={t.toukenName} {...t} />
      ))}

      <TwitterShareButton
        title={twitterText}
        hashtags={["とうらぶ練度チェッカー"]}
        url={window.location.href}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <p>↑Twitterで結果を共有↑</p>
    </div>
  );
};
