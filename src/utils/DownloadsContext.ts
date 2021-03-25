import { createContext } from "react";
import { DownloadItemType } from "./downloadItemType";

export const DownloadsContext = createContext({
  list: [
    {
      id: 0,
      filename: 'from default context value',
      date: 9128751823,
      localUrl: 'basdasd',
      remoteUrl: '31312sadasda'
    }
  ] as DownloadItemType[],
  handleDelete: (id: number) => {
    console.log('soy inservible')
  },
  handleTest: (name: string) => {},
  color: '',
  setColor: (color: string) => {},
});

