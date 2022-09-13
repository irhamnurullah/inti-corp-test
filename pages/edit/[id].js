import React, { useState } from 'react';
import { useRouter } from 'next/router';
import FormAddData from '../../components/form';
import axios from 'axios';
import { Button } from 'antd';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [field, setField] = useState({
    title: '',
    body: '',
    userId: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_URL}/${id}`, field, {
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
      <p>halaman detail {id}</p>
      <FormAddData handleSubmit={handleSubmit} field={field} setField={setField} />
    </div>
  );
}
