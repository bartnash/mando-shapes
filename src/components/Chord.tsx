import { Chord as ChordData } from '../types';

interface ChordProps {
  chord: ChordData;
  imageSrc: string;
  onClick?: () => void; // Add optional onClick prop
}

const Chord = ({ chord, imageSrc, onClick }: ChordProps) => { // Destructure onClick
  return (
    <div className="chord-item" onClick={onClick}> // Pass onClick to the div
      <img src={imageSrc} alt={`${chord.name} chord`} />
      <p>{chord.romanNumeral}</p>
    </div>
  );
};

export default Chord;
