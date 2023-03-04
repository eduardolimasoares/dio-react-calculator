import { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import {Container, Content, Row } from './styles'

const App = () => {

  const [currentNumber, setCurrentNumber ] = useState(0)

  const handlerClear = () => {
    setCurrentNumber(0)
  }

  const handlerAddNumber = (number) => {
    setCurrentNumber(prev => `${prev == '0' ? '': prev}${number}` )
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={() => handlerClear('C')}/>
          <Button label="%" onClick={() => handlerAddNumber('%')}/>
          <Button label="*" onClick={() => handlerAddNumber('*')}/>
          <Button label="/" onClick={() => handlerAddNumber('/')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handlerAddNumber('1')}/>
          <Button label="2" onClick={() => handlerAddNumber('2')}/>
          <Button label="3" onClick={() => handlerAddNumber('3')}/>
          <Button label="+" onClick={() => handlerAddNumber('+')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handlerAddNumber('4')}/>
          <Button label="5" onClick={() => handlerAddNumber('5')}/>
          <Button label="6" onClick={() => handlerAddNumber('6')}/>
          <Button label="-" onClick={() => handlerAddNumber('-')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handlerAddNumber('7')}/>
          <Button label="8" onClick={() => handlerAddNumber('8')}/>
          <Button label="9" onClick={() => handlerAddNumber('9')}/>
          <Button label="=" onClick={() => handlerAddNumber('=')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
