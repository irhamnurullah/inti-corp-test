import React, { useState } from 'react';
import FormAddData from '../../components/form';
import axios from 'axios';
import { Button } from 'antd';
import { useRouter } from 'next/router';

export default function Add() {
  const router = useRouter();
  const [field, setField] = useState({
    title: '',
    body: '',
    userId: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}`, field, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      console.log(response?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Button className="mb-4" onClick={() => router.push('/')}>
        Back
      </Button>
      <FormAddData handleSubmit={handleSubmit} field={field} setField={setField} />
    </div>
  );
}
