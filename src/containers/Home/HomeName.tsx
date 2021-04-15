import React, { useContext } from 'react';
import { Redirect, useParams } from 'react-router';
import { DownloadsContext } from '../../utils/DownloadsContext';

interface HomeNameProps {}

export const HomeName: React.FC<HomeNameProps> = () => {
  const { list, handleDelete } = useContext(DownloadsContext);

  const { id } = useParams<{ id: string }>();

  const item = list.find((elem) => elem.id === parseInt(id));

  const [ img, setImg ] = React.useState('');

  const filename = item?.filename;
  React.useEffect(() => {
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
  }, [ filename ]);

  if(!item) {
    return <Redirect to="/404" push={false} />;
  }

  const handleClick = () => {
    handleDelete(item.id);
  }

  return <div>
    <img src={img} alt="" width={400} />
    <p>Name: {item?.filename}</p>
    <p>LocalUrl: {item?.localUrl}</p>
    <p>Date: {item?.date}</p>
    <button onClick={handleClick}>delete</button>
  </div>;
}