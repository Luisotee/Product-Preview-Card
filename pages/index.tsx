import { Group, Text } from '@mantine/core';
import type { NextPage } from 'next';
import { MainCard } from '../components/main-card';

const Home: NextPage = () => {
  return (
    <>
      <Group
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '98vh',
        }}
      >
        <Group>
          <MainCard />
        </Group>
      </Group>
    </>
  );
};

export default Home;
