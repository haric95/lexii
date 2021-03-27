import { Button, Input } from "antd";
import React from "react";

export const ImageInput: React.FC = () => {
  return (
    <div className="">
      <label>
        <Button>Upload an image</Button>
      </label>
      <Input type="file" />
    </div>
  );
};
