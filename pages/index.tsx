/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import Head from 'next/head'

import { GapVertical } from '../components/GapVertical';
import { HomeHeader } from '../components/HomeHeader';
import { MediaSection } from '../components/MediaSection';
import { VideoSection } from '../components/VideoSection';
import { WorkSection } from '../components/WorkSection';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { mq } from '../styles/mq';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 2000);
  }, [onOpen]);

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100vw',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Oswald',
        overflow: 'hidden',
      }}
    >
      <Head>
        <title>Jada Ganim</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeHeader />
      <WorkSection onOpen={onOpen} />
      <VideoSection />
      <MediaSection />
      <GapVertical times={12} />
    </div>
  );
}
