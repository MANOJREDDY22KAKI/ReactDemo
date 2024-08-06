import "./App.css";

function App() {
  const cards = [
    {
      title: "Technology",
      description:
        "We build and optimize technology that makes your business grow.",
    },
    {
      title: "Operations",
      description:
        "We build and optimize technology that makes your business grow.",
    },
    {
      title: "R&D",
      description:
        "We build and optimize technology that makes your business grow.",
    },
    {
      title: "Sales",
      description:
        "We build and optimize technology that makes your business grow.",
    },
  ];

  return (
    <div className="flex flex-col h-screen justify-between items-center text-start bg-cover bg-center bg-[url('https://tinyurl.com/sky-with-starts')]">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:w-2/3 mt-8 lg:mt-0 lg:h-3/5">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white font-bold text-lg sm:text-2xl mb-4 text-center lg:text-4xl lg:mb-6">
            Thrive in the AI-first future
          </h1>
          <p className="text-white text-sm sm:text-base text-center lg:text-xl lg:max-w-2xl">
            AI isn't only about technology. Take the right steps now so your
            organization can thrive in the AI-first future from all angles—IT,
            operations, R&D, sales, marketing, ethics, and more.
          </p>
        </div>
      </div>
      <div className="w-full px-4 sm:w-2/3 mb-8">
        <div className="relative text-black grid sm:grid-cols-1 md:grid-cols-4 gap-4 rounded-md w-full">
          {cards.map((card, index) => (
            <div key={index} className="relative group h-auto md:h-32">
              <div className="bg-transparent rounded-lg  h-full flex items-center justify-center text-center transition-transform duration-300 group-hover:translate-y-[-80px] z-10">
                <p className="font-bold text-white">{card.title}</p>
              </div>
              <div className="absolute text-white inset-0 bg-transparent rounded-lg  opacity-0 transform transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-[-0px]">
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
