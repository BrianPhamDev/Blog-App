import React from "react";
import PostSideStories from "../../module/Post/PostSideStories/PostSideStories";
import PostMeta from "../../module/Post/postMeta/PostMeta";
import Layout from "../../components/layout/Layout";
import PostImage from "../../module/Post/postImage/PostImage";
import PostBodyCopy from "../../module/Post/PostBodyCopy/PostBodyCopy";

const BannerPage = () => {
  return (
    <div className="container">
      <Layout>
        <main className="post-wrapper mt-[32px]">
          <div className="post-grid">
            <div className="post-heading mb-8">
              <h1 className="post-title heading-1 ">
                Cyrene Oenobeer Packaging Captures The Essence Of The Beer-Wine
                Blend
              </h1>
              <PostMeta category="BEER & MALT"></PostMeta>
            </div>
          </div>
          <div className="post-grid gap-[32px]">
            <div className="post-content">
              <div className="post-thumb">
                <PostImage
                  url="https://ucarecdn.com/da74bb60-38be-4b81-91a1-c64c3384b6a0/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
                  alt="Jell-O New Branding"
                  className=" overflow-hidden rounded-lg mb-16"
                ></PostImage>
              </div>
              <div className="post-main-content">
                <PostBodyCopy>
                  AG Design Agency's packaging for Cyrene Oenobeer encapsulates
                  the essence of this unique beer-wine blend. The design
                  reflects the three key features of CYRENE: the single vineyard
                  Assyrtiko wine from Santorini, the blend of bottom-fermented
                  beer with the Assyrtiko wine, and the second fermentation in
                  the bottle. Including harmonious vine leaves and hops in the
                  key visual, printed in elegant copper foil on premium paper,
                  grasps the intense and extroverted character of this special
                  Oenobeer. Additionally, the historical and cultural
                  significance of the name "Cyrene" and its ties to Santorini,
                  as well as the emphasis on Terroir and its influence on the
                  beer and wine's sensory attributes, add depth and authenticity
                  to the packaging design.
                </PostBodyCopy>
                <PostImage url="https://ucarecdn.com/321222ac-b399-423f-a645-1671eb1d2260/image.jpg"></PostImage>
              </div>
              <PostBodyCopy>
                An unexpected Brew This unique beer-wine blend belongs to the
                category of Oenobeers. C?RENE reflects 3 combined features: a
                single vineyard Assyrtiko wine from Santorini, the blend of the
                bottom-fermented beer with the Assyrtiko wine, and the 2nd
                fermentation of both in the bottle. Slightly cloudy with a pale
                lemon color and golden highlights. Intense & extrovert aromas of
                sweet Rosaceae fruits like quince and citrus fruits like
                tangerine supported by elements of fresh cake dough deriving
                from the malty but medium-bodied Lager.
              </PostBodyCopy>
              <PostBodyCopy>
                Dry with high refreshing acidity, slightly tannic texture,
                mineral backbone and low refreshing aftertaste. Santorini
                Kouloura A unique way of vine pruning, the Santorini “kouloura”,
                ensures that the yield is in no danger of being compromised and
                the vines weather out the adverse Santorini soil and climatic
                conditions. The origin of this way of training vines is lost
                down in the passage of time and has been perfected to such an
                extent that, apart from being the most suitable way of training
                them, it also gives vines the appearance of natural works of
                art.
              </PostBodyCopy>
              <PostImage
                url="https://ucarecdn.com/fbaa520d-d993-438e-a822-01c42ad96a64/image.jpg"
                className="my-16"
              ></PostImage>
              <PostImage
                url="https://ucarecdn.com/5cc03206-69d6-4a22-95a6-ec41f7daad34/image.jpg"
                className="mb-16"
              ></PostImage>
              <PostImage
                url="https://ucarecdn.com/90c2ae5d-e970-4675-8c06-138affded347/image.jpg"
                className="mb-16"
              ></PostImage>
              <PostImage
                url="https://ucarecdn.com/f86f4d33-b603-4c97-be2c-49346d27af31/image.jpg"
                className="mb-16"
              ></PostImage>
              <PostImage
                url="https://ucarecdn.com/1fa57ad1-3013-4ecb-92fc-0f352e8935b3/image.jpg"
                className="mb-16"
              ></PostImage>
            </div>
            <div className="post-side-content">
              <PostSideStories></PostSideStories>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default BannerPage;
