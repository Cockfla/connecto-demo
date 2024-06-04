import Image from "next/image";
export default function Home() {
  return (
    <body className="bg-white w-full h-full">
      <header className="bg-blue-950 bg-opacity-30 px-6 shadow">
        <div className="flex h-20 items-center justify-between">
          <a href="#">
            <Image src="/vercel.svg" width={100} height={100} alt="" />
          </a>
          <strong className="text-4xl text-black">ConnecTo</strong>
          <Image src="/icon-user.svg" width={40} height={40} alt="" />
        </div>
      </header>
      <div className="w-full flex items-center justify-center">
        <section className="w-4/5 rounded-3xl bg-gray-300 p-10 m-5">
          <p className="text-black text-4xl">
            Tu plataforma ideal para conectar emprendedores visionarios con
            medios de comunicación influyentes.
          </p>
          <p className="text-black text-base pt-6">
            En ConnecTo, entendemos la importancia de visibilizar tu proyecto y
            encontrar las oportunidades adecuadas para crecer. Nuestra
            plataforma te ofrece una experiencia única y personalizada, diseñada
            para potenciar tus conexiones y ayudarte a alcanzar tus metas.
          </p>
        </section>
      </div>
    </body>
  );
}
