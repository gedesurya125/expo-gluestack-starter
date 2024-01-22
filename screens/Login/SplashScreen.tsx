import React from 'react';
import {
  Box,
  VStack,
  Button,
  Image,
  Center,
  ButtonText,
  Text,
  View,
  useToken,
  useColorMode,
  Icon,
  MenuIcon,
} from '@gluestack-ui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { productData } from '../../data/productData';

export default function SplashScreen() {
  const darkBlue300 = useToken('colors', 'darkBlue800');
  // todo Implement the color mode if we use the light style
  // const colorMode = useColorMode();

  return (
    // Wrapper component includes the <GluestackUIProvider></GluestackUIProvider>
    // place GluestackUIProvider in your app root accordingly
    // remove Wrapper tag from here in your codebase
    // <View>
    <SafeAreaView>
      {/* <Box
        sx={{
          height: '$full',
        }}
      > */}
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: darkBlue300,
          minHeight: '100%',
        }}
      >
        <NavigationBar />
        <Box
          w="$full"
          flex={1}
          sx={{
            justifyContent: 'flex-start',
            p: '$4',
            py: '$6',
          }}
        >
          <InfoBanner />
          <ProductCardContainer />
          <Text sx={{}}>Hello</Text>
        </Box>
      </KeyboardAwareScrollView>
      {/* </Box> */}
    </SafeAreaView>
  );
}

const NavigationBar = () => {
  return (
    <Box
      sx={{
        bg: '$amber500',
        minHeight: '$12',
        width: '$full',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: '$2',
      }}
    >
      <Text>Super Company</Text>
      <Avatar />
      <Button
        size="sm"
        sx={{
          backgroundColor: 'transparent',
          px: '$3',
          py: '$0',
        }}
      >
        <Icon as={MenuIcon} m="$0" w="$6" h="$6" color="$amber100" />
      </Button>
    </Box>
  );
};

const Avatar = () => {
  return (
    <Box
      sx={{
        width: '$10',
        height: '$10',
        borderRadius: '$full',
        backgroundColor: '$amber100',
      }}
    ></Box>
  );
};

const InfoBanner = () => {
  return (
    <Center
      sx={{
        height: '$40',
        backgroundColor: '$amber500',
        borderRadius: '$md',
      }}
    >
      <Text>Achievement</Text>
    </Center>
  );
};

const ProductCardContainer = () => {
  return (
    <Box
      sx={{
        width: '$full',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '$6',
        justifyContent: 'space-between',
        rowGap: '$4',
      }}
    >
      {productData.map((data, index) => {
        return <ProductCard key={index} data={data} />;
      })}
    </Box>
  );
};
const ProductCard = ({ data }) => {
  return (
    <Box
      sx={{
        minHeight: '$56',
        width: '48%',
        backgroundColor: '$amber200',
        borderRadius: '$md',
        p: '$1',
      }}
    >
      <Box
        sx={{
          width: '$full',
          height: '$40',
          backgroundColor: '$amber100',
          borderRadius: '$md',
        }}
      ></Box>
      <TextBlock />
      <TextBlock
        sx={{
          width: '80%',
        }}
      />
    </Box>
  );
};

const TextBlock = ({ sx }: { sx?: {} }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '$4',
        backgroundColor: '$coolGray100',
        mt: '$2',
        ...sx,
      }}
    ></Box>
  );
};
