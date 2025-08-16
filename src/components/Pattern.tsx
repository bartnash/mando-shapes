import { useEffect, useRef } from 'react';
import { Pattern } from '../types';
import Chord from './Chord';
import './components.css';

interface PatternDisplayProps {
  pattern: Pattern;
}

const PatternDisplay = ({ pattern }: PatternDisplayProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('is-centered', entry.isIntersecting);
        });
      },
      {
        root: scroller,
        rootMargin: '0px',
        threshold: 0.5, // 50% of the item must be visible
      }
    );

    const items = scroller.querySelectorAll('.chord-item-wrapper');
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, [pattern]);

  const getImagePath = (imageName: string) => {
    const filename = imageName.split('/').pop();
    const key = `/src/data/patterns/${pattern.id}/${filename}`;
    const module = pattern.imageModules[key] as { default: string } | undefined;
    return module?.default || '';
  };

  return (
    <section className="pattern-container">
      <h2>{pattern.name}</h2>
      {pattern.description && <p>{pattern.description}</p>}
      <div className="chords-scroller" ref={scrollerRef}>
        {pattern.shapes.map((chord, index) => (
          <div key={index} className="chord-item-wrapper">
            <Chord chord={chord} imageSrc={getImagePath(chord.image)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatternDisplay;
