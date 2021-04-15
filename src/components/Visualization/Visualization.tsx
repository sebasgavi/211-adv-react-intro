import React, { useContext } from 'react';
import p5 from 'p5';
import { DownloadsContext } from '../../utils/DownloadsContext';

interface VisualizationProps {

}

export const Visualization: React.FC<VisualizationProps> = () => {
  const { color } = useContext(DownloadsContext);

  const ref = React.useRef(null as HTMLDivElement|null);
  const variablesRef = React.useRef({
    color: 'black',
  });

  React.useEffect(() => {
    new p5((sketch) => {
    
      console.log('canvas created');
      sketch.setup = () => {
        sketch.createCanvas(200, 200);
      } 
      
      let x = 0;
      sketch.draw = () => {
        sketch.background('red');
        x++;
        sketch.fill(variablesRef.current.color);
        sketch.ellipse(x, 100, 30, 30);
        if(x > sketch.width) x = 0;
      }

    }, ref.current!);
  }, []);

  React.useEffect(() => {
    variablesRef.current.color = color;
  }, [ color ]);

  return <div ref={ref}></div>;
}
