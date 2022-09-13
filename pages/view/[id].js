import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default function Detail() {
  const [details, setDetails] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getDetail();
    }
  }, [id]);

  async function getDetail() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/${id}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response?.data;
    setDetails(result);
  }

  return (
    <div>
      <Button className="mb-4" onClick={() => router.push('/')}>
        Back
      </Button>
      <p>halaman detail {id}</p>
      <p>title : {details.title}</p>
      <p>body : {details.body}</p>
    </div>
  );
}
