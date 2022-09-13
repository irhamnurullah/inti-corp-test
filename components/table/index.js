import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function ListData() {
  const router = useRouter();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = response?.data;
    setPosts(
      result.map((post) => {
        return {
          title: post.title,
          body: post.body,
          id: post.id,
        };
      })
    );
  }

  const handleDelete = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_URL}/${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: ({ id }) => {
        return (
          <Space size={'middle'}>
            <Button onClick={() => router.push(`/view/${id}`)}>view</Button>
            <Button onClick={() => router.push(`/edit/${id}`)}>edit</Button>
            <Button onClick={() => handleDelete(id)}>delete</Button>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Table dataSource={posts} columns={columns} rowKey={posts?.id} />;
    </div>
  );
}
