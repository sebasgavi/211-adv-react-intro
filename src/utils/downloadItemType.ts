export type DownloadItemType = {
  id: number,
  filename?: string,
  remoteUrl: string,
  localUrl: string,
  deleted?: boolean,
  date: number,
}