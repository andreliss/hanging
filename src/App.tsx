import { useEffect, useState } from 'react';
import './App.css';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWords';


function App() {
  const [ word, setWord ] = useState( getRandomWord() );
  const [ hiddenWord, setHiddenWord ] = useState( '_ '.repeat(word.length) );
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose ] = useState( false );
  const [ won, setWon ] = useState( false );

//determinar si la persona perdió
  useEffect( () => {
    if ( attempts >= 8 ) {
      setLose( true )
    }
  }, [ attempts ] );

  //determinar si la persona ganó
  useEffect( () => {

    const currentHiddenWord = hiddenWord.split(' ').join('');
    if ( currentHiddenWord === word ) {
      setWon( true );
    }
  }, [ hiddenWord ] );


  const checkLetter= ( letter: string ) => {
    if ( lose ) return;

    if ( !word.includes(letter) ){
      setAttempts(Math.min( attempts + 1, 8));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for( let i = 0; i < word.length; i++ ){
      if ( word[i] === letter ) {
        hiddenWordArray[i] = letter;
      }

    }
    setHiddenWord( hiddenWordArray.join(' ') );
  }

  const newGame = () => {
    const newWord = getRandomWord();
    setWord( newWord );
    setHiddenWord( '_ '.repeat(newWord.length) );
    setAttempts( 0 );
    setLose (false );
    setWon( false );
  }

  return (
    <div className= "App">
      <h3>Juego del Ahorcado con Osito Panda</h3>

      <HangImage imageNumber={ attempts} />   
      <h3>{ hiddenWord }</h3>

      <h3>Intentos={ attempts } </h3>
      {
        ( lose )
        ? <h3>Perdió. La palabra es: { word } </h3>
        : ' '
      }

      {
        ( won )
        ? <h3>Felicidades. Adivinó la palabra</h3>
        : ' '
      }

      {letters.map( (letter)=> (
        <button 
        onClick={()=>checkLetter(letter)}
        key={letter}>
          { letter }
        </button>
      ))
      }
      <br ></br >
      <button onClick={ newGame }>Nuevo juego</button>

    </div>
  )
};



export default App;
