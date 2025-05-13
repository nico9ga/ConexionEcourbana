import { Link } from 'react-router-dom';
import { FaRecycle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-ecoGreen p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <FaRecycle className="text-2xl" />
          <span className="font-bold text-xl">Conexion EcoUrbana</span>
        </Link>
        <div className="flex gap-4">
          <Link to="/guide" className="hover:underline">Guía</Link>
          <Link to="/scraping" className="hover:underline">Datos</Link>
        </div>
      </div>
    </nav>
  );
}