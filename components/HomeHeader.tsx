/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { GapVertical } from './GapVertical';
import { mq } from '../styles/mq';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { computeGridSize } from '../styles/grid';

interface HomeHeaderProps {}

export const HomeHeader: FC<HomeHeaderProps> = () => {
  return (
    <div
      css={mq({
        display: 'flex',
        flexDirection: ['column', 'row', 'row'],
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      })}
    >
      <div
        css={mq({
          width: ['80%', '50%', '50%'],
          height: ['60vh', '100vh', '100vh'],
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: ['48px', '0px', '0px'],
        })}
      >
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5}}
          src="/profile/jadaPic.jpg"
          alt="Jada Ganim - Filmmaker"
          css={{
            width: '80%',
            height: '80%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        css={mq({
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          width: ['100%', '50%', '50%'],
          paddingTop: ['48px', '0px', '0px'],
          minHeight: ['50vh', '100%', '100%'],
        })}
      >
        <h1
          css={mq({
            fontWeight: 400,
            fontSize: ['44px', '48px', '56px'],
            margin: 0,
            zIndex: 2,
            color: 'black',
          })}
        >
          Jada Ganim
        </h1>
        <GapVertical times={3} />
        <div
          css={mq({
            height: ['3px'],
            width: ['32px'],
            background: 'black',
            zIndex: 2,
          })}
        />
        <GapVertical times={3} />
        <p
          css={mq({
            margin: 0,
            fontSize: ['16px', '18px', '20px'],
            fontWeight: 200,
            zIndex: 2,
            color: 'black',
          })}
        >
          Filmmaker
        </p>
        <GapVertical times={8} />
        <p
          css={mq({
            margin: 0,
            fontSize: ['12px', '14px', '16px'],
            fontWeight: 300,
            zIndex: 2,
            color: 'black',
            fontFamily: 'Rubik',
            textAlign: 'center',
            width: ['75%', '70%', '45%'],
            lineHeight: '180%',
          })}
        >
          Jada is an all around creative studying television, film, and media studies in Los Angeles, California. 
        </p>
        <div
          css={mq({
            marginBottom: [
              computeGridSize(10),
              computeGridSize(0),
              computeGridSize(0),
            ],
          })}
        />
        <div css={mq({ display: ['flex', 'none', 'none'] })}>
          <GapVertical times={16} />
        </div>
        <div
          css={mq({
            position: ['relative', 'absolute', 'absolute'],
            bottom: '36px',
            textAlign: 'center',
            display: ['none', 'flex', 'flex'],
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90px',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            ':hover': {
              fontSize: '24px',
              bottom: '38px',
              '& > svg': {
                width: '32px',
                height: '32px',
              },
            },
          })}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
        >
          <p css={{ margin: 0, fontWeight: 300 }}>Spotlight</p>
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
      </div>
    </div>
  );
};
