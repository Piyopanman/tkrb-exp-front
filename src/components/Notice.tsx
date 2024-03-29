import React from "react";

interface Notices {
  date: string;
  text: string;
}

export const Notice: React.FC = () => {
  const notices: Notices[] = [
    { date: "2021.03.28", text: "サービス開始" },
    {
      date: "2021.03.28",
      text: "初期刀５口、刀ミュ東京心覚メンバー、歌合 乱舞狂乱こんぺいとうメンバーを実装",
    },
    {
      date: "2021.05.01",
      text: "泛塵鍛刀キャンペーンと特命調査 慶長熊本に合わせて、泛塵・大千鳥十文字槍・日向正宗・古今伝授の太刀・地蔵行平を実装",
    },
    {
      date: "2021.06.09",
      text: "秘宝の里イベント開催に合わせて、篭手切江・松井江を実装",
    },
    {
      date: "2021.09.03",
      text: "髭切、膝丸、鶴丸国永を実装",
    },
  ];
  return (
    <div>
      <h1 className="notice-title">更新情報</h1>
      <div className="notice-container">
        {notices.map((n) => (
          <div>
            <p className="date">{n.date}</p>
            <p className="text">{n.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
