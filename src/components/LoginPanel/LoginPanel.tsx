import { useMutation } from "@apollo/client";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { LOGIN_USER } from "../../graqhql/mutations";
import { Loader } from "../Loader/Loader";

type LoginPanelPropType = {
  setTab: Dispatch<SetStateAction<string>>;
  setToken: Dispatch<SetStateAction<string>>;
};

export const LoginPanel: React.FC<LoginPanelPropType> = ({
  setTab,
  setToken,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loginUser, { loading,error }] = useMutation(LOGIN_USER);
  
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await loginUser({ variables: { input: formData } });
    const token = res.data.login;
    if (!!token) {
      localStorage.setItem("token", token);
      setToken(token);
      setTab("post");
    }
    setFormData({
      username: "",
      password: "",
    });
  };

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);


  return (
    <div>
      <form onSubmit={loginHandler} className="form-container">
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={changeHandler}
            type="text"
            value={formData.username}
            name="username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Passsword</label>
          <input
            onChange={changeHandler}
            type="password"
            value={formData.password}
            name="password"
          />
        </div>
        <button className="auth-btn" type="submit">
          {loading ? <Loader /> : "Login"}
        </button>
        <p className="alternate-auth-text">
          Don't have an account? Signup {" "}
          <span
            className="highlight-text-link"
            onClick={() => setTab("signup")}
          >
            here
          </span>
        </p>
      </form>
    </div>
  );
};
