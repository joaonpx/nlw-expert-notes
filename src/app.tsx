import logo from "./assets/logo.svg";

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

      <div className="grid grid-cols-3 auto-rows-[250px] my-6">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm text-slate-200 font-medium">
            Adicionar nota
          </span>
          <p className="text-sm text-slate-400 leading-6">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>
      </div>
    </div>
  );
}
