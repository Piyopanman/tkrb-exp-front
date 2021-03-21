import React from "react";
import hiyoko from "../images/hiyoko.png";

export const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>お問い合わせ</h1>
      <p>
        このサイトは、天保江戸組推しの審神者である
        <a href="https://twitter.com/hiyoko_coder">ぴよぱんまん</a>
        が趣味で運営しています。
        <br />
        お問い合わせは<a href="https://twitter.com/hiyoko_coder">Twitter</a>のDM
        で承っています。
        <br />
        バグやサービス改善についてのご意見などお聞かせください！
        <br />
        応援コメントもお待ちしております！
      </p>
      <img src={hiyoko} alt="piyopanman" />
    </div>
  );
};
