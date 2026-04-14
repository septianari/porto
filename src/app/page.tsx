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

export default function Home() {
  const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const avatarSrc = `${assetPrefix}/photo.png`;

  return (
    <Box as="main" pb={8}>
      <Navbar />
      
      <Container maxW="container.md" pt={20}>
        {/* To enable the 3D hero section, import ThreeBackground from '@/components/ui/ThreeBackground' and render it here. */}

        <Section delay={0.1}>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            textAlign="center"
            css={{ backdropFilter: 'blur(10px)' }}
          >
            {/* Hello, I&apos;m a software engineer based in Indonesia! */}
            &apos; Hello World! &apos;
          </Box>

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
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          {/* <Text align="justify" textIndent="1em">
            Septian adalah seorang profesional di bidang Teknologi Informasi dengan latar belakang sebagai Tenaga Pendidik di Universitas Muhammadiyah Purwokerto. Ia memiliki ketertarikan mendalam dalam pengembangan perangkat lunak dan manajemen sistem informasi. Saat ini, ia berfokus pada pembangunan solusi digital yang efisien dan edukatif.
          </Text> */}
          <Text align="justify" textIndent="1em">
            Septian adalah seorang programmer dengan latar belakang pendidikan Teknik Informatika dari Universitas Muhammadiyah Purwokerto (UMP). Ia memiliki pengalaman dalam pengembangan perangkat lunak serta pengelolaan sistem informasi, khususnya dalam mendukung kebutuhan operasional di lingkungan kesehatan.
            <br></br>Ia memiliki minat yang kuat dalam pengembangan aplikasi dan manajemen sistem, serta berfokus pada pembangunan solusi digital yang efisien, terintegrasi, dan mudah digunakan.
          </Text>
          <Box textAlign="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" id="education">
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
          <BioSection year="2008-2012">Universitas Muhammadiyah Purwokerto (Teknik Informatika)</BioSection>
          <BioSection year="2005-2008">SMK Kesatrian Purwokerto</BioSection>
          <BioSection year="2002-2005">SLTP N 1 Kembaran</BioSection>
          <BioSection year="1996-2002">SD N 3 Bojongsari</BioSection>
        </Section>

        <Section delay={0.5}>
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
  );
}
