import { useMutation } from "@apollo/client";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { POST_LINK } from "../../graqhql/mutations";
import { Loader } from "../Loader/Loader";

type PostPanelPropType = {
  setRefreshFeed: Dispatch<SetStateAction<boolean>>;
};

export const PostPanel: React.FC<PostPanelPropType> = ({ setRefreshFeed }) => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
  });
  const [postLink, { loading, error }] = useMutation(POST_LINK);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const postHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await postLink({ variables: { input: formData } });
    if (res.data) {
      // using the setRefreshFeed function to update the feed
      setRefreshFeed((prev) => !prev);
      setFormData({
        title: "",
        address: "",
      });
    }
  };

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <div>
      <form onSubmit={postHandler} className="form-container">
        <h1>Post Link</h1>
        <div className="input-group">
          <label htmlFor="title">Link Title</label>
          <input
            onChange={changeHandler}
            value={formData.title}
            type="text"
            name="title"
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Link Address</label>
          <input
            onChange={changeHandler}
            value={formData.address}
            type="text"
            name="address"
          />
        </div>
        <button className="auth-btn" type="submit">
          {loading ? <Loader /> : "Post"}
        </button>
      </form>
    </div>
  );
};
