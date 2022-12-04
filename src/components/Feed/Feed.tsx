import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_LINKS } from "../../graqhql/queries";
import { LinksContainer } from "../LinksContainer/LinksContainer";

type FeedPropType = {
  refreshFeed: boolean;
};

export const Feed: React.FC<FeedPropType> = ({ refreshFeed }) => {
  const { loading, data, refetch } = useQuery(GET_LINKS);

  let content = <div>Loading...</div>;

  if (loading) {
    content = <p>Loading...</p>;
  }
  if (data) {
    // data.links.sort((a: any, b: any) => b.id - a.id); will cause error as we will directly mutate the data
    const feedList = [...data.links].sort((a: any, b: any) => b.id - a.id);
    content = <LinksContainer links={feedList} />;
  }

  // trigger a re-render everytime user posts something
  useEffect(() => {
    refetch();
  }, [refreshFeed, refetch]);

  return <div className="feed-container">{content}</div>;
};

export default Feed;
