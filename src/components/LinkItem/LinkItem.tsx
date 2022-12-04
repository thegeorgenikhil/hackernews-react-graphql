type LinkItemProps = {
  title: string;
  url: string;
  id: string;
  username: string;
};

const removeHTTPFromUrl = (url: string) => {
  return url.replace(/https?:\/\//, "");
};

const shortenUrl = (url: string) => {
  return url.length > 30 ? url.substring(0, 30) + "..." : url;
};

export const LinkItem: React.FC<LinkItemProps> = ({
  title,
  url,
  id,
  username,
}) => {
  return (
    <div className="link-item-container">
      <p className="link-id">{id}</p>
      <div className="link-content-container">
        <div className="link-content">
          <a target={"_blank"} rel={"noreferrer"} href={url}>
            <p className="link-title">{title}</p>
          </a>
          <a target={"_blank"} rel={"noreferrer"} href={url}>
            <small className="link-url">({removeHTTPFromUrl(shortenUrl(url))})</small>
          </a>
        </div>
        <p className="link-author">by {username}</p>
      </div>
    </div>
  );
};
