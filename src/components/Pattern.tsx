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

  const handleChordClick = (index: number) => {
    if (scrollerRef.current) {
      const chordElement = scrollerRef.current.children[index] as HTMLElement;
      if (chordElement) {
        chordElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const children = Array.from(scroller.children) as HTMLElement[];
    const scrollLeft = scroller.scrollLeft;
    const clientWidth = scroller.clientWidth;

    let currentIndex = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      // Check if the child is mostly visible in the current view
      if (child.offsetLeft <= scrollLeft + clientWidth / 2 &&
          child.offsetLeft + child.offsetWidth >= scrollLeft + clientWidth / 2) {
        currentIndex = i;
        break;
      }
    }

    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') {
      nextIndex = Math.min(children.length - 1, currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      nextIndex = Math.max(0, currentIndex - 1);
    }

    if (nextIndex !== currentIndex) {
      children[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      event.preventDefault(); // Prevent default arrow key scrolling
    }
  };

  const scrollByAmount = (amount: number) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollerRef.current) {
      const currentScroll = scrollerRef.current.scrollLeft;
      const children = Array.from(scrollerRef.current.children) as HTMLElement[];
      let targetScroll = 0;
      for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        if (child.offsetLeft < currentScroll) {
          targetScroll = child.offsetLeft;
          break;
        }
      }
      scrollerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      const currentScroll = scrollerRef.current.scrollLeft;
      const children = Array.from(scrollerRef.current.children) as HTMLElement[];
      let targetScroll = scrollerRef.current.scrollWidth; // Default to end
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.offsetLeft > currentScroll) {
          targetScroll = child.offsetLeft;
          break;
        }
      }
      scrollerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section className="pattern-container">
      <h2>{pattern.name}</h2>
      {pattern.description && <p>{pattern.description}</p>}
      <div className="chords-scroller-wrapper"> {/* New wrapper for scroller and arrows */}
        <button className="scroll-arrow left-arrow" onClick={scrollLeft}>&lt;</button>
        <div
          className="chords-scroller"
          ref={scrollerRef}
          onKeyDown={handleKeyDown} // Add keydown listener
          tabIndex={0} // Make the div focusable
        >
          {pattern.shapes.map((chord, index) => (
            <div key={index} className="chord-item-wrapper">
              <Chord
                chord={chord}
                imageSrc={getImagePath(chord.image)}
                onClick={() => handleChordClick(index)} // Pass click handler
              />
            </div>
          ))}
        </div>
        <button className="scroll-arrow right-arrow" onClick={scrollRight}>&gt;</button>
      </div>
    </section>
  );
};

export default PatternDisplay;
