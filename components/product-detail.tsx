import { Button, Grid, Group, Image, Text, Title } from '@mantine/core';

export function Description() {
  return (
    <Group ml="lg">
      <Text
        style={{
          letterSpacing: '8px',
          fontSize: '10px',
          fontFamily: 'Montserrat',
          fontWeight: '400',
        }}
        mt="lg"
      >
        PERFUME
      </Text>
      <Title
        style={{
          fontFamily: 'Fraunces',
        }}
        order={1}
        align="left"
      >
        Gabrielle Essence Eau <br />
        De Parfum
      </Title>
      <Text color="hsl(228, 12%, 48%)" size="md">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </Text>
      <Grid align="center">
        <Grid.Col span={6}>
          <Text
            size={30}
            weight={500}
            color="teal"
            style={{
              fontFamily: 'Fraunces',
            }}
          >
            $149.99
          </Text>
        </Grid.Col>
        <Grid.Col span={4} ml="xl">
          <Text style={{ textDecoration: 'line-through' }}>$169.99</Text>
        </Grid.Col>
      </Grid>
      <Button
        style={{
          width: '240px',
          height: '45px',
          fontFamily: 'Montserrat',
          fontWeight: '700',
          color: 'white',
        }}
        color="teal"
        radius="md"
      >
        <Image src="icon-cart.svg" p="sm" />
        Add to Cart
      </Button>
    </Group>
  );
}
