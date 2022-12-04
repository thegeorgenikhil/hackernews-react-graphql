export const LinkItem= () => {
  return (
    <div className="link-item-container">
      <p className="link-id">id</p>
      <div>
        <div className="link-content">
          <a target={"_blank"} rel={"noreferrer"} href={"url-here"}>
            <p className="link-title">title</p>
          </a>
          <a target={"_blank"} rel={"noreferrer"} href={"url"}>
            <small className="link-url">url</small>
          </a>
        </div>
        <p className="link-author">by username</p>
      </div>
    </div>
  );
};
