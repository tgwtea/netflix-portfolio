export default function Hero({ title, description, backgroundUrl }) {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      <div className="relative z-10 flex flex-col justify-end h-full p-8">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg font-medium max-w-2xl mb-6">{description}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
            Read
          </button>
          <button className="bg-gray-800 bg-opacity-60 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            Bookmark
          </button>
        </div>
      </div>
    </div>
  );
}