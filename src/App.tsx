function App() {
  return (
    // <div className="container mx-auto relative">
    //   <div>
    //     <h1 className="text-5xl font-bold text-orange-400 text-center mt-32">Hello world!!!!!!!!!!!</h1>
    //     <button className="rounded bg-orange-500 hover:bg-orange-400 transition-colors easy-in-out duration-300 mt-10 mx-auto block border border-white border-solid">
    //       Click me
    //     </button>

    //     <div className="bg-blue-400 mt-5 w-24 h-32">width & height</div>

    //     <div className="flex items-center gap-5">
    //       <div className="bg-blue-300 w-20 h-20" />
    //       <div className="bg-blue-300 w-20 h-20" />
    //     </div>

    //     <div className="grid grid-cols-2 gap-5">
    //       <div className="bg-blue-500 h-20 " />
    //       <div className="bg-blue-500 h-20" />
    //     </div>
    //   </div>
    // </div>

    <div>
      <h1 className="text-center font-bold text-xl mt-10 after:content-['RED\_GROUP'] after:block">Chanel</h1>
      <input
        type="text"
        placeholder="Enter Email"
        className=" outline-0 border border-solid  border-white/50 transition-colors easy-in-out duration-300 focus:border-orange-400 mx-auto block mt-10 rounded py-1.5
        placeholder:text-blue-300"
      />
      <button className="rounded bg-orange-500 hover:bg-orange-400 transition-colors easy-in-out duration-300 mt-10 mx-auto block border border-white border-solid">
        Click me
      </button>

      <div
        className="mx-auto flex items-center justify-center mt-10 w-30 h-30 bg-orange-400 rounded 
      shadow font-bold md:bg-blue-400 lg:bg-purple-400 xl:bg-red-400 2xl:bg-green-400 "
      >
        ADAPTIVE
      </div>

      <div></div>
    </div>
  );
}

export default App;
