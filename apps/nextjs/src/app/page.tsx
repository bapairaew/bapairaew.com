import HeroSection from "@/components/contents/hero/HeroSection";
import PhotosSection from "@/components/contents/photos/PhotosSection";
import PostsSection from "@/components/contents/posts/PostsSection";
import ProjectsSection from "@/components/contents/projects/ProjectsSection";

export default async function AboutPage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <PostsSection />
      <PhotosSection />
    </>
  );
}
