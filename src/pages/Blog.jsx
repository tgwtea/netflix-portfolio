import Hero from "../components/Hero";
import PostCarousel from "../components/PostCarousel";
import { latestPosts } from "../data/posts";

export default function Blog() {
  return (
    <div className="bg-black text-white">
      <Hero
        title="Featured Article"
        description="Discover how React and Tailwind make building UIs a breeze."
        backgroundUrl={latestPosts[0].image}
      />
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <PostCarousel title="Latest Posts" posts={latestPosts} />
      </div>
    </div>
  );
}