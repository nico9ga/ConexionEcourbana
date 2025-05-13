import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaRecycle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ecoGreen text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaRecycle className="text-2xl" />
              <span className="text-xl font-bold">Conexion EcoUrbana</span>
            </div>
            <p className="text-green-100">
              Promoviendo prácticas sostenibles para un futuro más verde.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="GitHub">
                <FaGithub className="text-xl hover:text-green-300 transition" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-xl hover:text-green-300 transition" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-xl hover:text-green-300 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline text-green-100">Inicio</a></li>
                <li><a href="#" className="hover:underline text-green-100">Guía</a></li>
                <li><a href="#" className="hover:underline text-green-100">Centros</a></li>
                <li><a href="#" className="hover:underline text-green-100">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline text-green-100">Privacidad</a></li>
                <li><a href="#" className="hover:underline text-green-100">Términos</a></li>
                <li><a href="#" className="hover:underline text-green-100">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contacto</h3>
            <div className="flex items-center gap-2 mb-2">
              <MdEmail />
              <span className="text-green-100">Aun no tenemos correo :3</span>
            </div>
            <p className="text-green-100">
              ¿Tienes preguntas? Escríbenos y te ayudaremos.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 pt-6 text-center text-green-100">
          <p>© {currentYear} Conexion EcoUrbana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;