import React from 'react';
import { Redirect, useParams } from 'react-router';
import { DownloadItemType } from '../../utils/downloadItemType';

interface HomeNameProps {
  list: DownloadItemType[];
}

export const HomeName: React.FC<HomeNameProps> = ({ list }) => {

  const { id } = useParams<{ id: string }>();

  const item = list.find((elem) => elem.id === parseInt(id));

  if(!item) {
    return <Redirect to="/404" push={false} />;
  }

  return <div>
    <p>Name: {item?.filename}</p>
    <p>LocalUrl: {item?.localUrl}</p>
    <p>Date: {item?.date}</p>
  </div>;
}