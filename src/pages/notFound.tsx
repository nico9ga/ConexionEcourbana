import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Página no encontrada</h1>
      <p className="text-xl mb-6">Lo sentimos, la página que buscas no existe.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-ecoGreen text-white rounded-lg hover:bg-green-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}