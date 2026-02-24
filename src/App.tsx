/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
