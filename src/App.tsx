import { useState, useEffect } from 'react';
import { Pattern } from './types';
import PatternDisplay from './components/Pattern';

const App = () => {
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePatternId, setActivePatternId] = useState<string | null>(null);

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

  const activePattern = patterns.find(p => p.id === activePatternId);

  return (
    <div className="scroll-container">
      <section className="scroll-page welcome-page">
        <header>
          <img src="images/favicon.svg" alt="Mandolin Icon" className="app-icon" />
          <h1>Mandolin Chord Shapes</h1>
        </header>
        <div className="scroll-indicator">Scroll Down</div>
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
