import React, { memo, useState } from 'react';

import SettingsSidebar from '@/components/SettingsSidebar';

import { useMusic } from '@/contexts/MusicContext';
import { useYoutube } from '@/contexts/YoutubeContext';

import { SyncWindows } from '@/utils/syncWindows';

import style from './styles.module.scss';
import { useTheme } from '@/contexts/ThemeContext';

const SettingsLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<JSX.Element | null>(null);
  const useMusicCtx = useMusic();
  const useYoutubeCtx = useYoutube();
  const useThemeCtx = useTheme();
  new SyncWindows(useYoutubeCtx, useMusicCtx, useThemeCtx);

  const handleTabChange = (tab: JSX.Element) => {
    setActiveTab(tab);
  }

  return (
    <main className={style.container}>
      <div className={style.topBar}>
        <h1>Settings</h1>
      </div>
      <SettingsSidebar onTabChange={handleTabChange} />
      <div className={style.content}>
        {activeTab}
      </div>
    </main>
  );
}

export default memo(SettingsLayout);
