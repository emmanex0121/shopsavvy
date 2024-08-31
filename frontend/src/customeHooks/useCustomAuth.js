import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosinstance.config";
import { endpoints } from "../api/endpoints";
import useNotification from "./useNotification";
import { useState } from "react";

const useRegister = () => {
  const [loading, setloading] = useState(false);
  const { onNotify } = useNotification();
  const navigate = useNavigate();

  // fnction to call forregustration
  const onAuth = async (request) => {
    console.log("Form Values:", request); // Check the form values here

    setloading(true);

    // Define the endpoint based on request parameters
    let endpoint;
    if (request.firstName || request.lastName) {
      endpoint = endpoints.auth.register;
    } else {
      endpoint = endpoints.auth.login;
    }

    try {
      const response = await axiosInstance.post(endpoint, request);
      setloading(false);
      console.log(response);

      if (response.data?.response === "00") {
        // console.log(response.data?.response);
        onNotify("success", "Successful", response?.data?.responseMessage);

        if (endpoint === endpoints.auth.login) {
          console.log(endpoint);
          sessionStorage.setItem("***", response.data?.data?.token);
        }
        setTimeout(() => {
          return navigate("/dashboard");
        }, 2000);
      } else {
        onNotify("error", "Error occured", response?.data?.responseMessage);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      onNotify("error", "Error occured", error.response?.data?.responseMessage);
    }
  };

  return {
    onAuth,
    loading,
  };
};

export default useRegister;
