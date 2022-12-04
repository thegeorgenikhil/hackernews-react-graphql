export const PostPanel = () => {
  return (
    <div>
      <form className="form-container">
        <h1>Post Link</h1>
        <div className="input-group">
          <label htmlFor="title">Link Title</label>
          <input type="text" name="title" />
        </div>
        <div className="input-group">
          <label htmlFor="address">Link Address</label>
          <input type="text" name="address" />
        </div>
        <button className="auth-btn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};
