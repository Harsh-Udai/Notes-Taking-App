import Main from './Components/main';
import './App.css';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div>
        <AnimatedCursor
        innerSize={20}
        outerSize={15}
        color='255, 155, 100'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
    />
        <Main />
     
    </div>
  );
}

export default App;
