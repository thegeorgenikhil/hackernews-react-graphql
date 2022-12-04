export const LoginPanel = () => {
  return (
    <div>
      <form className="form-container">
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Passsword</label>
          <input type="password" name="password" />
        </div>
        <button className="auth-btn" type="submit">
          Login
        </button>
        <p className="alternate-auth-text">
          Don't have an account? Signup{" "}
          <span className="highlight-text-link">here</span>
        </p>
      </form>
    </div>
  );
};
