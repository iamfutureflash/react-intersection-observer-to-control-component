import { useInView } from 'react-intersection-observer';
import './App.css'
import ScrollWrapper from './components/ScrollWrapper';
import IAmBack from './IAmBack';
// import ControlledComponent from './components/ControlledComponent';
function App() {
  const { ref, inView } = useInView({
    "threshold": 0,
    "triggerOnce": true,
    "initialInView": false,
    "delay": 1000,
    "rootMargin": ""
  });
  console.log('inView', inView);
  return (
    <ScrollWrapper
      inView={inView}
    >
      <div ref={ref} className="inview-block">
        <h2>
          Element is inside the viewport: <strong>{inView.toString()}</strong>
        </h2>
        {inView &&
          <IAmBack />
        }
        {/* <ControlledComponent /> */}
      </div>
    </ScrollWrapper>
  );
}
export default App
