import React from "react";

export const NoMatch: React.FC = () => {
  return (
    <div className="result-container">
      <h1>ご指定のページが見つかりません。</h1>
      <p>ご指定のページは削除されたか、移動した可能性がございます。</p>
    </div>
  );
};
