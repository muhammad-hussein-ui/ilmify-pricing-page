import Button from "./components/Button";

function App() {
  return (
    <div className="space-y-4 p-8">
      <Button href="#plans">Primary</Button>
      <Button href="#plans" variant="accent">
        Accent
      </Button>
    </div>
  );
}

export default App;
