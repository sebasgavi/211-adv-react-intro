import React from 'react';
import { useHistory } from 'react-router';

interface DownloadItemFormProps {
  onNewItem: (text: string, url: string, deleted: boolean) => void;
}

export const DownloadItemForm: React.FC<DownloadItemFormProps> = ({ onNewItem }) => {
  const history = useHistory();

  const [ text, setText ] = React.useState('');
  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  }

  const [ url, setUrl ] = React.useState('');
  const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUrl(event.target.value);
  }

  const [ deleted, setDeleted ] = React.useState(false);
  const handleDeletedChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDeleted(event.target.checked);
  }

  const handleClick = () => {
    onNewItem(text, url, deleted);
    setText('');
    setUrl('');
    setDeleted(false);
    history.push('/list');
  }

  return <div>
    <input value={text} onChange={handleTextChange} />
    <input value={url} onChange={handleUrlChange} />
    <input checked={deleted} onChange={handleDeletedChange} type="checkbox" />
  
    <button onClick={handleClick}>new element</button>
  </div>;
}