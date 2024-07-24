import { FaGithub } from "react-icons/fa6";

export default function App() {
  return (
    <div className="max-w-xl mx-auto w-11/12 py-8">
      <header className="pt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-[#eae0d5] text-3xl font-semibold">Fernando Villalba</h1>
          <a href="https://github.com/fervillalbag" target="_blank">
            <FaGithub className="text-[#eae0d5] text-3xl" />
          </a>
        </div>

        <p className="mt-3 text-[#adb5bd]">Soy <i className="text-white">Frontend Developer</i> con más de 5 años de experiencia construyendo sitios y aplicaciones web con React y Next.js. Priorizo una experiencia de usuario fluida con un diseño minimalista y UI optimista.</p>
      </header>

      <section className="my-5">
        <h3 className="text-xl font-semibold text-[#eae0d5]">Trabajos</h3>
        <hr className="bg-neutral-700 mt-2 border-none h-[1px]" />

        <div className="mt-3">
          <article>
            <h4 className="font-semibold text-lg text-[#eae0d5]">Wantit</h4>
            <p className="mt-2 text-[#adb5bd]">Wantit es un proyecto que busca conectar a sus usuarios con nuevos locales o servicios que necesitan.</p>
            <a className="mt-1 block text-[#eae0d5] font-semibold" href="https://wantitpy.com" target="_blank">Ir al sitio</a>
          </article>
        </div>
      </section>

      <section className="my-5">
        <h3 className="text-xl font-semibold text-[#eae0d5]">Open Source</h3>
        <hr className="bg-neutral-700 mt-2 border-none h-[1px]" />

        <div className="mt-3 space-y-4">
          <article>
            <h4 className="font-semibold text-lg text-[#eae0d5]">SUIC.dev</h4>
            <p className="mt-2 text-[#adb5bd]">Este proyecto es una biblioteca de componentes diseñada para proporcionar componentes de interfaz de usuario reutilizables y personalizables para aplicaciones React.</p>
            <a className="mt-1 block text-[#eae0d5] font-semibold" href="https://www.npmjs.com/package/suic.dev" target="_blank">Ir al sitio</a>
          </article>
          <article>
            <h4 className="font-semibold text-lg text-[#eae0d5]">Delpi</h4>
            <p className="mt-2 text-[#adb5bd]">API centralizada y estandarizada que ofrece información sobre los departamentos, ciudades y barrios de Paraguay, diseñada para ser utilizada por otros desarrolladores.</p>
            <a className="mt-1 block text-[#eae0d5] font-semibold" href="https://delpi.dev/" target="_blank">Ir al sitio</a>
          </article>
        </div>
      </section>

      <section className="my-5">
        <h3 className="text-xl font-semibold text-[#eae0d5]">Otros</h3>
        <hr className="bg-neutral-700 mt-2 border-none h-[1px]" />

        <div className="mt-3 space-y-4">
          <article>
            {/* <h4 className="font-semibold text-lg text-[#eae0d5]">SUIC.dev</h4> */}
            <p className="mt-2 text-[#adb5bd]">Obra abstracta de un artista desarrollada con React y TailwindCSS.</p>
            <div className="my-3">
              <img src="/site/art.png" alt="" className="h-72 object-contain" />
            </div>
            <div>
            <a className="mt-1 block text-[#eae0d5] font-semibold" href="https://drawing-with-code.vercel.app/" target="_blank">Ir al sitio</a>
            <a className="mt-2 block text-[#eae0d5] font-semibold" href="https://github.com/fervillalbag/drawing-with-code" target="_blank">Ir al github</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
