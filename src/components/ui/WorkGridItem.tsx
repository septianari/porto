'use client';

import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: string;
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          // placeholder="blur"
          borderRadius="lg"
          mb={2}
          fallbackSrc="https://via.placeholder.com/300x200?text=Project+Thumbnail"
        />
        <LinkOverlay href={id} target="_blank">
          <Text mt={2} fontSize={20} fontWeight="bold">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </motion.div>
    </LinkBox>
  </Box>
);
