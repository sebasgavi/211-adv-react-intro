import * as React from 'react';
import { getImageSrcFromFilename } from '../../utils/getImageSrcFromFilename';
import './DownloadItem.css';

interface DownloadItemProps {
  name?: string;
  remoteUrl: string;
  localUrl: string;
  deleted?: boolean;
}

export const DownloadItem: React.FC<DownloadItemProps> = ({ remoteUrl, localUrl, name, deleted }) => {

  const imageSrc = getImageSrcFromFilename(name);

  return (<div className={`DownloadItem ${deleted ? 'DownloadItem--deleted' : ''}`}>
    <img src={imageSrc} alt=""/>
    <h1>{name || 'Untitled'} {deleted && 'Deleted'}</h1>
    <p>{remoteUrl}</p>
    {!deleted && <button>Show in folder</button>}
  </div>);
}