import PhotosList from "@/components/contents/photos/PhotosList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "Some taken (badly) photos.",
};

export default function PhotosPage() {
  return <PhotosList />;
}
