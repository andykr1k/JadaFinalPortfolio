/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { computeGridSize } from '../styles/grid';
import { mq } from '../styles/mq';
import { GapHorizontal } from './GapHorizontal';
import { GapVertical } from './GapVertical';
import { motion } from 'framer-motion';
interface WorkSectionProps {
  onOpen: VoidFunction;
}

const prosPoster: { poster: string; links: PosterLink[] } = {
  poster: '/movies/SWEETDREAMS.jpg',
  links: [
    {
      link: 'https://www.youtube.com/watch?v=wolixDx71ws',
      name: 'Watch on YouTube',
    },
  ],
};

export const WorkSection: FC<WorkSectionProps> = ({ onOpen }) => {
  

  return (
    <section
      css={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
      }}
    >
      <h1
        css={mq({
          fontWeight: 400,
          fontSize: ['44px', '52px', '56px'],
          margin: 0,
        })}
      >
        Spotlight
      </h1>
      <GapVertical times={4} />
      <p
        css={mq({
          margin: 0,
          fontFamily: 'Rubik',
          fontWeight: 200,
          fontSize: ['16px', '18px', '20px'],
        })}
      >
        Jada&apos;s Spotlight.
      </p>
      <GapVertical times={12} />
      <div
        css={mq({
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: ['column', 'row', 'row'],
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        })}
      >
        <div
          css={mq({
            position: 'relative',
            display: 'flex',
            flexDirection: ['column', 'row', 'row'],
            width: ['87.5%', '85%', '90%'],
            alignItems: 'center',
            justifyContent: 'center',
            overflowX: ['auto', 'hidden', 'hidden'],
            overflowY: 'hidden',
            zIndex: 1,
            paddingBottom: [
              computeGridSize(8),
              computeGridSize(0),
              computeGridSize(0),
            ],
            gap: '48px',
          })}
        >
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}   transition={{ duration: 0.7}}>
            <Poster posterProps={prosPoster} />
          </motion.div>
        </div>
      </div>
      <div css={mq({ display: ['none', 'none', 'flex'] })}>
        <GapVertical times={30} />
      </div>
      <div css={mq({ display: ['none', 'flex', 'none'] })}>
        <GapVertical times={16} />
      </div>
      <div css={mq({ display: ['flex', 'none', 'none'] })}>
        <GapVertical times={20} />
      </div>
      <div
        css={mq({
          textAlign: 'center',
          fontSize: '20px',
          display: ['none', 'flex', 'flex'],
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          ':hover': {
            transform: 'scale(1.05)',
          },
        })}
        onClick={() =>
          window.scrollTo({ top: 2 * window.innerHeight, behavior: 'smooth' })
        }
      >
        <p css={{ margin: 0, fontWeight: 300 }}>Film&apos;s</p>
        <GapVertical times={2} />
        <AiOutlineDownCircle
          css={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            marginBottom: '-4px',
          }}
        />
      </div>
    </section>
  );
};

interface PosterLink {
  link: string | VoidFunction;
  name: string;
}

const Poster: React.FC<{
  posterProps: { poster: string; links: PosterLink[] };
}> = ({ posterProps }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <img
        alt=""
        src={posterProps.poster}
        css={mq({
          maxHeight: ['45vh', '60vh', '60vh'],
          objectFit: 'contain',
          width: '100%',
        })}
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {posterProps.links.map((link, index) => {
          const isString = typeof link.link === 'string';
          return (
            <button
              key={index}
              css={{
                border: 'none',
                borderRadius: '4px',
                outline: 'none',
                padding: '12px 20px',
                textTransform: 'uppercase',
                background: posterLinkBG(link.link, isString),
                cursor: 'pointer',
                fontSize: '14px',
                color: posterLinkColor(link.link, isString),
                fontFamily: 'Rubik',
              }}
              onClick={
                isString
                  ? () => window.open(link.link as string)
                  : (link.link as VoidFunction)
              }
            >
              {link.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const posterLinkBG = (link: string | VoidFunction, isString: boolean) => {
  if (isString) {
    if ((link as String).includes('imdb')) {
      return '#f6c802';
    } else if ((link as String).includes('youtube')) {
      return 'red';
    }
  } else {
    return 'black';
  }
};

const posterLinkColor = (link: string | VoidFunction, isString: boolean) => {
  if (isString) {
    if ((link as string).includes('imdb')) {
      return 'black';
    } else if ((link as string).includes('youtube')) {
      return 'white';
    }
  } else {
    return 'white';
  }
};
