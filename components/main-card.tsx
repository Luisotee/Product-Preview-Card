import { Badge, Card, Grid, Group, Image, Text } from '@mantine/core';
import { ImageComponent } from './image-component';
import { Description } from './product-detail';

export function MainCard() {
  return (
    <Card
      style={{
        fontFamily: 'Montserrat, sans-serif',
        maxWidth: '600px',
        maxHeight: '880px',
      }}
      p={0}
      radius="lg"
      withBorder
    >
      <Grid grow gutter="xs">
        <Grid.Col span={2}>
          <ImageComponent />
        </Grid.Col>
        <Grid.Col span={2}>
          <Group>
            <Description />
          </Group>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
