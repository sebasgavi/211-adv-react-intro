import React from 'react';
import { BrowserRouter, HashRouter, Link, MemoryRouter, Route } from 'react-router-dom';
import { DownloadItem } from '../../components/DownloadItem/DownloadItem';
import { DownloadItemForm } from '../../components/DownloadItemForm/DownloadItemForm';
import { Home } from '../Home/Home';

const initialDownloads = [
  {
    id: 0,
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/algo',
    date: 3456789097,
  },
  {
    id: 1,
    filename: 'lorem ipsum.txt',
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/Users/user/Downloads/FigmaSetup.exe',
    deleted: true,
    date: 3456789097,
  },
  {
    id: 2,
    filename: 'lorem ipsum.jpg',
    remoteUrl: 'https://files.readme.io/f37829f-widget-mfa-numeric.gif',
    localUrl: 'C:/Users/user/Downloads/FigmaSetup.exe',
    date: 3456789097,
  }
];

export const App = () => {

  const [ downloads, setDownloads ] = React.useState(initialDownloads);

  const handleDelete = (id: number) => {
    const copy = downloads.slice();
    const index = copy.findIndex((elem) => {
      return elem.id === id;
    });
    copy.splice(index, 1);
    setDownloads(copy);
    console.log('delete', id);
  }

  const handleSoftDelete = (id: number) => {
    const copy = downloads.slice();
    const index = copy.findIndex((elem) => {
      return elem.id === id;
    });
    copy[index].deleted = true;
    setDownloads(copy);
    console.log('soft delete', id);
  }

  const handleNewElement = (text: string, url: string, deleted: boolean) => {
    const copy = downloads.slice();
    const newObj = {
      id: copy.length,
      filename: text,
      remoteUrl: url,
      localUrl: 'C;skfaksdas',
      deleted: deleted,
      date: Date.now(),
    };
    copy.push(newObj);
    setDownloads(copy);
  }

  React.useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {
      method: 'GET',
      headers: {
        'x-api-key': 'aca118dd-a651-4ceb-9469-15211a0ef6e3'
      }
    }).then((res) => {
      return res.json();
    }).then((res) => {
      console.log(res);
    });
  }, [ downloads.length ]);

  return (<main>

    <HashRouter basename={process.env.PUBLIC_URL}>

      <Link to="/home">ir al home</Link>
      <Link to="/form">ir al form</Link>
      <Link to="/list">ir al list</Link>

      <Route path="/" exact render={() => <h1>Root</h1>} />

      <Route path="/one" render={() => <h1>One</h1>} />

      <Route path="/404" render={() => <h1>Estás re perdido</h1>} />

      <Route path="/home" render={() => <Home list={downloads} />} />

      <Route path="/form" render={() => <DownloadItemForm onNewItem={handleNewElement} />} />

      <Route path="/" render={() => {
        return <div>
          {downloads.map(({ filename, remoteUrl, localUrl, deleted, id }) => {
            const intermediateDelete = () => {
              handleDelete(id);
            }
            const intermediateSoftDelete = () => {
              handleSoftDelete(id);
            }
            return <DownloadItem
              key={id}
              id={id}
              name={filename}
              remoteUrl={remoteUrl}
              localUrl={localUrl}
              deleted={deleted}
              onDelete={intermediateDelete}
              onSoftDelete={intermediateSoftDelete}
              />;
          })}
        </div>
      }} />

      <p>
        {downloads.map(({ filename }) => filename).join(' - ')}
      </p>

    </HashRouter>
  </main>);
}