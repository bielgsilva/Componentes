import { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons/ti';
import './styles.css'; 

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const SlideCarrossel = () => {
  const [active, setActive] = useState(2);

  return (
    <div className='carousel'>

      {active > 0 && (
        <button className='nav left' onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}

      {[...Array(CARDS)].map((_, i) => (
        <div
          className='card-container'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',

          }}
          key={i}
        >
          <Card
            title={'Card ' + (i + 1)}
            content='Lorem ipsum dolor...'
          />
        </div>
      ))}

      {active < CARDS - 1 && (
        <button className='nav right' onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}

    </div>
  );
};

export default SlideCarrossel;
