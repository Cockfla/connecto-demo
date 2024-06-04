"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <body className="bg-slate-200 w-full h-screen">
      <header className="bg-slate-200  px-6 shadow">
        <div className="flex h-20 items-center justify-between bg-slate-200 w-full">
          <strong className="text-4xl text-blue-950">ConnecTo</strong>
          <div>
            <button
              className="bg-sky-400 px-2 py-1 rounded-xl border shadow text-white mr-2"
              onClick={handleRegisterClick}
            >
              Registrarse
            </button>
            <button
              className="bg-sky-400 px-2 py-1 rounded-xl border shadow text-white"
              onClick={handleLoginClick}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>
      <section className=" bg-backg bg-cover md:bg-contain w-full flex items-center justify-center">
        <div className="w-4/5 rounded-3xl bg-white bg-opacity-90 p-10 m-5 text-blue-950 shadow-xl">
          <p className=" text-4xl">
            Tu plataforma ideal para conectar emprendedores visionarios con
            medios de comunicación influyentes.
          </p>
          <p className=" text-base pt-6">
            En ConnecTo, entendemos la importancia de visibilizar tu proyecto y
            encontrar las oportunidades adecuadas para crecer. Nuestra
            plataforma te ofrece una experiencia única y personalizada, diseñada
            para potenciar tus conexiones y ayudarte a alcanzar tus metas.
          </p>
        </div>
      </section>
      <article className="bg-slate-200 w-full flex flex-col  items-center justify-center ">
        <p className="text-blue-950 text-3xl p-3 drop-shadow">
          ¿Qué ofrecemos?
        </p>
        <div className="flex flex-grow flex-wrap justify-around">
          <div className="w-72 bg-sky-400 text-white px-6 py-5 rounded-2xl shadow-xl mr-4 mb-4 hover:bg-white hover:text-sky-400 cursor-pointer hover:shadow-2xl">
            <p className="text-xl">
              <strong>Networking Efectivo</strong>
            </p>
            <p className="text-sm">
              Conéctate con periodistas, bloggers y medios de comunicación
              interesados en tu industria y comparte tus innovaciones con el
              mundo.
            </p>
          </div>
          <div className="w-72 bg-sky-400 text-white px-6 py-5 rounded-2xl shadow-xl mr-4 mb-4 hover:bg-white hover:text-sky-400 cursor-pointer hover:shadow-2xl">
            <p className="text-xl">
              <strong>Recomendaciones Personalizadas: </strong>
            </p>
            <p className="text-sm">
              Gracias a nuestros avanzados algoritmos de inteligencia
              artificial, recibirás sugerencias de contactos y oportunidades
              adaptadas a tus intereses y necesidades.
            </p>
          </div>
          <div className="w-72 bg-sky-400 text-white px-6 py-5 rounded-2xl shadow-xl mr-4 mb-4 hover:bg-white hover:text-sky-400 cursor-pointer hover:shadow-2xl">
            <p className="text-xl">
              <strong>Gestión de Proyectos y Publicaciones: </strong>
            </p>
            <p className="text-sm">
              Crea y gestiona tus proyectos, publica artículos, y destaca tu
              trabajo ante una audiencia relevante.
            </p>
          </div>
          <div className="w-72 bg-sky-400 text-white px-6 py-5 rounded-2xl shadow-lg mr-4 mb-4 hover:bg-white hover:text-sky-400 cursor-pointer hover:shadow-2xl">
            <p className="text-xl">
              <strong>Comunicación Directa:</strong>
            </p>
            <p className="text-sm">
              Interactúa fácilmente con los medios a través de nuestro sistema
              de mensajería interna, facilitando colaboraciones y entrevistas.
            </p>
          </div>
        </div>
      </article>
    </body>
  );
}
