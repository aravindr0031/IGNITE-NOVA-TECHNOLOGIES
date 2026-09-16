import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-theme-yellow mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-xl text-theme-white/70 max-w-lg mb-8">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/">
          <Button variant="primary">Back Home</Button>
        </Link>
        <Link to="/projects">
          <Button variant="outline">Explore Projects</Button>
        </Link>
      </div>
    </div>
  );
}
