import { useState, useEffect, useRef } from 'react'; // Import useRef
import { Pattern } from './types';
import PatternDisplay from './components/Pattern';

const App = () => {
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePatternId, setActivePatternId] = useState<string | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true); // New state for indicator visibility
  const scrollContainerRef = useRef<HTMLDivElement>(null); // New ref for scroll container

  useEffect(() => {
    const fetchPatterns = async () => {
      const patternJsonModules = import.meta.glob('/src/data/patterns/**/*.json');
      const imageModules = import.meta.glob('/src/data/patterns/**/*.{svg,png,jpg,jpeg}', { eager: true });

      const loadedPatterns = await Promise.all(
        Object.entries(patternJsonModules).map(async ([path, resolver]) => {
          const module = await resolver() as { default: any };
          const patternData = module.default;
          const id = path.split('/').slice(-2, -1)[0];
          return { ...patternData, id, imageModules };
        })
      );

      setPatterns(loadedPatterns);
      if (loadedPatterns.length > 0) {
        setActivePatternId(loadedPatterns[0].id);
      }
      setIsLoading(false);
    };

    fetchPatterns();
  }, []);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current!;
    // Check if scrolled to the bottom
    if (scrollHeight - scrollTop <= clientHeight + 1) { // Added a small buffer for floating point inaccuracies
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  };

  const activePattern = patterns.find(p => p.id === activePatternId);

  return (
    <div className="scroll-container" ref={scrollContainerRef} onScroll={handleScroll}> {/* Add ref and onScroll */}
      <section className="scroll-page welcome-page">
        <header>
          <img src="images/favicon.svg" alt="Mandolin Icon" className="app-icon" />
          <h1>Mandolin Shapes</h1>
        </header>
        {showScrollIndicator && <div className="scroll-indicator">Scroll Down</div>} {/* Conditionally render */}
      </section>

      <section className="scroll-page patterns-page">
        {isLoading ? (
          <p>Loading patterns...</p>
        ) : (
          <>
            <div className="tabs-container">
              {patterns.map(pattern => (
                <button 
                  key={pattern.id} 
                  className={`tab-button ${pattern.id === activePatternId ? 'active' : ''}`}
                  onClick={() => setActivePatternId(pattern.id)}
                >
                  {pattern.name}
                </button>
              ))}
            </div>
            <div className="pattern-content">
              {activePattern && <PatternDisplay key={activePattern.id} pattern={activePattern} />}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default App;
