import { Header } from './components/Header';
import { TimerSection } from './components/TimerSection';
import { TasksSection } from './components/TasksSection';
import { useToggle } from './hooks/useToggle';

function App() {
  const [isTimerFocused, toggle] = useToggle();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <TimerSection isTimerFocused={isTimerFocused} onClick={toggle} />
        <TasksSection isTimerFocused={isTimerFocused} onClick={toggle} />
      </main>
    </div>
  );
}

export default App;
