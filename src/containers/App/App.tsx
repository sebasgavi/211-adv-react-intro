import React from 'react';
import { DownloadItem } from '../../components/DownloadItem/DownloadItem';
import { DownloadItemPaila } from '../../components/DownloadItem/DownloadItemPaila';

export const App = () => {
  return (<main>
    <DownloadItem name="Augusto"></DownloadItem>
    <DownloadItem name="Mateo" />
    <DownloadItem name="Juanes" deleted={true} />

    <DownloadItemPaila name="Payán" />
    <DownloadItemPaila nam="Juli" />
  </main>);
}