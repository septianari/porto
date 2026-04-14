'use client';

import NextLink from 'next/link';
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NAV_LINKS = [
  { href: '/', label: 'About' },
  { href: '/works', label: 'Works' },
];

function NavItem({
  href,
  label,
  hoverColor,
}: {
  href: string;
  label: string;
  hoverColor: string;
}) {
  return (
    <Link
      as={NextLink}
      href={href}
      px={2}
      py={1}
      fontWeight="medium"
      borderRadius="md"
      _hover={{ color: hoverColor, textDecoration: 'none' }}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('rgba(255, 255, 255, 0.85)', 'rgba(26, 32, 44, 0.85)');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverColor = useColorModeValue('teal.600', 'teal.200');

  return (
    <Box
      as="header"
      position="fixed"
      w="full"
      zIndex={20}
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <Flex
        maxW="container.md"
        mx="auto"
        px={4}
        py={3}
        align="center"
        gap={4}
      >
        <Link
          as={NextLink}
          href="/"
          _hover={{ textDecoration: 'none', color: hoverColor }}
        >
          <Heading size="md" letterSpacing="tight">
            AW. Septian
          </Heading>
        </Link>

        <HStack as="nav" spacing={4} ml="auto" align="center">
          {NAV_LINKS.map((item) => (
            <NavItem key={item.href} {...item} hoverColor={hoverColor} />
          ))}
          <IconButton
            aria-label="Toggle color mode"
            size="sm"
            variant="ghost"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Box>
  );
}
