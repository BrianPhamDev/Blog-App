import React from "react";
import Layout from "../../components/layout/Layout";
import PostMeta from "./postMeta/PostMeta";

const PostDetailsPage = () => {
  return (
    <div className="container">
      <Layout>
        <div className="post-wrapper">
          <h1 className="post-heading heading-1">
            BrandOpus Gives Jell-O Its First Redesign In A Decade
          </h1>
          <PostMeta></PostMeta>
        </div>
      </Layout>
    </div>
  );
};

export default PostDetailsPage;
