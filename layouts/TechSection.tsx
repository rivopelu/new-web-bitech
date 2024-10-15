export function TechSection() {
  return (
    <div>
      <h3 className={"font-semibold text-4xl text-center uppercase"}>
        Teknologi terbaik
      </h3>
      <h5 className="text-center text-2xl font-semibold text-slate-500 capitalize mt-3 tracking-widest">
        {"Untuk Klien Kami"}
      </h5>
      <div className={"mt-10 lg:grid lg:gap-8 lg:block hidden"}>
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className={`e flex gap-8 ${idx % 2 === 0 ? "scroll-left" : "scroll-right"}`}
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
