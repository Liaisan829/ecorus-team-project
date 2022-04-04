import axios from "axios";

axios.interceptors.request.use(({ ...config }) => {

  const token = localStorage.getItem("token");
  console.log(config);

  if (token) {
    return {
      ...config,
      headers: {
        ...(config.headers || {}),
        Authorization: token,
        "Content-type": "application/json"
      }
    };
  } else{
    return config;
  }
});

axios.interceptors.response.use(({...response})=>{
  return response.data;
});