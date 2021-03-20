import React from 'react';
import { Redirect, useParams } from 'react-router';
import { DownloadItemType } from '../../utils/downloadItemType';

interface HomeNameProps {
  list: DownloadItemType[];
}

export const HomeName: React.FC<HomeNameProps> = ({ list }) => {

  const { id } = useParams<{ id: string }>();

  const item = list.find((elem) => elem.id === parseInt(id));

  const [ img, setImg ] = React.useState('');

  const filename = item?.filename;
  React.useEffect(() => {
  }, [ filename ]);
  fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${filename}`, {
    method: 'GET',
    headers: {
      'x-api-key': 'aca118dd-a651-4ceb-9469-15211a0ef6e3'
    }
  }).then((res) => {
    return res.json();
  }).then((res) => {
    console.log(res);
    if(res.length > 0) {
      setImg(res[0].url);
    }
  });

  if(!item) {
    return <Redirect to="/404" push={false} />;
  }

  return <div>
    <img src={img} width={400} />
    <p>Name: {item?.filename}</p>
    <p>LocalUrl: {item?.localUrl}</p>
    <p>Date: {item?.date}</p>
  </div>;
}