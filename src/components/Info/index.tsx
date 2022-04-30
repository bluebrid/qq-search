import React from "react";
import "./index.scss";
const _ = require("lodash");
interface PageProps {
  info: {
    name?: string;
    qq: string;
    qlogo: string;
  };
}
export const Info = React.memo((props: PageProps) => {
  const {
    info: { name, qq, qlogo },
  } = props;
  return (
    <div className="info">
      <div className="info_logo">
        <img src={qlogo} alt="" />
      </div>
      <div className="info_detail">
        <div className="info_detail--name"> {name}</div>
        <div className="info_detail--qq">{qq}</div>
      </div>
    </div>
  );
});
