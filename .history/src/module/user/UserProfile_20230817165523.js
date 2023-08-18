import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field, FieldCheckboxes } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Radio } from "../../components/checkbox";
import { Button } from "../../components/button";
import ImageUpload from "../../components/image/ImageUpload";
const UserProfile = () => {
  const { control } = useForm({
    mode: "onChange",
  });
  return <div></div>;
};

export default UserProfile;
