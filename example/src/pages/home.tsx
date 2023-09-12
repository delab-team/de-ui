import { useState, FC } from 'react';

import { Avatar, Button, TextArea } from '../../../src/'

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
    const [text, setText] = useState('');
    const [error, setError] = useState(false);
  
    const handleTextChange = (newValue: string) => {
      setText(newValue);
      setError(false);
    };
  
    const handleSubmit = () => {
      if (text.length < 5) {
        setError(true);
      } else {
      }
    };

    return (
        <div>
        <TextArea
          value={text}
          onChange={handleTextChange}
          placeholder="Введите текст"
          className="custom-styles"
          isError={error}
          isLarge
        />
        {error && <p>Текст слишком короткий.</p>}
        <Button onClick={handleSubmit}>Отправить</Button>
      </div>
  
    )
}
