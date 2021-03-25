import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { DownloadsContext } from '../../utils/DownloadsContext';
import { ColorResult, SketchPicker, SliderPicker } from 'react-color';
import { Visualization } from '../Visualization/Visualization';

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

  const { handleTest, color, setColor } = useContext(DownloadsContext);
  const handleClick2 = () => {
    handleTest('un gran nombre');
  }

  const handleColor = (color: ColorResult) => {
    setColor(color.hex);
  }

  return <div>
    <input value={text} onChange={handleTextChange} />
    <input value={url} onChange={handleUrlChange} />
    <input checked={deleted} onChange={handleDeletedChange} type="checkbox" />
  
    <button onClick={handleClick}>new element</button>

    <button onClick={handleClick2}>test</button>

    <SketchPicker
      color={color}
      onChange={handleColor}
       />

    <Visualization />
  </div>;
}