import axios from "./utils";
const cachePrex = "QQ_";
export const getQQInfo = (qq: String) => {
  const getCacheValue = (
    resolve: Function,
    reject: Function,
    errorMsg: string
  ) => {
    const cacheValue = localStorage.getItem(`${cachePrex}${qq}`);
    if (cacheValue) {
      resolve(cacheValue);
    } else {
      reject(errorMsg);
    }
  };
  return new Promise((resolve, reject) => {
    axios.get(`qq.info?qq=${qq}`).then(
      function (res) {
        const { data } = res;
        if (data?.code !== 1) {
          getCacheValue(resolve, reject, data?.msg || "查询失败!");
        } else {
          resolve(data);
        }
      },
      (err) => {
        getCacheValue(resolve, reject, err);
      }
    );
  });
};
