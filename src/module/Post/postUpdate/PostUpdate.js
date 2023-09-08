import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../../../components/button";
import { Field, FieldCheckboxes } from "../../../components/field";
import { Input } from "../../../components/input";
import { Label } from "../../../components/label";
import { useForm } from "react-hook-form";
import { Radio } from "../../../components/checkbox";
import { Dropdown } from "../../../components/dropdown";
import slugify from "slugify";
import { postStatus } from "../../../utils/constants";
import ImageUpload from "../../../components/image/ImageUpload";
import useFirebaseImage from "../../../hooks/useFirebaseImage";
import Toggle from "../../../components/toggle/Toggle";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import {
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { toast } from "react-toastify";
import Description from "../../../components/description/Description";
import DashboardHeading from "../../dashboard/DashboardHeading";
import { useSearchParams } from "react-router-dom";
import { imgbbAPI } from "../../../config/apiConfig";
if (!Quill.imports["modules/ImageUploader"]) {
  Quill.register("modules/ImageUploader", ImageUploader);
}
const PostUpdate = () => {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const imageUrl = getValues("image");
  const imageName = getValues("image_name");
  const deleteImage = async () => {
    const docRef = doc(db, "posts", postId);
    await updateDoc(docRef, {
      image: "",
    });
  };
  const {
    handleSelectImage,
    image,
    progress,
    setImage,
    handleDeleteImage,
    setProgress,
  } = useFirebaseImage(setValue, getValues, imageName, deleteImage);

  const [param] = useSearchParams();
  const postId = param.get("id");
  const watchStatus = watch("status");
  const watchFeatured = watch("featured");

  const handleClickOption = async (item) => {
    const docRef = doc(db, "categories", item.id);
    const docData = await getDoc(docRef);
    setValue("category", { id: docData.id, ...docData.data() });

    // console.log(categoryDetails);
    setSelectedCategory(item); //for Dropdown.Select
  };
  useEffect(() => {
    setImage(imageUrl);
  }, [setImage, imageUrl]);
  useEffect(() => {
    document.title = "Update post";
  });

  useEffect(() => {
    async function fetchData() {
      if (!postId) return;
      const docRef = doc(db, "posts", postId);
      const docData = await getDoc(docRef);
      if (docData) {
        reset(docData.data());
        setSelectedCategory(docData.data()?.category || "");
        setContent(docData.data()?.content || "");
      }
    }
    fetchData();
  }, [postId, reset]);

  useEffect(() => {
    const getData = async () => {
      const colref = collection(db, "categories");

      const q = query(colref, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          createdAt: serverTimestamp(),
          ...doc.data(),
        });
      });
      setCategories(result);
    };
    getData();
  }, []);

  const updatePostHandler = async (values) => {
    if (!isValid) return;
    setLoading(true);
    try {
      values.slug = slugify(values.slug || values.title, { lower: true });
      values.status = Number(values.status);
      console.log(values);
      const docRef = doc(db, "posts", postId);
      await updateDoc(docRef, {
        ...values,
        content,
        image,
      });
      toast.success("Update post successfully");
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      ImageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  if (!postId) return;
  return (
    <div>
      <DashboardHeading>Post Update</DashboardHeading>
      <form onSubmit={handleSubmit(updatePostHandler)}>
        <div className="form-layout">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
              required
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              image={image}
              onChange={handleSelectImage}
              progress={progress}
              handleDeleteImage={handleDeleteImage}
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Description</Label>
            <Description
              control={control}
              placeholder="Enter your post description"
              name="description"
              className="min-h-[200px] max-h-[240px] text-top-left"
            ></Description>
          </Field>
        </div>
        <div className="mb-10">
          <Field>
            <Label>Content</Label>
            <div className="w-full">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
              />
            </div>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </FieldCheckboxes>
          </Field>
          <Field>
            <Label>Category</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select category"></Dropdown.Select>
              <Dropdown.List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Dropdown.Option
                      key={item.id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
            {selectedCategory.name && (
              <span className="inline-block p-3 rounded-full bg-green-50 w-fit meta text-green-700 border boder-[var(--border-inactive)]">
                {selectedCategory?.name}
              </span>
            )}
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Featured Post</Label>
            <Toggle
              on={watchFeatured === true}
              onClick={() => {
                setValue("featured", !watchFeatured);
              }}
            ></Toggle>
          </Field>
        </div>
        <Button
          type="submit"
          className="mx-auto"
          isLoading={loading}
          disabled={loading}
        >
          Update post
        </Button>
      </form>
    </div>
  );
};

export default PostUpdate;
