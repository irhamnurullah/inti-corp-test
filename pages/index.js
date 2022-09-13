import React from 'react';
import 'antd/dist/antd.css';
import { Button, Typography } from 'antd';
import ListData from '../components/table';
import { useRouter } from 'next/router';

export default function App() {
  const { Title } = Typography;
  const router = useRouter();

  return (
    <div>
      <Title level={3}>Blog Post</Title>
      <br />
      <br />
      <Button onClick={() => router.push('/add')}>Tambah Data</Button>
      <br />
      <div>
        <ListData />
      </div>
    </div>
  );
}
