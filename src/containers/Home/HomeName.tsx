import React from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router';
import { DownloadItemType } from '../../utils/downloadItemType';

interface HomeNameProps {
  list: DownloadItemType[];
}

export const HomeName: React.FC<HomeNameProps> = ({ list }) => {

  const { id } = useParams<{ id: string }>();

  const item = list.find((elem) => elem.id === parseInt(id));

  return <div>
    <p>Name: {item?.filename}</p>
    <p>LocalUrl: {item?.localUrl}</p>
    <p>Date: {item?.date}</p>
  </div>;
}