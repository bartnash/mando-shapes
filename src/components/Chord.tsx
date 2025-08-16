import { Chord as ChordData } from '../types';

interface ChordProps {
  chord: ChordData;
  imageSrc: string;
}

const Chord = ({ chord, imageSrc }: ChordProps) => {
  return (
    <div className="chord-item">
      <img src={imageSrc} alt={`${chord.name} chord`} />
      <p>{chord.romanNumeral}</p>
    </div>
  );
};

export default Chord;
