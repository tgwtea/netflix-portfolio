import { Link } from "react-router-dom";

const profiles = [
  {
    name: "About",
    img: "https://i.imgur.com/YdwmHD6.jpeg",
    route: "about",
  },
  {
    name: "Code",
    img: "https://i.imgur.com/xKJr0h9.jpeg",
    route: "code",
  },
  {
    name: "Blog",
    img: "https://i.imgur.com/lsXC5uj.jpeg",
    route: "blog",
  }
];

export default function ProfileSelect() {

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10">Who's watching?</h1>
      <div className="flex gap-8">
        {profiles.map((profile) => (
          <Link
            key={profile.name}
            to={`/${profile.route}`}
            className="flex flex-col items-center cursor-pointer group"
          >
            <img
              src={profile.img}
              alt={profile.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-md object-cover border-2 border-transparent group-hover:border-white transition-all duration-300"
            />
            <p className="mt-2 text-sm md:text-base text-zinc-400 group-hover:text-white">
              {profile.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}