import React from "react";
import Layout from "../../../components/layout/Layout";
import PostMeta from "../postMeta/PostMeta";
import PostImage from "../postImage/PostImage";
import "./postDetailsPage.scss";
import PostBodyCopy from "../PostBodyCopy/PostBodyCopy";
const PostDetailsPage = () => {
  return (
    <div className="container">
      <Layout>
        <main className="post-wrapper mt-[32px]">
          <div className="post-1">
            <div className="post-heading mb-5 px-4">
              <h1 className="post-title heading-1 ">
                BrandOpus Gives Jell-O Its First Redesign In A Decade
              </h1>
              <PostMeta></PostMeta>
            </div>
            <div className="post-content">
              <PostImage
                url="https://ucarecdn.com/77d9ec0f-0866-47ff-b7d7-2278c26c7ae5/-/crop/1920x1079/0,0/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
                alt="Jell-O New Branding"
                className=" overflow-hidden rounded-lg"
              ></PostImage>
              <div className="post-main-content">
                <PostBodyCopy>
                  “With the Jell-O renovation, we’re bringing back the jiggly
                  fun and harnessing the wonder that the brand brings to adults
                  and kids alike,” said Rebecca Williams, creative director at
                  BrandOpus, in a press release. “Working with the team at Kraft
                  Heinz, we’ve loved taking on the task of reimagining and
                  reinvigorating the brand for the next generation of parents by
                  creating an imaginative and playful brand world that invites
                  them to see their every day in inspiringly wonderful ways.
                  We’re excited for the possibilities that the new equities and
                  iconic logo will unlock for the brand to propel it into the
                  future.”
                </PostBodyCopy>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default PostDetailsPage;
