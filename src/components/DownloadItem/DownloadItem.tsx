import * as React from 'react';
import { Link } from 'react-router-dom';
import { getImageSrcFromFilename } from '../../utils/getImageSrcFromFilename';
import './DownloadItem.css';

interface DownloadItemProps {
  id: number;
  name?: string;
  remoteUrl: string;
  localUrl: string;
  deleted?: boolean;
  onDelete: () => void;
  onSoftDelete: () => void;
}

export const DownloadItem: React.FC<DownloadItemProps> = ({ id, remoteUrl, localUrl, name, deleted, onDelete, onSoftDelete }) => {

  const imageSrc = getImageSrcFromFilename(name);

  return (<div className={`DownloadItem ${deleted ? 'DownloadItem--deleted' : ''}`}>
    <img src={imageSrc} alt=""/>
    <Link to={`/home/${id}`}><h1>{name || 'Untitled'} {deleted && 'Deleted'}</h1></Link>
    <p>{remoteUrl}</p>
    {!deleted && <button onClick={onSoftDelete}>Show in folder</button>}
    <button onClick={onDelete}>Delete </button>
  </div>);
}