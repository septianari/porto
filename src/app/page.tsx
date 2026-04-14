'use client';

import type { ReactNode } from 'react';

import {
  Container,
  Box,
  Heading,
  Text,
  Avatar,
  useColorModeValue,
  Link,
  Button,
  VStack,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Navbar from '@/components/layouts/Navbar';
import Section from '@/components/ui/Section';

const BioSection = ({ year, children }: { year: string; children: ReactNode }) => (
  <Box display="flex" mb={2}>
    <Text fontWeight="bold" mr={4} minW="135px">
      {year}
    </Text>
    <Box flex={1}>{children}</Box>
  </Box>
);

import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const LinkButton = ({ 
  label, 
  href, 
  icon 
}: { 
  label: string; 
  href: string; 
  icon?: React.ReactElement 
}) => {
  const bg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100');
  const hoverBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.300');
  const borderColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.300');

  return (
    <MotionBox
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      w="full"
    >
      <Link
        href={href}
        isExternal
        style={{ textDecoration: 'none' }}
        w="full"
        display="block"
      >
        <Box
          px={4}
          py={3}
          bg={bg}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="xl"
          fontSize="md"
          fontWeight="bold"
          backdropFilter="blur(10px)"
          transition="all 0.2s"
          _hover={{
            bg: hoverBg,
            borderColor: 'teal.400',
          }}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          {icon && (
            <Box mr={4}>
              {icon}
            </Box>
          )}
          {label}
        </Box>
      </Link>
    </MotionBox>
  );
};

import React, { useState } from 'react';
import SplashScreen from '@/components/ui/SplashScreen';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const avatarSrc = `${assetPrefix}/photo.png`;

  return (
    <>
      <SplashScreen onComplete={() => setIsLoaded(true)} />
      <Box 
        as="main" 
        pb={8}
        opacity={isLoaded ? 1 : 0}
        visibility={isLoaded ? 'visible' : 'hidden'}
        transition="opacity 1s ease-in-out"
      >
        <Navbar />
        
        <Container maxW="container.md" pt={20}>
        {/* To enable the 3D hero section, import ThreeBackground from '@/components/ui/ThreeBackground' and render it here. */}

        <Section delay={0.1}>
          {/* <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            textAlign="center"
            css={{ backdropFilter: 'blur(10px)' }}
          >
            &apos; Hello World! &apos;
          </Box> */}

          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Septian Ari Wibowo
              </Heading>
              <p>Engineer / Programmer </p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <Avatar
                  src={avatarSrc}
                  name="Septian Ari Wibowo"
                  size="full"
                  bg="transparent"
                  ignoreFallback
                  sx={{
                    img: {
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Section>

        <Section delay={0.2}>
          {/* <Heading as="h3" variant="section-title">
            Work
          </Heading> */}
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            textAlign="justify"
            textIndent="1em"
            css={{ backdropFilter: 'blur(10px)' }}
          >
            Septian adalah seorang programmer dengan latar belakang pendidikan Teknik Informatika dari Universitas Muhammadiyah Purwokerto (UMP). Ia memiliki pengalaman dalam pengembangan perangkat lunak serta pengelolaan sistem informasi, khususnya dalam mendukung kebutuhan operasional di lingkungan kesehatan.
            <br></br>Ia memiliki minat yang kuat dalam pengembangan aplikasi dan manajemen sistem, serta berfokus pada pembangunan solusi digital yang efisien, terintegrasi, dan mudah digunakan.
          </Box>
          {/* <Text align="justify" textIndent="1em">
            Septian adalah seorang programmer dengan latar belakang pendidikan Teknik Informatika dari Universitas Muhammadiyah Purwokerto (UMP). Ia memiliki pengalaman dalam pengembangan perangkat lunak serta pengelolaan sistem informasi, khususnya dalam mendukung kebutuhan operasional di lingkungan kesehatan.
            <br></br>Ia memiliki minat yang kuat dalam pengembangan aplikasi dan manajemen sistem, serta berfokus pada pembangunan solusi digital yang efisien, terintegrasi, dan mudah digunakan.
          </Text> */}
          <Box textAlign="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" id="bio">
            Bio
          </Heading>
          <BioSection year="1990">Lahir di Banyumas, Indonesia.</BioSection>
          <BioSection year="2012">
            Menyelesaikan program Sarjana Teknik Informatika di Universitas Muhammadiyah Purwokerto.
          </BioSection>
          <BioSection year="2013 - 2018">
            Bekerja sebagai Tenaga Pendidik di Universitas Muhammadiyah Purwokerto.
          </BioSection>
          <BioSection year="2019 - Sekarang">
            Bekerja sebagai Programmer di RSU Wiradadi Husada Banyumas.
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title" id="education">
            Education
          </Heading>
          <BioSection year="1996-2002">SD N 3 Bojongsari</BioSection>
          <BioSection year="2002-2005">SLTP N 1 Kembaran</BioSection>
          <BioSection year="2005-2008">SMK Kesatrian Purwokerto</BioSection>
          <BioSection year="2008-2012">Universitas Muhammadiyah Purwokerto (Teknik Informatika)</BioSection>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title" id="links">
            On the web
          </Heading>
          <VStack spacing={3} mt={4}>
            <LinkButton label="GitHub" href="https://github.com/septianari" icon={<FaGithub />} />
            {/* <LinkButton label="LinkedIn" href="https://linkedin.com/in/septianari" icon={<FaLinkedin />} /> */}
            {/* <LinkButton label="Twitter" href="https://twitter.com/septianari" icon={<FaTwitter />} /> */}
            <LinkButton label="Instagram" href="https://instagram.com/septianfd" icon={<FaInstagram />} />
          </VStack>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title" id="hobbies">
            I ♥
          </Heading>
          <Text>
            Badminton, Coding, Technology, Teaching, Open Source.
          </Text>
        </Section>

        {/* <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <Stack spacing={2}>
            <Text><strong>Email:</strong> septianfd@gmail.com</Text>
            <Text><strong>Telp:</strong> 112121212</Text>
            <Text><strong>Alamat:</strong> Ds. aaa, RT003 RW002, Kec. asas, Kab. Banyumas, Jawa Tengah, 53182</Text>
          </Stack>
        </Section> */}

        <Box textAlign="center" opacity={0.4} fontSize="sm" mt={10}>
          &copy; {new Date().getFullYear()} Septian Ari Wibowo. All Rights Reserved.
        </Box>
      </Container>
    </Box>
    </>
  );
}
