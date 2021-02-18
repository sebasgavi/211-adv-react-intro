import * as React from 'react';
import './DownloadItem.css';

interface DownloadItemProps {
  name: string;
  deleted?: boolean;
}

export const DownloadItem: React.FC<DownloadItemProps> = (props) => {

  return (<div className="DownloadItem">
    <h1>{props.name}</h1>
    <p>Lorems afassadadadaad ipsum dolor sit amet.</p>
  </div>);
}