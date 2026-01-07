
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image_url: string;
  video_url?: string;
  created_at?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image_url: string;
  created_at?: string;
}

export interface Tool {
  name: string;
  description: string;
  logo: string;
}
