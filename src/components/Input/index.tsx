import "./index.scss";
import React, { ChangeEvent, useState } from "react";
import { getQQInfo } from "../../apis";
const _ = require("lodash");
interface PageProps {
  onChange: Function;
  setLoading: Function;
}
export const Input = React.memo((props: PageProps) => {
  const { onChange, setLoading } = props;
  const [errorMsg, setErrorMsg] = useState("");
  const throttleChange = _.debounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "";
    setLoading(true);
    getQQInfo(value)
      .then((info) => {
        onChange?.(info);
        setErrorMsg("");
      })
      .catch((e) => {
        console.log(e);
        setErrorMsg(e);
        onChange?.(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, 300);

  return (
    <>
      <div className={`input ${errorMsg ? "errorMsg" : ""}`}>
        <span className="input_label">QQ</span>{" "}
        <input className="input_value" onChange={throttleChange}></input>
      </div>
      {errorMsg && <div className="input_errorMsg"> {errorMsg}</div>}
    </>
  );
});
