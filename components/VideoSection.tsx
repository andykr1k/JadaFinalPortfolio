/** @jsxImportSource @emotion/react */
import { ReactElement, RefObject, useState } from 'react';
import { createRef } from 'react';
import { FC } from 'react';
import {
  AiOutlineDownCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from 'react-icons/ai';
import { computeGridSize } from '../styles/grid';
import { mq } from '../styles/mq';
import { GapHorizontal } from './GapHorizontal';
import { GapVertical } from './GapVertical';
import { motion } from 'framer-motion';

interface VideoSectionProps {}

export const VideoSection: FC<VideoSectionProps> = () => {
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
        Films
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
        A video collection of Jada&apos;s works.
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
            width: ['80%', '85%', '90%'],
            alignItems: ['center', 'flex-start', 'flex-start'],
            overflowX: 'hidden',
            overflowY: 'hidden',
            zIndex: 1,
            paddingBottom: [
              computeGridSize(8),
              computeGridSize(0),
              computeGridSize(0),
            ],
          })}
          id="work-videos"
        >
          <VideoForWorkYT
            src={
              <iframe
                src="https://www.youtube.com/embed/KE_BcgLUi58"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: '0px',
                  top: '0px',
                }}
              />
            }
            title="The Girl Who Cried Wolf"
            subtitle="A young woman struggles to grasp the concept of understanding and accepting her identity."
          />
          <div css={mq({ display: ['none', 'flex', 'flex'] })}>
            <GapHorizontal times={12} />
          </div>
          <div css={mq({ display: ['flex', 'none', 'none'] })}>
            <GapVertical times={12} />
          </div>
          <VideoForWorkYT
            src={
              <iframe
                src="https://www.youtube.com/embed/LSjTJlUZkLY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: '0px',
                  top: '0px',
                }}
              />
            }
            title="The House on the Hill"
            subtitle="A couple goes to an Airbnb for a date night getaway. The evening goes well until things begin to take a turn in the house."
          />
          <div css={mq({ display: ['none', 'flex', 'flex'] })}>
            <GapHorizontal times={12} />
          </div>
          <div css={mq({ display: ['flex', 'none', 'none'] })}>
            <GapVertical times={12} />
          </div>
          <VideoForWorkYT
            src={
              <iframe
                src="https://www.youtube.com/embed/r0t9PRHX5FA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: '0px',
                  top: '0px',
                }}
              />
            }
            title="Daydream"
            subtitle="Three homeless young adults spend everyday together living in the moment and taking in everything new."
          />
          <div css={mq({ display: ['none', 'flex', 'flex'] })}>
            <GapHorizontal times={12} />
          </div>
          <div css={mq({ display: ['flex', 'none', 'none'] })}>
            <GapVertical times={12} />
          </div>
          <VideoForWorkYT
            src={
            <iframe
                src="https://www.youtube.com/embed/l10-ocIJxzw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: '0px',
                  top: '0px',
                }}
              />
            }
            title="Best Part"
            subtitle="A film about artists and creative people using time during the global pandemic to make art."
          />
          <div css={mq({ display: ['none', 'flex', 'flex'] })}>
            <GapHorizontal times={12} />
          </div>
          <div css={mq({ display: ['flex', 'none', 'none'] })}>
            <GapVertical times={12} />
          </div>
          <VideoForWorkYT
            src={
              <iframe
                src="https://www.youtube.com/embed/ET6b-BZxuJ4"
                title="YouTube video player"
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: '0px',
                  top: '0px',
                }}
              />
            }
            title="Addicted"
            subtitle="Short film about a character making a challenging decision submitted to Chapman Dodge College during Fall 2021 applications."
          />
        </div>
        <VideosForWorkControl isNext={false} />
        <VideosForWorkControl isNext={true} />
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
          display: ['none', 'flex', 'flex'],
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '20px',
          ':hover': {
            transform: 'scale(1.05)',
          },
        })}
        onClick={() =>
          window.scrollTo({ top: 3 * window.innerHeight, behavior: 'smooth' })
        }
      >
        <p css={{ margin: 0, fontWeight: 300 }}>Ad Spotlight</p>
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

