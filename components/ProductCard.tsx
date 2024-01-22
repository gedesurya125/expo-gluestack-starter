import React from 'react';

import { Pressable, Box } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { Text } from '@gluestack-ui/themed';

export const ProductCard = ({ data, sx }: { data: any; sx?: any }) => {
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: '/product/[slug]',
          params: {
            slug: data?.slug,
          },
        });
      }}
      sx={{
        minHeight: '$56',
        width: '48%',
        backgroundColor: '$amber200',
        borderRadius: '$md',
        p: '$1',
        ...sx,
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
      <Box
        sx={{
          mt: '$1',
          px: '$2',
        }}
      >
        <TextBlock text={data?.name} />
        <TextBlock
          sx={{
            width: '80%',
          }}
        />
      </Box>
    </Pressable>
  );
};

const TextBlock = ({ text, sx }: { sx?: {}; text?: string }) => {
  return (
    <Text
      sx={{
        width: '100%',
        // backgroundColor: '$coolGray100',
        color: '$darkBlue800',
        ...sx,
      }}
    >
      {text || 'sample text'}
    </Text>
  );
};
