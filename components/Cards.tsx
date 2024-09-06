export const LoadingCards = () => {
    return (
      <div className="flex gap-3 m-10">
        {[...new Array(4)].map((i) => (
          <div
            key={"first-array" + i}
            className="h-20 w-full rounded-lg dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
    )
  }
  
export const Card = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <div
        className="transition ease-in-out delay-150 rounded-lg h-full w-full p-4 overflow-hidden
         bg-black border
         dark:border-white/[0.2] hover:border-slate-700 hover:border-8 hover:p-1 relative z-20">
  
        <div className="relative z-50">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };
  
export const CardTitle = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
        {children}
      </h4>
    );
  };
  
export const CardDescription = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <p
        className="text-zinc-400 tracking-wide leading-relaxed text-sm">
        {children}
      </p>
    );
  };