interface VideosForWorkControlProps {
  isNext: boolean;
}

export const VideosForWorkControl: FC<VideosForWorkControlProps> = ({
  isNext,
}) => {
  return (
    <div
      css={mq({
        display: ['none', 'flex', 'flex'],
        position: 'absolute',
        right: isNext ? ['0px', '28px', '32px'] : '',
        left: isNext ? '' : ['0px', '28px', '32px'],
        zIndex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: ['0px', '16px', '24px'],
        ':hover': {
          fontSize: ['0px', '18px', '28px'],
          '& > svg': {
            width: ['0px', '22px', '26px'],
            height: ['0px', '22px', '26px'],
          },
          right: isNext ? ['0px', '26px', '28px'] : '',
          left: isNext ? '' : ['0px', '26px', '28px'],
        },
      })}
      onClick={() =>
        document.getElementById('work-videos').scrollTo({
          left: isNext ? 0.85 * window.innerWidth : -window.innerWidth,
          behavior: 'smooth',
        })
      }
    >
      <p css={{ margin: 0, fontWeight: 200 }}>{isNext ? 'Next' : 'Prev'}</p>
      <GapVertical times={2} />
      {isNext ? (
        <AiOutlineRightCircle
          css={mq({
            width: ['0px', '20px', '24px'],
            height: ['0px', '20px', '24px'],
          })}
        />
      ) : (
        <AiOutlineLeftCircle
          css={mq({
            width: ['0px', '20px', '24px'],
            height: ['0px', '20px', '24px'],
          })}
        />
      )}
    </div>
  );
};

interface VideoForWorkProps {
  src: string;
  title: string;
  subtitle: string;
}

export const VideoForWork: FC<VideoForWorkProps> = ({
  src,
  title,
  subtitle,
}) => {
  const videoRef: RefObject<HTMLVideoElement> = createRef();
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  return (
    <div
      css={mq({
        zIndex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <video
        src={src}
        controls={true}
        ref={videoRef}
        css={mq({
          outline: 'none',
          border: 'none',
          minHeight: ['40vh', '40vh', '40vh'],
          maxHeight: ['40vh', '40vh', '40vh'],
          minWidth: ['100%', '40vw', '40vw'],
          maxWidth: ['100%', '40vw', '40vw'],
          zIndex: 1,
          background: 'black',
        })}
        preload="metadata"
        onPause={() => {
          setPlaying(false);
          setShowControls(false);
        }}
        onPlay={() => {
          setPlaying(true);
          setShowControls(true);
        }}
        title={title}
      />
      <GapVertical times={5} />
      <h2
        css={mq({
          margin: 0,
          fontSize: ['24px', '28px', '36px'],
          fontWeight: 300,
        })}
      >
        {title}
      </h2>
      <GapVertical times={3} />
      <p css={{ margin: 0, fontWeight: 200, fontSize: '20px' }}>{subtitle}</p>
    </div>
  );
};

interface VideoForWorkYTProps {
  src: ReactElement;
  title: string;
  subtitle: string;
}

export const VideoForWorkYT: FC<VideoForWorkYTProps> = ({
  src,
  title,
  subtitle,
}) => {
  const videoRef: RefObject<HTMLVideoElement> = createRef();
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  return (
    <div
      css={mq({
        zIndex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      })}
    >
      <div
        css={mq({
          outline: 'none',
          border: 'none',
          zIndex: 1,
          minHeight: '40vh',
          maxHeight: '40vh',
          minWidth: ['100%', '40vw', '40vw'],
          maxWidth: ['100%', '40vw', '40vw'],
          position: 'relative',
        })}
      >
        {src}
      </div>
      <GapVertical times={5} />
      <h2
        css={mq({
          margin: 0,
          fontSize: ['24px', '28px', '36px'],
          fontWeight: 300,
        })}
      >
        {title}
      </h2>
      <GapVertical times={3} />
      <p css={{ margin: 1, fontWeight: 200, fontSize: '20px' }}>{subtitle}</p>
    </div>
  );
};
