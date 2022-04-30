import React from "react";
import "./index.scss";
interface PageProps {
  value?: String;
}
export const Title = React.memo((props: PageProps) => {
  const { value = "QQ号码查询" } = props;
  return <div className="title">{value}</div>;
});
