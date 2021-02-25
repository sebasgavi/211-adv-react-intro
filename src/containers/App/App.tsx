import React from 'react';
import { DownloadItem } from '../../components/DownloadItem/DownloadItem';

const downloads = [
  {
    id: 0,
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/algo',
    date: 3456789097,
  },
  {
    id: 1,
    filename: 'lorem ipsum.txt',
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/Users/user/Downloads/FigmaSetup.exe',
    deleted: true,
    date: 3456789097,
  },
  {
    id: 2,
    filename: 'lorem ipsum.jpg',
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/Users/user/Downloads/FigmaSetup.exe',
    date: 3456789097,
  }
];

export const App = () => {
  return (<main>
    {downloads.map(({ filename, remoteUrl, localUrl, deleted, id }) => {
      return <DownloadItem
        key={id}
        name={filename}
        remoteUrl={remoteUrl}
        localUrl={localUrl}
        deleted={deleted}
        />;
    })}
  </main>);
}