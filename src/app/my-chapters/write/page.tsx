import ChapterBuilder from "./_components/ChapterBuilder";

const Writer = () => {
  return (
    <section className="absolute top-16 right-0 bottom-12 left-0 container mx-auto flex flex-col">
      <div className="flex justify-center py-2">
        <h1 className="text-4xl"> Hello, Amigo!</h1>
      </div>
      <div className="flex flex-1 gap-6 overflow-y-auto">
        <div className="w-full space-y-4 overflow-y-auto border-r p-5 md:w-1/2">
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
          <div className="bg-primary/5 border-primary h-20 w-full rounded-2xl border shadow-2xl"></div>
        </div>
        <div className="w-full overflow-y-auto md:w-1/2">Right</div>
      </div>
      <div className="h-8 border-t">page-footer-not-layout</div>
    </section>
  );
};
export default Writer;
