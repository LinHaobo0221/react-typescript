import { FC, memo } from 'react';
import { Base, Mode } from './styles';

type Props = {
  mode: 0 | 1;
  onChangeMode: (m: 0 | 1) => void;
};

const SwitchMode: FC<Props> = ({ mode, onChangeMode }) => {
  return (
    <Base>
      <Mode onClick={() => onChangeMode(0)}>
        <input type="radio" name="modeSwitch" value={0} checked={mode === 0} />
        scroll
      </Mode>
      <Mode onClick={() => onChangeMode(1)}>
        <input type="radio" name="modeSwitch" value={1} checked={mode === 1} />
        pagination
      </Mode>
    </Base>
  );
};

export default memo(SwitchMode);
