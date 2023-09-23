import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import PostMeta from "../postMeta/PostMeta";
import PostImage from "../postImage/PostImage";
import "./postDetailsPage.scss";
import PostBodyCopy from "../PostBodyCopy/PostBodyCopy";
import PostSideStories from "../PostSideStories/PostSideStories";
import NotFoundPage from "../../../pages/notFoundPage/NotFoundPage";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
const PostDetailsPage = () => {
  const { slug } = useParams();
  const [postInfo, setPostInfo] = useState({});
  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      const colRef = query(collection(db, "posts"), where("slug", "==", slug));
      onSnapshot(colRef, (snapshot) => {
        snapshot.forEach((doc) => {
          doc.data() && setPostInfo(doc.data());
        });
      });
    }
    fetchData();
  }, [slug]);
  if (!slug) return <NotFoundPage></NotFoundPage>;
  if (!postInfo.title) return null;
  return (
    <div className="container">
      <Layout>
        <main className="post-wrapper mt-[32px]">
          <div className="post-grid">
            <div className="post-heading mb-8">
              <h1 className="post-title heading-1 ">{postInfo.title}</h1>
              <PostMeta category={postInfo.category.name}></PostMeta>
            </div>
          </div>
          <div className="post-grid gap-[32px]">
            <div className="post-content">
              <div className="post-thumb">
                <PostImage
                  url={postInfo.image}
                  alt="Jell-O New Branding"
                  className=" overflow-hidden rounded-lg mb-16"
                ></PostImage>
              </div>
              <div className="post-main-content">
                <div className="">{parse(postInfo.content) || ""}</div>
              </div>
              <div className="py-6"></div>
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

export default PostDetailsPage;
