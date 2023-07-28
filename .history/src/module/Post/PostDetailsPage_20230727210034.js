import React from "react";
import Layout from "../../components/layout/Layout";
import PostMeta from "./postMeta/PostMeta";

const PostDetailsPage = () => {
  return (
    <div className="container">
      <Layout>
        <div className="details-wrapper">
          <PostMeta></PostMeta>
        </div>
      </Layout>
    </div>
  );
};

export default PostDetailsPage;
