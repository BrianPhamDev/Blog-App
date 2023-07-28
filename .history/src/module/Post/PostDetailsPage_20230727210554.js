import React from "react";
import Layout from "../../components/layout/Layout";
import PostMeta from "./postMeta/PostMeta";

const PostDetailsPage = () => {
  return (
    <div className="container">
      <Layout>
        <main className="post-wrapper">
          <div className="post-heading px-4">
            <h1 className="post-heading heading-1 ">
              BrandOpus Gives Jell-O Its First Redesign In A Decade
            </h1>
            <PostMeta></PostMeta>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default PostDetailsPage;
