import { useMutation } from "@apollo/client";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { SIGNUP_USER } from "../../graqhql/mutations";
import { Loader } from "../Loader/Loader";

type SignupPanelPropType = {
  setTab: Dispatch<SetStateAction<string>>;
  setToken: Dispatch<SetStateAction<string>>;
};

export const SignupPanel: React.FC<SignupPanelPropType> = ({
  setTab,
  setToken,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [signupUser, { error, loading }] = useMutation(SIGNUP_USER);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signupHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signupUser({ variables: { input: formData } });
    const token = res.data.createUser;
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
      <form onSubmit={signupHandler} className="form-container">
        <h1>Signup</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input onChange={changeHandler} type="text" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input onChange={changeHandler} type="password" name="password" />
        </div>
        <button className="auth-btn" type="submit">
          {loading ? <Loader /> : "Signup"}
        </button>
        <p className="alternate-auth-text">
          Already a user? Log in{" "}
          <span className="highlight-text-link" onClick={() => setTab("login")}>
            here
          </span>
        </p>
      </form>
    </div>
  );
};
