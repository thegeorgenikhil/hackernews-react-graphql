export const SignupPanel = () => {
  return (
    <div>
      <form className="form-container">
        <h1>Signup</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button className="auth-btn" type="submit">
          Signup
        </button>
        <p className="alternate-auth-text">
          Already a user? Log in{" "}
          <span className="highlight-text-link">here</span>
        </p>
      </form>
    </div>
  );
};
