export function TechSection() {
  return (
    <div>
      <h3 className={"font-semibold text-4xl text-center uppercase"}>
        Teknologi terbaik
      </h3>
      <h5 className="text-center text-2xl font-semibold text-slate-500 capitalize mt-3 tracking-widest">
        {"Untuk Klien Kami"}
      </h5>
      {/*<div className="w-full lg:w-full flex mx-auto mt-16 relative">*/}
      {/*  <img alt="tech" className="lg:hidden block" src={ASSETS.TECH_MOBILE} />*/}
      {/*  <img alt="tech" className="lg:block hidden" src={ASSETS.TECH_STACK} />*/}
      {/*  <div className="absolute flex items-center justify-center w-full h-full pointer-events-none">*/}
      {/*    <img*/}
      {/*      alt="1"*/}
      {/*      className="h-[1000px] opacity-[15%]"*/}
      {/*      src="/assets/shadow/2.png"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={"mt-10 grid gap-8"}>
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className={`logos flex gap-8 ${idx % 2 === 0 ? "scroll-left" : "scroll-right"}`}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <img
                key={i}
                alt={i.toString()}
                className={"border w-60 p-5 logos-slide "}
                src={"/assets/tech/" + (i + 1 + idx * 10) + ".png"}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
