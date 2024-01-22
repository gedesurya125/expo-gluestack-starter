import React from 'react';
import {
  Box,
  VStack,
  Image,
  Center,
  ButtonText,
  Text,
  Heading,
} from '@gluestack-ui/themed';
import { productData } from '../../data/productData';
import StyledKeyBoardAdwareScrollView from '../../components/StyledKeyBoardAdwareScrollView';
import { ProductCard } from '../../components/ProductCard';
import ExpoLinearGradient from '../../components/ExpoLinearGradient';

export default function SplashScreen() {
  // todo Implement the color mode if we use the light style
  // const colorMode = useColorMode();

  return (
    // Wrapper component includes the <GluestackUIProvider></GluestackUIProvider>
    // place GluestackUIProvider in your app root accordingly
    // remove Wrapper tag from here in your codebase
    // <View>
    <StyledKeyBoardAdwareScrollView>
      <IntroBanner />
      <GraphContainer
        text="Self Achievement Graph"
        sx={{
          mt: '$6',
        }}
      />
      <GraphContainer
        text="Team Achievement Graph"
        sx={{
          mt: '$3',
        }}
      />
      <GraphContainer
        text="Target Graph"
        sx={{
          mt: '$3',
        }}
      />
      <ProductCardContainer title="Recommended Products" />
      <ProductCardContainer title="New Product" />
    </StyledKeyBoardAdwareScrollView>
  );
}

const IntroBanner = () => {
  return (
    <ExpoLinearGradient
      colors={['$darkBlue800', '$darkBlue600']}
      sx={{
        pt: '$8',
        pb: '$6',
        px: '$6',
        borderRadius: '$md',
      }}
    >
      <Text
        sx={{
          fontSize: '$2xl',
        }}
      >
        Hi, you are doing great !!!
      </Text>
      <Text
        sx={{
          mt: '$3',
        }}
      >
        Your current progress is: $100.293,00
      </Text>
    </ExpoLinearGradient>
  );
};

const GraphContainer = ({ text, sx }: { text: string; sx?: any }) => {
  return (
    <Center
      sx={{
        height: '$40',
        backgroundColor: '$amber500',
        borderRadius: '$md',
        ...sx,
      }}
    >
      <Text>{text}</Text>
    </Center>
  );
};

const ProductCardContainer = ({ title, sx }: { title: string; sx?: {} }) => {
  return (
    <Box
      sx={{
        mt: '$10',
        ...sx,
      }}
    >
      <Heading>{title}</Heading>
      <Box
        sx={{
          width: '$full',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: '$4',
          mt: '$3',
        }}
      >
        {productData.map((data, index) => {
          return <ProductCard key={index} data={data} />;
        })}
      </Box>
    </Box>
  );
};
