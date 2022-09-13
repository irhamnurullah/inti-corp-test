import React, { useState } from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
const { TextArea } = Input;

export default function FormAddData({ handleSubmit, field, setField }) {
  const handleChange = (e) => {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card-input">
          <div className="mb-4">
            <label>Title</label>
            <Input placeholder="title" name="title" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label>Body</label>
            <TextArea rows={4} placeholder="body" name="body" onChange={handleChange} />
          </div>
          <Button htmlType="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
