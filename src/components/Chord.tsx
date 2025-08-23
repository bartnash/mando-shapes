import { Chord as ChordData } from '../types';

interface ChordProps {
  chord: ChordData;
  imageSrc: string;
  onClick?: () => void; // Add optional onClick prop
}

const Chord = ({ chord, imageSrc, onClick }: ChordProps) => { 
  return (
    <div className="chord-item" onClick={onClick}>
      <img src={imageSrc} alt={`${chord.name} chord`} />
      <p>{chord.romanNumeral}</p>
    </div>
  );
};

export default Chord;
