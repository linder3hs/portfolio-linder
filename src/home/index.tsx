import { Hero, RecentPosts } from "@/components";

export default function HomePage() {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-4">
      <Hero />
      <RecentPosts />
    </div>
  );
}
