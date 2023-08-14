import React, { useEffect, useState } from "react";
import { Button } from "../../../components/button";
import { Field } from "../../../components/field";
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
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { useAuth } from "../../../contexts/auth-context";
import { toast } from "react-toastify";

const PostAddNew = () => {
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      categoryId: "",
      image: "",
      featured: "",
    },
  });
  const { userInfo } = useAuth();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { handleSelectImage, image, progress, handleDeleteImage } =
    useFirebaseImage(setValue, getValues);

  const handleClickOption = (item) => {
    setValue("categoryId", item.id); //for form submit
    setSelectedCategory(item); //for Dropdown.Select
  };

  useEffect(() => {
    const getData = async () => {
      const colref = collection(db, "categories");

      const q = query(colref, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
      // console.log(result);
    };
    getData();
  }, []);

  const watchStatus = watch("status");
  const watchFeatured = watch("featured");
  // const watchCategory = watch("category");

  const addPostHandler = async (values) => {
    const cloneValues = { ...values };
    cloneValues.slug = slugify(values.slug || values.title, { lower: true });
    cloneValues.status = Number(cloneValues.status);
    const colRef = collection(db, "posts");
    await addDoc(colRef, {
      ...cloneValues,
      image,
      userId: userInfo.uid,
    });
    toast.success("Create new post successfully");
    console.log(cloneValues);
    reset({
      title: "",
      slug: "",
      status: 2,
      categoryId: "",
      image: "",
      featured: "",
    });
  };
  return (
    <div>
      <h1 className="heading-2 text-gradient mb-8">Add new post</h1>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
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
        <div className="grid grid-cols-2 gap-x-10 mb-10">
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
              <span className="inline-block p-3 rounded-full bg-green-100 w-fit meta text-[var(--inactive)] border boder-[var(--border-inactive)]">
                {selectedCategory.name}
              </span>
            )}
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Status</Label>
            <div className="flex items-start gap-x-5 h-full">
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
            </div>
          </Field>
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
        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </div>
  );
};

export default PostAddNew;
