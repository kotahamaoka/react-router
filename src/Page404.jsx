import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>お探しのページが見つかりませんでした</h1>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};
