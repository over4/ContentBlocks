import './App.css';
import Hero from "./components/Hero/Hero"
import Middle from "./components/Middle/middle"
import VideoPlayer from './components/Video/video';

// button purple: #a855f7
// green button: #22c55e

// purple text: rgb(107 33 168)
// purple text background: rgba(168, 85, 247, .2)

// green text: rgb(17 94 89)
// green text background: rgba(20, 184, 166, .2)


// purple gradient: To: #9089fc From: #ff80b5
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Middle></Middle>
      <VideoPlayer></VideoPlayer>
    </div>
  );
}

export default App;
