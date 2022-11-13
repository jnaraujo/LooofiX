import React, { memo } from 'react';
import { Icon } from '@iconify/react';
import Marquee from "react-fast-marquee";

import { useYoutube } from '@/contexts/YoutubeContext';
import { useMusic } from '@/contexts/MusicContext';

import { formatElapsedTime, getPlayButtonIcon } from './helper';
import AudioWaves from '../AudioWaves';

import style from './styles.module.scss';
import { useTheme } from '@/contexts/ThemeContext';
import Color from 'color';

const Player: React.FC = () => {
  const { video, elapsed, videoState, handlePlay } = useYoutube();
  const { handleNextMusic, handlePreviousMusic } = useMusic();
  const { theme } = useTheme();
  const gradientMarquee = Color(theme.bgPrimary).rgb();

  if (!video) return null;

  return <section className={style.container}>
    <div className={style.header}>
      <Marquee
        gradientColor={[gradientMarquee.red(), gradientMarquee.green(), gradientMarquee.blue()]}
        gradientWidth={50}
      >
        <h1 className='title'>
          {video.videoTitle || 'Buffering...'}&nbsp;|&nbsp;
        </h1>
      </Marquee>
      <h2>{formatElapsedTime(elapsed)} elapsed in LooofiX</h2>
    </div>
    <div className={style.controls}>
      <button onClick={() => handlePreviousMusic()}>
        <Icon icon="mdi:skip-previous" fontSize={32} />
      </button>
      <button onClick={() => handlePlay()}>
        <Icon icon={getPlayButtonIcon(videoState)} fontSize={32} />
      </button>
      <button onClick={() => handleNextMusic()}>
        <Icon icon='mdi:skip-next' fontSize={32} />
      </button>
    </div>
    <AudioWaves />
  </section>
}

export default memo(Player);
