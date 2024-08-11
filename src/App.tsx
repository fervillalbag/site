import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }, []);

  useEffect(() => {
    if (currentTheme === "light") {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.add("dark");
    }
  }, [currentTheme]);

  return (
    <div className="max-w-xl mx-auto w-11/12 py-8">
      <header className="pt-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col lg:flex-row items-baseline gap-x-2">
            <span className="text-[#333] dark:text-[#eae0d5] opacity-80 dark:opacity-60 text-2xl lg:text-3xl">
              Hola, me llamo
            </span>
            <h1 className="text-[#333] dark:text-[#eae0d5] text-2xl lg:text-3xl font-semibold">
              Fernando Villalba
            </h1>
          </div>
          <button
            onClick={() => {
              if (currentTheme === "light") {
                setCurrentTheme("dark");
                localStorage.setItem("theme", "dark");
              } else {
                setCurrentTheme("light");
                localStorage.setItem("theme", "light");
              }
            }}
          >
            {currentTheme === "dark" ? (
              <Sun className="text-[#333] dark:text-[#eae0d5]" />
            ) : (
              <MoonStar className="text-[#333] dark:text-[#eae0d5]" />
            )}
          </button>
        </div>

        <p className="mt-3 text-[#444] dark:text-[#adb5bd]">
          Soy{" "}
          <i className="text-[#333] dark:text-[#eae0d5] font-semibold">
            Frontend Developer
          </i>{" "}
          con más de 5 años de experiencia construyendo sitios y
          aplicaciones web con React y Next.js. Me enfoco en crear
          experiencias de usuario fluidas, con diseños minimalistas y
          una interfaz optimista.
        </p>
      </header>

      <section className="my-16">
        <img
          src={`/site/banner${
            currentTheme === "dark" ? ".jpg" : "-light.png"
          }`}
          alt=""
          className="h-96 object-cover grayscale-[100%]"
        />
      </section>

      <section className="my-16">
        <h3 className="text-2xl font-semibold text-[#333] dark:text-[#eae0d5] border-b dark:border-neutral-500 border-neutral-700 pb-2.5">
          Trabajos
        </h3>

        <div className="mt-3">
          <article>
            <h4 className="font-semibold text-lg text-[#333] dark:text-[#eae0d5]">
              Wantit
            </h4>
            <p className="mt-2 text-[#444] dark:text-[#adb5bd]">
              Wantit es un proyecto que busca conectar a sus usuarios
              con nuevos locales o servicios que necesitan.
            </p>
            <div className="my-2">
              <h3 className="text-[#333] dark:text-[#eae0d5] font-semibold">
                Tecnologias:
              </h3>
              <p className="text-[#444] dark:text-[#adb5bd]">
                React, TailwindCSS, Typescript, NestJS, MongoDB,
                Prisma, Cloudinary
              </p>
            </div>
            <a
              className="mt-1 border dark:border-[#eae0d5] border-[#333] px-5 py-1.5 rounded-md inline-block text-[#333] dark:text-[#eae0d5] font-semibold"
              href="https://wantitpy.com"
              target="_blank"
            >
              Ver sitio
            </a>
          </article>
        </div>
      </section>

      <section className="my-16">
        <h3 className="text-2xl font-semibold text-[#333] dark:text-[#eae0d5] border-b dark:border-neutral-500 border-neutral-700 pb-2.5">
          Open Source
        </h3>

        <div className="mt-3 space-y-6">
          <article>
            <h4 className="font-semibold text-lg text-[#333] dark:text-[#eae0d5]">
              SUIC.dev
            </h4>
            <p className="mt-2 text-[#444] dark:text-[#adb5bd]">
              Esta biblioteca de componentes ofrece un calendario
              simple y minimalista, diseñado para proporcionar
              elementos de interfaz de usuario reutilizables y
              personalizables para aplicaciones React.
            </p>
            <div className="my-2">
              <h3 className="text-[#333] dark:text-[#eae0d5] font-semibold">
                Tecnologias:
              </h3>
              <p className="text-[#444] dark:text-[#adb5bd]">
                React, TailwindCSS, Typescript
              </p>
            </div>
            <a
              className="mt-1 border dark:border-[#eae0d5] border-[#333] px-5 py-1.5 rounded-md inline-block text-[#333] dark:text-[#eae0d5] font-semibold"
              href="https://www.npmjs.com/package/suic.dev"
              target="_blank"
            >
              Ver sitio
            </a>
          </article>
          <article>
            <h4 className="font-semibold text-lg text-[#333] dark:text-[#eae0d5]">
              Delpi
            </h4>
            <p className="mt-2 text-[#444] dark:text-[#adb5bd]">
              API centralizada y estandarizada que ofrece información
              sobre los departamentos, ciudades y barrios de Paraguay,
              diseñada para ser utilizada por otros desarrolladores.
            </p>
            <div className="my-2">
              <h3 className="text-[#333] dark:text-[#eae0d5] font-semibold">
                Tecnologias:
              </h3>
              <p className="text-[#444] dark:text-[#adb5bd]">
                React, TailwindCSS, Typescript
              </p>
            </div>
            <a
              className="mt-1 border dark:border-[#eae0d5] border-[#333] px-5 py-1.5 rounded-md inline-block text-[#333] dark:text-[#eae0d5] font-semibold"
              href="https://delpi.dev/"
              target="_blank"
            >
              Ver sitio
            </a>
          </article>
        </div>
      </section>

      <section className="my-16">
        <h3 className="text-2xl font-semibold text-[#333] dark:text-[#eae0d5] border-b dark:border-neutral-500 border-neutral-700 pb-2.5">
          Otros
        </h3>

        <div className="mt-3 space-y-4">
          <article>
            {/* <h4 className="font-semibold text-lg text-[#333] dark:text-[#eae0d5]">SUIC.dev</h4> */}
            <p className="mt-2 text-[#444] dark:text-[#adb5bd]">
              Obra abstracta de un artista desarrollada con React y
              TailwindCSS.
            </p>
            <div className="my-3">
              <img
                src="/site/art.png"
                alt=""
                className="object-contain grayscale-[100%]"
              />
            </div>
            <div className="my-2">
              <h3 className="text-[#333] dark:text-[#eae0d5] font-semibold">
                Tecnologias:
              </h3>
              <p className="text-[#444] dark:text-[#adb5bd]">
                CSS, TailwindCSS
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <a
                className="inline-block px-5 py-1.5 rounded-md border border-[#333] dark:border-[#eae0d5] text-[#333] dark:text-[#eae0d5] font-semibold"
                href="https://drawing-with-code.vercel.app/"
                target="_blank"
              >
                Ver sitio
              </a>
              <a
                className="dark:bg-white bg-[#333] inline-block px-5 py-1.5 rounded-md border border-[#333] dark:border-[#eae0d5] text-white dark:text-[#333] font-semibold"
                href="https://github.com/falcondpr/drawing-with-code"
                target="_blank"
              >
                Ver repositorio
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="my-16">
        <img
          src={`/site/github-${
            currentTheme === "dark" ? "light" : "dark"
          }.png`}
          alt=""
          className="h-10 object-contain"
        />
        <a
          className="mt-3 border dark:border-[#eae0d5] border-[#333] px-5 py-1.5 rounded-md inline-block text-[#333] dark:text-[#eae0d5] font-semibold"
          href="https://github.com/falcondpr"
          target="_blank"
        >
          Ir al perfil de Github
        </a>
      </section>
    </div>
  );
}
