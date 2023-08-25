import React from "react";
import { Button } from "../../components/button";
import DashboardHeading from "../dashboard/DashboardHeading";

const UserUpdate = () => {
  return (
    <div>
      <DashboardHeading>Update category</DashboardHeading>
      <h3 className="mb-8">
        Category id: <span className="font-semibold">{categoryId}</span>
      </h3>
      <form onSubmit={handleSubmit(handleUpdateCategory)}>
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input
              control={control}
              placeholder="Enter your category name"
              name="name"
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
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                value={categoryStatus.APPROVED}
                checked={watchStatus === categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                value={categoryStatus.REJECTED}
                checked={watchStatus === categoryStatus.REJECTED}
              >
                Not Approved
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
          Update category
        </Button>
      </form>
    </div>
  );
};

export default UserUpdate;
