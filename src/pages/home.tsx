import { RecyclingItem } from '../components/RecyclingItem';
import { FaRecycle, FaLeaf, FaGlobeAmericas, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaRecycle className="text-4xl text-ecoGreen" />,
      title: "Clasificación Inteligente",
      description: "Te ayudamos a identificar y separar correctamente cada tipo de residuo"
    },
    {
      icon: <FaLeaf className="text-4xl text-ecoGreen" />,
      title: "Impacto Ambiental",
      description: "Conoce cómo tu contribución ayuda a reducir la huella ecológica"
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-ecoGreen" />,
      title: "Comunidad Global",
      description: "Forma parte de una red de ciudadanos comprometidos con el planeta"
    },
    {
      icon: <FaUsers className="text-4xl text-ecoGreen" />,
      title: "Educación Colectiva",
      description: "Aprende y enseña mejores prácticas de reciclaje"
    }
  ];

  const stats = [
    { value: "8M+", label: "Toneladas de residuos generados anualmente en Colombia" },
    { value: "17%", label: "De los residuos se recicla actualmente" },
    { value: "2030", label: "Meta nacional para aumentar el reciclaje al 30%" }
  ];

  const goToGuide = () => {
    navigate('/guide'); // Coincide con la ruta definida en tu App.tsx
  };

  return (
    <div className="min-h-screen bg-ecoWhite">
      {/* Hero Section */}
      <section className="relative bg-ecoBlue text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Transformando Residuos en Recursos</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            En Conexión EcoUrbana creemos que cada acción cuenta. Juntos podemos construir 
            ciudades más sostenibles mediante el reciclaje consciente y la economía circular.
          </p>
          <button 
            onClick={goToGuide}
            className="bg-ecoGreen hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Empieza a Reciclar
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ecoWhite to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-ecoWhite">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-ecoBlue mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 mb-6">
                En Conexión EcoUrbana trabajamos para cerrar el ciclo de los materiales mediante 
                sistemas innovadores de recolección y educación ambiental, transformando los 
                residuos en valiosos recursos para nuestra sociedad.
              </p>
              <p className="text-lg text-gray-700">
                Buscamos reducir el impacto ambiental urbano promoviendo la economía circular 
                y generando conciencia sobre el consumo responsable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Recycle Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ecoBlue mb-16">¿Por qué el reciclaje es vital hoy?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Crisis de residuos urbanos</h3>
              <p className="text-gray-700 mb-6">
                Las ciudades generan el 80% de los residuos globales. En Colombia producimos más de 
                12 millones de toneladas anuales, y solo reciclamos una pequeña fracción. Los rellenos 
                sanitarios están al límite de su capacidad.
              </p>
              <p className="text-gray-700">
                El reciclaje adecuado puede desviar hasta el 60% de estos residuos, reduciendo la 
                contaminación del suelo y agua, y disminuyendo las emisiones de metano.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Economía circular</h3>
              <p className="text-gray-700 mb-6">
                Cada material reciclado vuelve a la cadena productiva, reduciendo la extracción de 
                nuevos recursos naturales. Reciclar una tonelada de papel salva 17 árboles y ahorra 
                26,500 litros de agua.
              </p>
              <p className="text-gray-700">
                En Conexión EcoUrbana conectamos a recicladores de oficio con ciudadanos y empresas, 
                generando empleo verde y desarrollo social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-ecoWhite">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ecoBlue mb-16">Cómo funciona nuestra plataforma</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-ecoGreen text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">El impacto del reciclaje en números</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold mb-3">{stat.value}</p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ecoBlue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Únete al cambio hoy mismo</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubre cómo puedes contribuir desde tu hogar, oficina o comunidad con nuestras 
            guías personalizadas y programas de recolección.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={goToGuide}
              className="bg-transparent hover:bg-white hover:text-ecoBlue border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Aprende Más
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;