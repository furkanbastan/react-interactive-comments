import './styles/reset.sass';
import './styles/variables.sass';
import './styles/global.sass';
import { Conversation } from './components/conversation'

function App() {
  console.log();
  return (
    <div className="container">
      <Conversation />
    </div>
  )
}

export default App
