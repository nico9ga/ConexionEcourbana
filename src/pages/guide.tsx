import React from 'react';
import { RecyclingItem } from '../components/RecyclingItem';
import { RECYCLING_DATA, CATEGORIES } from '../data/recyclingData';
import { FaSearch, FaRecycle, FaTrash } from 'react-icons/fa';

const Guide = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredItems = RECYCLING_DATA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                          item.category === CATEGORIES.find(cat => cat.id === selectedCategory)?.name;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ecoGreen mb-3 flex justify-center items-center gap-2">
            <FaRecycle className="text-3xl" />
            Guía Completa de Reciclaje
          </h1>
          <p className="text-lg text-gray-600">
            Encuentra cómo reciclar correctamente cada material
          </p>
        </div>

        {/* Buscador y Filtros */}
        <div className="mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar materiales..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-ecoGreen focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'all' ? 'bg-ecoGreen text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Todos
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full ${selectedCategory === category.id ? category.color + ' ' + category.textColor + ' font-bold' : 'bg-gray-200 text-gray-700'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resultados */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <RecyclingItem
                key={item.id}
                name={item.name}
                category={item.category}
                description={item.description}
                recyclable={item.recyclable}
                specialInstructions={item.disposalInstructions}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <FaTrash className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700">No se encontraron resultados</h3>
            <p className="text-gray-500 mt-2">Prueba con otros términos de búsqueda o categorías</p>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            ♻️ ¿Por qué reciclar?
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-blue-700">
            <li>Reduce la contaminación ambiental</li>
            <li>Ahorra energía y recursos naturales</li>
            <li>Disminuye la cantidad de residuos en vertederos</li>
            <li>Contribuye a la economía circular</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guide;