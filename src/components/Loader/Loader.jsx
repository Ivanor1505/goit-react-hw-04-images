import { Audio } from 'react-loader-spinner';
import { LoderStyled } from './Loader.styled';

export const Loader = () => {
    return (<LoderStyled>
    ;
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      // wrapperStyle
      // wrapperClass
    />
  </LoderStyled>)
  };
