import React from 'react';
// import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Features } from '../components/landing/Features';
import { Offers } from '../components/landing/Offers';
import { Category } from '../components/landing/Category';
import { Testimonials } from '../components/landing/Testimonials';

export function Home() {
  return (
    <div>
      {/* <section id="navbar">
        <Navbar />
      </section> */}
      <section id="hero">
        <Hero />
      </section>
      <section id="category">
        <Category />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="offers">
        <Offers />
      </section>
      <section id="testonials">
        <Testimonials />
      </section>
    </div>
  );
}


