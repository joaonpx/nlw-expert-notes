import logo from "./assets/logo.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="Logo" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl outline-none font-semibold placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-500"></div>

      <div className="grid grid-cols-3 auto-rows-[250px] my-6 gap-6">
        <NewNoteCard />

        <NoteCard
          note={{
            date: new Date(),
            content: "Hello World",
          }}
        />
      </div>
    </div>
  );
}
