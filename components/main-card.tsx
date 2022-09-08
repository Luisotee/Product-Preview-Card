import { Badge, Card, Grid, Group, Image, Text } from '@mantine/core';
import { ImageComponent } from './image-component';
import { useMediaQuery } from '@mantine/hooks';
import { Description } from './product-detail';

export function MainCard() {
  const matches = useMediaQuery('(min-width: 600px)');
  return (
    <Card
      style={
        matches
          ? {
              fontFamily: 'Montserrat, sans-serif',
              maxWidth: '600px',
              maxHeight: '880px',
            }
          : {
              fontFamily: 'Montserrat, sans-serif',
              maxWidth: '375px',
              maxHeight: '100%',
            }
      }
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
