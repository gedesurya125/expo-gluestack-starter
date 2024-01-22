import { Box, Center, FlatList, Text, useToken } from '@gluestack-ui/themed';
import { useLocalSearchParams } from 'expo-router';
import StyledKeyBoardAdwareScrollView from '../../components/StyledKeyBoardAdwareScrollView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { productData } from '../../data/productData';
import { ProductCard } from '../../components/ProductCard';

export default function ProductDetail() {
  const { slug } = useLocalSearchParams();

  const productDetailData = productData.find((data) => data.slug === slug);

  return (
    <StyledKeyBoardAdwareScrollView>
      <ProductImage />
      <Text
        sx={{
          mt: '$4',
          fontSize: '$md',
        }}
      >
        {productDetailData?.description}
      </Text>
      <OtherProductOption />
    </StyledKeyBoardAdwareScrollView>
  );
}

const ProductImage = () => {
  return (
    <Box
      sx={{
        height: '$80',
        backgroundColor: '$amber100',
        borderRadius: '$md',
      }}
    ></Box>
  );
};

const OtherProductOption = () => {
  return (
    <FlatList
      horizontal
      data={productData}
      contentContainerStyle={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 10,
      }}
      sx={{
        mt: '$10',
      }}
      renderItem={({ item, index }) => (
        <ProductCard
          data={item}
          sx={{
            width: '$40',
          }}
        />
      )}
    />
  );
};
