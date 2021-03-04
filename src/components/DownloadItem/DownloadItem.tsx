import * as React from 'react';
import { getImageSrcFromFilename } from '../../utils/getImageSrcFromFilename';
import './DownloadItem.css';

interface DownloadItemProps {
  name?: string;
  remoteUrl: string;
  localUrl: string;
  deleted?: boolean;
  onDelete: () => void;
  onSoftDelete: () => void;
}

export const DownloadItem: React.FC<DownloadItemProps> = ({ remoteUrl, localUrl, name, deleted, onDelete, onSoftDelete }) => {

  const imageSrc = getImageSrcFromFilename(name);

  return (<div className={`DownloadItem ${deleted ? 'DownloadItem--deleted' : ''}`}>
    <img src={imageSrc} alt=""/>
    <h1>{name || 'Untitled'} {deleted && 'Deleted'}</h1>
    <p>{remoteUrl}</p>
    {!deleted && <button onClick={onSoftDelete}>Show in folder</button>}
    <button onClick={onDelete}>Delete </button>
  </div>);
}