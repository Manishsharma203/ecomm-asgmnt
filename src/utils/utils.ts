import axios from "axios";

export const apiCall = (urlPath:string, methodType:string, payLoad?:any, addHeader?:any) => {
  return new Promise((resolve, reject) => {
    const url =  urlPath;

    // console.log("payLoad:", payLoad);

    let headers = {
      "content-Type": "application/json",
      accept: "application/json",
    };
    if (addHeader)
      headers = {
        ...headers,
        ...addHeader,
      };

    axios({
      method: methodType,
      headers: headers,
      url: url,
      data: payLoad,
    })
      .then(function (response:any) {
        console.log("response:", response.data);
        resolve(response.data);
      })
      .catch(function (error:any) {
        console.log("Axios Error");
        console.log(error);
        resolve("api_error");
      });
  });
};
