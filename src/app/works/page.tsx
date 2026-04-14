'use client';

import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react';
import Navbar from '@/components/layouts/Navbar';
import Section from '@/components/ui/Section';
import { WorkGridItem } from '@/components/ui/WorkGridItem';

export default function Works() {
  const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container maxW="container.md" pt={20}>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={6}>
            Works
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section delay={0.2}>
              <WorkGridItem
                id="https://github.com/septianari/simgos-desktop"
                title="SIMGOS Desktop"
                thumbnail={`${assetPrefix}/simgos-desktop.png`}
                // thumbnail="https://opengraph.githubassets.com/1/septianari/simgos-desktop"
              >
                A desktop application for Hospital Information System (SIMRS) based on Electron.
              </WorkGridItem>
            </Section>

            <Section delay={0.3}>
              <WorkGridItem
                id="https://github.com/septianari"
                title="Personal Projects"
                thumbnail={`${assetPrefix}/porto.png`}
              >
                Collection of my personal coding projects and experiments.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Section>

        {/* <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" variant="section-title" mb={6}>
            Collaborations
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
             <Section delay={0.5}>
              <WorkGridItem
                id="#"
                title="Hospital Management"
                thumbnail="https://via.placeholder.com/300x200?text=Hospital+System"
              >
                Development and maintenance of academic hospital information systems.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Section> */}
      </Container>
    </Box>
  );
}
