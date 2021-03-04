import React from 'react';
import { Count } from '../../components/Count/Count';
import { DownloadItem } from '../../components/DownloadItem/DownloadItem';

const initialDownloads = [
  {
    id: 10,
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/algo',
    date: 3456789097,
  },
  {
    id: 5,
    filename: 'lorem ipsum.txt',
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/Users/user/Downloads/FigmaSetup.exe',
    deleted: true,
    date: 3456789097,
  },
  {
    id: 200,
    filename: 'lorem ipsum.jpg',
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/Users/user/Downloads/FigmaSetup.exe',
    date: 3456789097,
  }
];

export const App = () => {

  const [ downloads, setDownloads ] = React.useState(initialDownloads);

  const handleDelete = (id: number) => {
    const copy = downloads.slice();
    const index = copy.findIndex((elem) => {
      return elem.id === id;
    });
    copy.splice(index, 1);
    setDownloads(copy);
    console.log('delete', id);
  }

  const handleSoftDelete = (id: number) => {
    const copy = downloads.slice();
    const index = copy.findIndex((elem) => {
      return elem.id === id;
    });
    copy[index].deleted = true;
    setDownloads(copy);
    console.log('soft delete', id);
  }

  return (<main>
    {downloads.map(({ filename, remoteUrl, localUrl, deleted, id }) => {
      const intermediateDelete = () => {
        handleDelete(id);
      }
      const intermediateSoftDelete = () => {
        handleSoftDelete(id);
      }
      return <DownloadItem
        key={id}
        name={filename}
        remoteUrl={remoteUrl}
        localUrl={localUrl}
        deleted={deleted}
        onDelete={intermediateDelete}
        onSoftDelete={intermediateSoftDelete}
        />;
    })}

    <p>
      {downloads.map(({ filename }) => filename).join(' - ')}
    </p>
  </main>);
}