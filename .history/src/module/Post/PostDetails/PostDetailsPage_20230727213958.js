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
            <div className="post-heading mb-8 px-4">
              <h1 className="post-title heading-1 ">
                BrandOpus Gives Jell-O Its First Redesign In A Decade
              </h1>
              <PostMeta></PostMeta>
            </div>
            <div className="post-content">
              <PostImage
                url="https://ucarecdn.com/77d9ec0f-0866-47ff-b7d7-2278c26c7ae5/-/crop/1920x1079/0,0/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
                alt="Jell-O New Branding"
                className=" overflow-hidden rounded-lg mb-16"
              ></PostImage>
              <div className="post-main-content">
                <PostBodyCopy>
                  Kraft Heinz’s Jell-O is one of the most popular brands of
                  dessert gelatin and pudding, sold in easy-to-make powders and
                  ready-to-eat cups. First introduced in 1845, Jell-O has had
                  ebbs in flows in popularity, the height of which you can
                  witness at the 70s Dinner Party Instagram with its many, many
                  aspics. But the brand’s powdered mixes are versatile enough to
                  adapt to new generations of home cooks and endure as a
                  cherished family favorite.
                </PostBodyCopy>
                <PostBodyCopy>
                  After a decade, Kraft Heinz felt it was time to give Jell-O a
                  brand refresh, turning to the folks at BrandOpus to remind
                  everyone it’s “America’s Most Famous Dessert,” including a new
                  generation of consumers.
                </PostBodyCopy>
                <PostImage
                  url="https://ucarecdn.com/4974387d-8de3-4659-b579-f501d83cacb8/"
                  alt="Jell-O New Branding"
                  className="overflow-hidden rounded-lg my-16"
                ></PostImage>
                <PostBodyCopy>
                  BrandOpus gives Jell-O a new logo with a bold, playful
                  typeface with a deep, white drop shadow. Now, it's flattened
                  and minimized, and the “O” is slightly lifted, a subtle way to
                  bring more attention to the letter. The color palette gets a
                  modernized facelift, and the gradient replaced with solid
                  colors in the background. You'll also find fewer nutritional
                  callouts on the front, and Jell-O has replaced “sugar-free”
                  with the more commonly used phrase “zero sugar.” Meanwhile,
                  new fruit illustrations have a jiggly look, adding more fun to
                  the new visual identity.
                </PostBodyCopy>
                <PostImage
                  url="https://ucarecdn.com/6d4b1a92-46a6-4ec5-be13-944ae5fae90d/"
                  alt="Jell-O New Branding"
                  className=" overflow-hidden rounded-lg my-16"
                ></PostImage>
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
                <PostImage
                  url="https://ucarecdn.com/e7891181-29a0-42f5-989b-36aead310ac8/"
                  alt="Jell-O New Branding"
                  className=" overflow-hidden rounded-lg my-16"
                ></PostImage>
                <PostImage
                  url="https://ucarecdn.com/a53098a0-f8d0-4a3e-bc66-2b36d3594101/"
                  alt="Jell-O New Branding"
                  className=" overflow-hidden rounded-lg"
                ></PostImage>
                <PostBodyCopy className="my-16">
                  Jell-O’s refresh is one of 18 Kraft Heinz brands that have
                  undergone brand refreshes over the past three years, including
                  Oscar Mayer, Kraft Mac & Cheese, and Kraft Singles.
                </PostBodyCopy>
                <PostImage
                  url="https://ucarecdn.com/89e643e9-f413-4150-afc2-a6ecb3d967d1/"
                  alt="Jell-O New Branding"
                  className=" overflow-hidden rounded-lg mt-16"
                ></PostImage>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default PostDetailsPage;
