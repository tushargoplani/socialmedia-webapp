import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Mern Media - About Us";
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="mb-6 text-lg leading-relaxed">
        Welcome to <strong className="text-blue-600">Mern Media</strong>—your go-to social media platform designed to connect people, share moments, and foster meaningful interactions. Whether you're here to keep in touch with friends, explore new content, or simply express yourself, we have everything you need to stay connected.
      </p>
      <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 pl-5">
        <li><strong>User Accounts:</strong> Create your personal profile to connect with others and showcase your interests.</li>
        <li><strong>Upload and View Posts:</strong> Share updates, photos, and videos, or browse content from your network and beyond.</li>
        <li><strong>Engage with Content:</strong> Like and comment on posts to share your thoughts and show appreciation.</li>
        <li><strong>Profile Management:</strong> Update your profile information, including your bio, profile picture, and more.</li>
        <li><strong>Connect Through Chat:</strong> Communicate directly with friends and other users via our integrated chat feature.</li>
        <li><strong>Explore Profiles:</strong> Visit other users’ profiles to see their posts and learn more about them.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-6 text-lg leading-relaxed">
        At Mern Media, our mission is to provide a dynamic and engaging platform where users can express themselves, connect with others, and discover new interests. We are committed to creating a safe and vibrant community where everyone feels valued and heard.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
      <p className="text-lg leading-relaxed">
        Join our growing community and start sharing your story today! Whether you’re looking to reconnect with old friends or make new ones, Mern Media is the place to be.
      </p>
    </div>
  );
}
