export interface RecyclingItem {
    id: string;
    name: string;
    category: string;
    recyclable: boolean;
    description: string;
    disposalInstructions: string;
    image?: string;
  }
  
  export const RECYCLING_DATA: RecyclingItem[] = [
    {
        id: 'p1',
        name: 'Botellas de agua',
        category: 'Plásticos',
        recyclable: true,
        description: 'Botellas PET de agua mineral',
        disposalInstructions: 'Aplastar y tapar antes de reciclar. Depositar en caneca blanca para reciclables. Verificar la distribución en tu zona de reciclaje ya que puede variar.'
    },
    {
        id: 'p2',
        name: 'Envases de yogurt',
        category: 'Plásticos',
        recyclable: true,
        description: 'Envases PP de productos lácteos',
        disposalInstructions: 'Enjuagar bien antes de reciclar. Depositar en caneca blanca para reciclables. En algunas zonas puede haber contenedores específicos para plásticos.'
    },
    {
        id: 'p3',
        name: 'Botellas de refresco',
        category: 'Plásticos',
        recyclable: true,
        description: 'Botellas PET de bebidas gaseosas',
        disposalInstructions: 'Aplastar y volver a tapar. Depositar en caneca blanca para reciclables. Algunas zonas tienen contenedores específicos para PET.'
    },
    {
        id: 'p4',
        name: 'Envases de champú',
        category: 'Plásticos',
        recyclable: true,
        description: 'Envases HDPE de productos de higiene',
        disposalInstructions: 'Enjuagar bien y aplastar. Depositar en caneca blanca. Quitar las bombas dosificadoras no reciclables.'
    },
    {
        id: 'p5',
        name: 'Tapas de botellas',
        category: 'Plásticos',
        recyclable: true,
        description: 'Tapones de PP o PE',
        disposalInstructions: 'Separar de las botellas si son de diferente material. Depositar en caneca blanca. Algunos programas las recolectan por separado.'
    },
    {
        id: 'p6',
        name: 'Bandejas de alimentos',
        category: 'Plásticos',
        recyclable: true,
        description: 'Bandejas de PS o PET para frutas/carnes',
        disposalInstructions: 'Limpiar restos de comida. Depositar en caneca blanca. Verificar el símbolo de reciclaje en el envase.'
    },
    {
        id: 'p7',
        name: 'Film transparente',
        category: 'Plásticos',
        recyclable: false,
        description: 'Plástico para envolver alimentos',
        disposalInstructions: 'Desechar en caneca negra. No se recicla en la mayoría de sistemas municipales.'
    },
    {
        id: 'p8',
        name: 'Bolsas de supermercado',
        category: 'Plásticos',
        recyclable: true,
        description: 'Bolsas HDPE/LDPE de comercios',
        disposalInstructions: 'Llevar a puntos de recogida específicos o depositar limpias en caneca blanca. Muchos supermercados tienen contenedores especiales.'
    },
    {
        id: 'p9',
        name: 'Envases de detergente',
        category: 'Plásticos',
        recyclable: true,
        description: 'Botellas de HDPE para limpieza',
        disposalInstructions: 'Enjuagar completamente. Depositar en caneca blanca. Quitar etiquetas grandes si es posible.'
    },
    {
        id: 'p10',
        name: 'Utensilios desechables',
        category: 'Plásticos',
        recyclable: false,
        description: 'Cubiertos, platos y vasos de plástico',
        disposalInstructions: 'Desechar en caneca negra. La mayoría no son reciclables por su composición mixta.'
    },
    {
        id: 'p11',
        name: 'Potes de helado',
        category: 'Plásticos',
        recyclable: true,
        description: 'Envases de PP para helados',
        disposalInstructions: 'Limpiar restos de alimento. Depositar en caneca blanca. Verificar el símbolo de reciclaje.'
    },
    {
        id: 'p12',
        name: 'Blísteres de medicamentos',
        category: 'Plásticos',
        recyclable: false,
        description: 'Envases termoformados para pastillas (contienen aluminio y plástico)',
        disposalInstructions: 'No botar a la basura común. Llevar a un Punto Azul autorizado (droguerías como Cruz Verde, Farmatodo o Colsubsidio). Estos puntos manejan residuos farmacéuticos de forma segura para evitar contaminación del agua y suelo. Consulta ubicaciones en https://www.puntoazul.com.co/'
    },
    {
        id: 'p121',
        name: 'Envases de medicamentos',
        category: 'Plásticos',
        recyclable: false,
        description: 'Frascos de plástico (PET o HDPE) con restos de fármacos',
        disposalInstructions: 'Vaciar completamente el contenido en su Punto Azul más cercano antes de desechar el envase. No reciclar aunque estén limpios por posible contaminación cruzada.'
    },
    {
        id: 'p13',
        name: 'Bidones de agua',
        category: 'Plásticos',
        recyclable: true,
        description: 'Garrafas de PC o PET de 5-20L',
        disposalInstructions: 'Vaciar completamente. Depositar en caneca blanca o devolver a puntos de retorno si aplica.'
    },
    {
        id: 'p14',
        name: 'Macetas de vivero',
        category: 'Plásticos',
        recyclable: true,
        description: 'Contenedores de PP para plantas',
        disposalInstructions: 'Limpiar de tierra y raíces. Depositar en caneca blanca. Algunos viveros aceptan devoluciones.'
    },
    {
        id: 'p15',
        name: 'Envases de comida rápida',
        category: 'Plásticos',
        recyclable: false,
        description: 'Contenedores de PS para llevar',
        disposalInstructions: 'Desechar en caneca negra. Contaminados con alimentos no son reciclables.'
    },
    {
        id: 'p16',
        name: 'Sorbetes/pajitas',
        category: 'Plásticos',
        recyclable: false,
        description: 'Tubos finos de PP para bebidas',
        disposalInstructions: 'Desechar en caneca negra. Demasiado pequeños para los sistemas de reciclaje convencionales.'
    },
    {
        id: 'p17',
        name: 'Bolsas de pan',
        category: 'Plásticos',
        recyclable: true,
        description: 'Bolsas de LDPE para productos de panadería',
        disposalInstructions: 'Limpiar de migajas. Depositar en caneca blanca. Algunas panaderías las reutilizan.'
    },
    {
        id: 'p18',
        name: 'Cápsulas de café',
        category: 'Plásticos',
        recyclable: true,
        description: 'Cápsulas de PP o aluminio con plástico',
        disposalInstructions: 'Llevar a puntos de recogida específicos de la marca. No depositar en caneca blanca a menos que estén limpias y separadas.'
    },
    {
        id: 'p19',
        name: 'Envases de cosméticos',
        category: 'Plásticos',
        recyclable: true,
        description: 'Frascos de PET o PP para cremas',
        disposalInstructions: 'Limpiar completamente. Depositar en caneca blanca. Las bombas dosificadoras van a caneca gris.'
    },
    {
        id: 'p20',
        name: 'Protectores de paquetes',
        category: 'Plásticos',
        recyclable: false,
        description: 'Burbujas de aire para embalaje',
        disposalInstructions: 'Desechar en caneca negra. Algunas tiendas las reutilizan si están limpias.'
    },
    {
        id: 'p21',
        name: 'Cubiertos reutilizables',
        category: 'Plásticos',
        recyclable: true,
        description: 'Utensilios de polipropileno duradero',
        disposalInstructions: 'Cuando terminen su vida útil, limpiar y depositar en caneca blanca. Verificar el símbolo de reciclaje (número 5).'
    },
    {
        id: 'p22',
        name: 'Juguetes rotos',
        category: 'Plásticos',
        recyclable: false,
        description: 'Artículos de PVC o ABS dañados',
        disposalInstructions: 'Desechar en caneca negra. Los juguetes en buen estado donarlos a organizaciones.'
    },
    {
        id: 'p23',
        name: 'Cepillos de limpieza',
        category: 'Plásticos',
        recyclable: false,
        description: 'Cepillos con cerdas y mango plástico',
        disposalInstructions: 'Separar las partes si es posible. El plástico ir a caneca negra. Las cerdas suelen ser no reciclables.'
    },
    {
        id: 'p24',
        name: 'Botes de pintura vacíos',
        category: 'Plásticos',
        recyclable: true,
        description: 'Envases de HDPE para pintura',
        disposalInstructions: 'Completamente secos y limpios pueden ir a caneca blanca. Con restos de pintura llevar a punto limpio.'
    },
    {
      id: 'p25',
      name: 'Bolsas de congelados',
      category: 'Plásticos',
      recyclable: false,
      description: 'Bolsas plásticas de alimentos congelados',
      disposalInstructions: 'Desechar en caneca negra para no reciclables. Algunas zonas pueden tener puntos específicos para plásticos no reciclables.'
    },
  
    {
        id: 'm1',
        name: 'Latas de cerveza',
        category: 'Metales',
        recyclable: true,
        description: 'Latas de aluminio de bebidas',
        disposalInstructions: 'Aplastar para ahorrar espacio. Depositar en caneca blanca para reciclables. En zonas industriales puede haber contenedores metálicos específicos.'
    },
    {
        id: 'm2',
        name: 'Latas de conservas',
        category: 'Metales',
        recyclable: true,
        description: 'Envases de hojalata para alimentos enlatados',
        disposalInstructions: 'Enjuagar para eliminar residuos de comida. Aplastar y depositar en caneca blanca. El acero reciclado se usa en nuevas latas.'
    },
    {
        id: 'm3',
        name: 'Tapas de frascos',
        category: 'Metales',
        recyclable: true,
        description: 'Tapas metálicas de vidrio o conservas',
        disposalInstructions: 'Separar del frasco de vidrio. Depositar en caneca blanca. Pequeñas cantidades son aceptadas en reciclaje convencional.'
    },
    {
        id: 'm4',
        name: 'Alambre',
        category: 'Metales',
        recyclable: true,
        description: 'Cables o hilos metálicos de cobre/aluminio',
        disposalInstructions: 'Enrollar para evitar accidentes. Llevar a centro de acopio de metales o depositar en caneca blanca si son piezas pequeñas.'
    },
    {
        id: 'm5',
        name: 'Ollas viejas',
        category: 'Metales',
        recyclable: true,
        description: 'Utensilios de cocina de acero inoxidable/aluminio',
        disposalInstructions: 'Si están en buen estado, donar. Si no, llevar a chatarrería o punto limpio. No depositar en canecas domésticas por su tamaño.'
    },
    {
        id: 'm6',
        name: 'Clavos',
        category: 'Metales',
        recyclable: true,
        description: 'Piezas pequeñas de hierro para construcción',
        disposalInstructions: 'Guardar en recipiente cerrado para evitar accidentes. Depositar en caneca blanca o llevar a centros de reciclaje de metales ferrosos.'
    },
    {
        id: 'm7',
        name: 'Bandejas de aluminio',
        category: 'Metales',
        recyclable: true,
        description: 'Bandejas desechables para alimentos',
        disposalInstructions: 'Limpiar restos de comida. Aplastar y depositar en caneca blanca. Idealmente llevar a puntos de recolección de aluminio.'
    },
    {
        id: 'm8',
        name: 'Ganchos de ropa metálicos',
        category: 'Metales',
        recyclable: true,
        description: 'Alambres doblados para colgar prendas',
        disposalInstructions: 'Depositar en caneca blanca. Mejor opción: reutilizarlos o donar a lavanderías.'
    },
    {
        id: 'm9',
        name: 'Tuberías de cobre',
        category: 'Metales',
        recyclable: true,
        description: 'Restos de instalaciones pluviales o eléctricas',
        disposalInstructions: 'Llevar obligatoriamente a chatarrería especializada. Alto valor de reciclaje pero requiere manejo profesional.'
    },
    {
        id: 'm10',
        name: 'Aerosoles vacíos',
        category: 'Metales',
        recyclable: true,
        description: 'Envases presurizados de aluminio (desodorantes, pinturas)',
        disposalInstructions: 'Asegurarse que estén completamente vacíos. Quitar boquilla plástica. Depositar en caneca blanca o punto limpio.'
    },
    {
        id: 'm11',
        name: 'Bicicletas viejas',
        category: 'Metales',
        recyclable: true,
        description: 'Estructuras metálicas de aluminio/acero',
        disposalInstructions: 'Donar si son reparables. Para chatarra, desarmar y llevar partes metálicas a centro especializado (llantas y asientos van a otros flujos).'
    },
    {
        id: 'm12',
        name: 'Herramientas manuales',
        category: 'Metales',
        recyclable: true,
        description: 'Destornilladores, alicates o llaves dañadas',
        disposalInstructions: 'Llevar a puntos limpios metálicos. El mango plástico debe separarse si no es reciclable.'
    },
    {
        id: 'm13',
        name: 'Sartenes antiadherentes',
        category: 'Metales',
        recyclable: false,
        description: 'Utensilios con recubrimiento de teflón',
        disposalInstructions: 'No reciclables por su capa química. Depositar en caneca negra. Algunas marcas tienen programas de retorno.'
    },
    {
        id: 'm14',
        name: 'Corchos de botella',
        category: 'Metales',
        recyclable: true,
        description: 'Tapas metálicas con sello de corcho interior',
        disposalInstructions: 'Separar el metal (caneca blanca) del corcho (compostaje si es natural). Envases de vino deben ir sin corcho.'
    },
    {
        id: 'm15',
        name: 'Candados rotos',
        category: 'Metales',
        recyclable: true,
        description: 'Cerraduras metálicas dañadas',
        disposalInstructions: 'Llevar a chatarrería. Contienen resortes y mecanismos complejos que requieren procesamiento especial.'
    },
    {
        id: 'm16',
        name: 'Estructuras de muebles',
        category: 'Metales',
        recyclable: true,
        description: 'Marcos metálicos de sillas, mesas o camas',
        disposalInstructions: 'Desarmar y llevar a punto limpio voluminoso. No depositar en canecas domésticas por su tamaño.'
    },
    {
        id: 'm17',
        name: 'Monedas',
        category: 'Metales',
        recyclable: true,
        description: 'Dinero metálico fuera de circulación',
        disposalInstructions: 'Entregar en bancos. Si no son aceptadas, llevar a centro de metales no ferrosos (contienen aleaciones especiales).'
    },
    {
        id: 'm18',
        name: 'Cadenas de joyería',
        category: 'Metales',
        recyclable: true,
        description: 'Joyas rotas de oro, plata o acero',
        disposalInstructions: 'Llevar a joyerías para recuperación de metales preciosos. No depositar en reciclaje convencional.'
    },
    {
        id: 'm19',
        name: 'Componentes electrónicos',
        category: 'Metales',
        recyclable: true,
        description: 'Partes internas de dispositivos (motores, placas)',
        disposalInstructions: 'Llevar obligatoriamente a punto limpio electrónico. Contienen metales pesados como plomo o cadmio.'
    },
    {
        id: 'm20',
        name: 'Aluminio doméstico',
        category: 'Metales',
        recyclable: true,
        description: 'Papel aluminio limpio o moldes para horno',
        disposalInstructions: 'Limpiar de residuos orgánicos. Aplastar y depositar en caneca blanca. No reciclar si tiene grasa incrustada.'
    },
    {
        id: 'm21',
        name: 'Estanterías metálicas',
        category: 'Metales',
        recyclable: true,
        description: 'Repisas o racks de acero',
        disposalInstructions: 'Donar si están en buen estado. Para reciclar, desarmar y llevar a centro de acopio de metales voluminosos.'
    },
    {
        id: 'm22',
        name: 'Tornillos y tuercas',
        category: 'Metales',
        recyclable: true,
        description: 'Elementos metálicos pequeños',
        disposalInstructions: 'Llevar a punto limpio metálico. Si no es posible, depositar en caneca blanca para reciclables. Verificar normativas locales para metales.'
    },
    {
        id: 'pc1',
        name: 'Cajas de zapatos',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Cartón ondulado sin plastificar',
        disposalInstructions: 'Desarmar antes de reciclar. Depositar en caneca blanca para reciclables. Algunas zonas tienen contenedores azules específicos para papel/cartón.'
    },
    {
        id: 'pc2',
        name: 'Periódicos',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Diarios y suplementos impresos en papel periódico',
        disposalInstructions: 'Separar de las bolsas plásticas. Depositar limpios y secos en caneca blanca. Evitar ejemplares con mucha tinta de portada.'
    },
    {
        id: 'pc3',
        name: 'Revistas',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Publicaciones con papel couché o brillante',
        disposalInstructions: 'Retirar cubiertas plastificadas. Depositar en caneca blanca. Las hojas con mucho brillo pueden tener recubrimiento no reciclable.'
    },
    {
        id: 'pc4',
        name: 'Cajas de cereales',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Cartón laminado para alimentos secos',
        disposalInstructions: 'Aplanar y retirar bolsas internas. Depositar en caneca blanca. Si tienen restos de comida, desechar en caneca negra.'
    },
    {
        id: 'pc5',
        name: 'Hojas de papel bond',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Papel blanco o de colores sin plastificar',
        disposalInstructions: 'Separar grapas y clips. Pueden ir con o sin tinta. Depositar en caneca blanca.'
    },
    {
        id: 'pc6',
        name: 'Bolsas de papel',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Bolsas de comercio o panadería sin recubrimiento',
        disposalInstructions: 'Asegurarse que no contengan restos de alimentos. Depositar en caneca blanca. Las manchadas con grasa van a caneca negra.'
    },
    {
        id: 'pc7',
        name: 'Envases de huevos',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Cartón moldeado para protección de huevos',
        disposalInstructions: 'Depositar en caneca blanca solo si están limpias. Las manchadas con clara/yema van a caneca negra.'
    },
    {
        id: 'pc8',
        name: 'Libros viejos',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Libros con encuadernación básica (sin tapas duras)',
        disposalInstructions: 'Separar tapas plastificadas. Las hojas van a caneca blanca. Donar si están en buen estado.'
    },
    {
        id: 'pc9',
        name: 'Cajas de pizza',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Cartón contaminado con grasas y alimentos',
        disposalInstructions: 'Desechar en caneca negra. Solo partes limpias sin manchas pueden reciclarse (cortar y depositar en caneca blanca).'
    },
    {
        id: 'pc10',
        name: 'Papel aluminizado',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Papel con capa metálica (empaques de snacks)',
        disposalInstructions: 'Desechar en caneca negra. No es reciclable por su composición mixta.'
    },
    {
        id: 'pc11',
        name: 'Facturas y recibos',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Papel térmico con BPA/BPS (tickets de compra)',
        disposalInstructions: 'Desechar en caneca negra. Contienen químicos que contaminan el reciclaje.'
    },
    {
        id: 'pc12',
        name: 'Cartón de huevos plástificado',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Envases con recubrimiento brillante',
        disposalInstructions: 'Desechar en caneca negra. El plástico fusionado al cartón impide su reciclaje.'
    },
    {
        id: 'pc13',
        name: 'Papel higiénico usado',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Productos sanitarios contaminados',
        disposalInstructions: 'Desechar en caneca negra. Nunca reciclar papel higiénico, toallas o pañuelos usados.'
    },
    {
        id: 'pc14',
        name: 'Cajas de jugo tetrapak',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Envases multicapa (cartón, aluminio y plástico)',
        disposalInstructions: 'Lavar, aplastar y llevar a puntos especiales de recolección tetrapak. No depositar en caneca blanca convencional.'
    },
    {
        id: 'pc15',
        name: 'Postales fotográficas',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Fotos impresas o papel con recubrimiento químico',
        disposalInstructions: 'Desechar en caneca negra. Los químicos del revelado contaminan el proceso.'
    },
    {
        id: 'pc16',
        name: 'Sobres con ventana plástica',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Sobres postales con film transparente',
        disposalInstructions: 'Retirar la ventana plástica (caneca negra). El resto del sobre va a caneca blanca.'
    },
    {
        id: 'pc17',
        name: 'Cartón corrugado',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Material de embalaje grueso',
        disposalInstructions: 'Aplanar y atar en fardos. Depositar en caneca blanca o llevar directamente a centros de acopio de cartón.'
    },
    {
        id: 'pc18',
        name: 'Papel de regalo',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Papel decorado con tintas metálicas o plástico',
        disposalInstructions: 'Desechar en caneca negra. La mayoría contiene materiales no reciclables.'
    },
    {
        id: 'pc19',
        name: 'Cajas de medicamentos',
        category: 'Papel y Cartón',
        recyclable: true,
        description: 'Envases secundarios de fármacos',
        disposalInstructions: 'Retirar prospectos y blísteres. Depositar en caneca blanca solo si están limpias. Las que contuvieron vacunas van a caneca negra.'
    },
    {
        id: 'pc20',
        name: 'Papel de fax',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Papel térmico para máquinas antiguas',
        disposalInstructions: 'Desechar en caneca negra. Contiene BPA como los recibos.'
    },
    {
        id: 'pc21',
        name: 'Cartulina plastificada',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Material escolar con recubrimiento brillante',
        disposalInstructions: 'Desechar en caneca negra. El plástico no se separa del papel en el reciclaje convencional.'
    },
    {
        id: 'pc22',
        name: 'Filtros de café usados',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Papel con residuos orgánicos',
        disposalInstructions: 'Desechar en caneca negra o compostar si es 100% papel sin blanqueadores químicos.'
    },
    {
        id: 'pc23',
        name: 'Cupones de descuento',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Tickets promocionales con tinta magnética',
        disposalInstructions: 'Desechar en caneca negra. Muchos contienen sustancias químicas en la tinta.'
    },
    {
        id: 'pc24',
        name: 'Etiquetas adhesivas',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Stickers o calcomanías de papel',
        disposalInstructions: 'Desechar en caneca negra. El adhesivo contamina el proceso de reciclaje.'
    },
    {
        id: 'pc25',
        name: 'Papel carbón',
        category: 'Papel y Cartón',
        recyclable: false,
        description: 'Papel térmico o con químicos',
        disposalInstructions: 'Desechar en caneca gris para no reciclables. No mezclar con papel reciclable.'
    },
    {
        id: 'v1',
        name: 'Frascos de mermelada',
        category: 'Vidrio',
        recyclable: true,
        description: 'Vidrio transparente o ámbar',
        disposalInstructions: 'Quitar etiquetas y tapas. Depositar en caneca blanca para reciclables. Muchas zonas tienen iglús verdes específicos para vidrio.'
    },
    {
        id: 'v2',
        name: 'Botellas de vino',
        category: 'Vidrio',
        recyclable: true,
        description: 'Botellas de vidrio verde o transparente',
        disposalInstructions: 'Enjuagar, quitar corcho y etiquetas. Depositar en caneca blanca o iglú verde. No romperlas.'
    },
    {
        id: 'v3',
        name: 'Tarros de alimentos',
        category: 'Vidrio',
        recyclable: true,
        description: 'Frascos de vidrio para conservas',
        disposalInstructions: 'Limpiar restos de comida. Retirar tapas metálicas (van a caneca blanca de metales). Depositar en iglú verde.'
    },
    {
        id: 'v4',
        name: 'Botellas de cerveza',
        category: 'Vidrio',
        recyclable: true,
        description: 'Envases retornables o no retornables',
        disposalInstructions: 'Retornar si tienen depósito (caso de Colombia). Si no, limpiar y depositar en iglú verde. No mezclar colores si hay separación.'
    },
    {
        id: 'v5',
        name: 'Envases de perfumes',
        category: 'Vidrio',
        recyclable: true,
        description: 'Frascos de vidrio con bomba dosificadora',
        disposalInstructions: 'Separar partes plásticas/metal (caneca gris). El vidrio limpio va a caneca blanca. Retirar etiquetas adhesivas.'
    },
    {
        id: 'v6',
        name: 'Vasos rotos',
        category: 'Vidrio',
        recyclable: true,
        description: 'Vidrio de cocina sin tratamiento térmico',
        disposalInstructions: 'Envolver en papel periódico para evitar cortes. Depositar en iglú verde. No usar bolsas plásticas.'
    },
    {
        id: 'v7',
        name: 'Botellas de licor',
        category: 'Vidrio',
        recyclable: true,
        description: 'Envases de vidrio color ámbar o transparente',
        disposalInstructions: 'Quitar tapones metálicos/plásticos. Depositar limpias en iglú verde. Algunas marcas tienen programas de retorno.'
    },
    {
        id: 'v8',
        name: 'Ampolletas tradicionales',
        category: 'Vidrio',
        recyclable: false,
        description: 'Bombillas incandescentes',
        disposalInstructions: 'Envolver y desechar en caneca negra. Contienen filamentos metálicos no reciclables convencionalmente.'
    },
    {
        id: 'v9',
        name: 'Frascos de cosméticos',
        category: 'Vidrio',
        recyclable: true,
        description: 'Envases de cremas o serums',
        disposalInstructions: 'Limpiar completamente. Retirar bombas plásticas. Depositar en caneca blanca. Las tapas van a su flujo correspondiente.'
    },
    {
        id: 'v10',
        name: 'Vidrios de ventana',
        category: 'Vidrio',
        recyclable: false,
        description: 'Cristal plano con tratamiento térmico',
        disposalInstructions: 'Envolver en cartón y desechar en caneca negra. No es compatible con el reciclaje de envases.'
    },
    {
        id: 'v11',
        name: 'Botellas de aceite',
        category: 'Vidrio',
        recyclable: true,
        description: 'Envases de vidrio para aceites comestibles',
        disposalInstructions: 'Limpiar con agua caliente y jabón. Quitar etiquetas. Depositar en iglú verde. No dejar residuos grasosos.'
    },
    {
        id: 'v12',
        name: 'Tubos fluorescentes',
        category: 'Vidrio',
        recyclable: false,
        description: 'Contienen mercurio y fósforo',
        disposalInstructions: 'Llevar a punto limpio para residuos peligrosos. Nunca desechar en canecas domésticas.'
    },
    {
        id: 'v13',
        name: 'Platos y tazas de vidrio',
        category: 'Vidrio',
        recyclable: false,
        description: 'Vajilla de pyrex o vidrio templado',
        disposalInstructions: 'Desechar en caneca negra. El tratamiento térmico los hace incompatibles con el reciclaje convencional.'
    },
    {
        id: 'v14',
        name: 'Frascos de medicamentos',
        category: 'Vidrio',
        recyclable: true,
        description: 'Envases de jarabes o inyectables',
        disposalInstructions: 'Enjuagar bien. Quitar tapas y etiquetas. Depositar en iglú verde. Llevar los restos médicos a Punto Azul.'
    },
    {
        id: 'v15',
        name: 'Vitrocerámica rota',
        category: 'Vidrio',
        recyclable: false,
        description: 'Cristal especial para cocinas',
        disposalInstructions: 'Envolver en tela gruesa y desechar en caneca negra. No mezclar con vidrio reciclable.'
    },
    {
        id: 'v16',
        name: 'Botellas de refresco retornables',
        category: 'Vidrio',
        recyclable: true,
        description: 'Envases con sistema de depósito',
        disposalInstructions: 'Retornar al establecimiento comercial para reutilización. No romper ni depositar en iglú si son retornables.'
    },
    {
        id: 'v17',
        name: 'Vidrios decorativos',
        category: 'Vidrio',
        recyclable: false,
        description: 'Espejos, vitrales o vidrios coloreados',
        disposalInstructions: 'Desechar en caneca negra. Los químicos en los pigmentos contaminan el reciclaje.'
    },
    {
        id: 'v18',
        name: 'Tarro de café instantáneo',
        category: 'Vidrio',
        recyclable: true,
        description: 'Frascos de vidrio con tapa metálica',
        disposalInstructions: 'Limpiar residuos de café. Separar tapa (caneca blanca de metales). El frasco va a iglú verde.'
    },
    {
        id: 'v19',
        name: 'Lentes ópticos',
        category: 'Vidrio',
        recyclable: false,
        description: 'Gafas o lentes con tratamiento especial',
        disposalInstructions: 'Donar si están en buen estado. Para desecho, llevar a ópticas con programas de reciclaje. No van a caneca doméstica.'
    },
    {
        id: 'v20',
        name: 'Espejos rotos',
        category: 'Vidrio',
        recyclable: false,
        description: 'Vidrio con tratamiento especial',
        disposalInstructions: 'Envolver en papel y desechar en caneca gris. No depositar con vidrio reciclable.'
    },
  
    {
      id: 'rp1',
      name: 'Baterías de coche',
      category: 'Residuos Peligrosos',
      recyclable: false,
      description: 'Baterías de plomo-ácido',
      disposalInstructions: 'Llevar a punto limpio especializado. Nunca depositar en canecas convencionales.'
    },
    {
        id: 'rp2',
        name: 'Aceites usados de motor',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Líquidos lubricantes contaminados',
        disposalInstructions: 'Llevar a centros autorizados como Talleres Autorizados o puntos de recolección de Ecopetrol. Nunca verter en desagües. 1 litro contamina 1 millón de litros de agua.'
    },
    {
        id: 'rp3',
        name: 'Pinturas y solventes',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Productos químicos para construcción/hogar',
        disposalInstructions: 'Secar completamente (absorber con aserrín). Llevar a punto limpio de tu ciudad. Las latas vacías van a caneca negra.'
    },
    {
        id: 'rp4',
        name: 'Pilas alcalinas',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Baterías AA/AAA de uso doméstico',
        disposalInstructions: 'Depositar en contenedores rojos de Pilas con el Ambiente (supermercados y centros comerciales). Contienen mercurio y cadmio.'
    },
    {
        id: 'rp5',
        name: 'Baterías de celular',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Baterías de ion-litio o níquel-cadmio',
        disposalInstructions: 'Entregar en puntos azules o tiendas de telefonía. Clasificadas como RAEE. Peligro de incendio si se dañan.'
    },
    {
        id: 'rp6',
        name: 'Productos de limpieza industrial',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Químicos para talleres o fábricas',
        disposalInstructions: 'Llevar a centro de gestión posconsumo autorizado por la ANLA. Ej: Programa Posconsumo de Andi.'
    },
    {
        id: 'rp7',
        name: 'Insecticidas domésticos',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Aerosoles o líquidos para plagas',
        disposalInstructions: 'Nunca vaciar en alcantarillas. Llevar a punto limpio con etiqueta intacta. Programa Campo Limpio los recicla.'
    },
    {
        id: 'rp8',
        name: 'Lámparas fluorescentes',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Tubos o bombillos de bajo consumo',
        disposalInstructions: 'Llevar a contenedores especiales en ferreterías o centros de acopio Lumina. Contienen mercurio gaseoso.'
    },
    {
        id: 'rp9',
        name: 'Cartuchos de tóner',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Tinta en polvo para impresoras',
        disposalInstructions: 'Devolver al fabricante o llevar a puntos Ecolecta. El tóner es cancerígeno al inhalarse.'
    },
    {
        id: 'rp10',
        name: 'Electrónicos obsoletos',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Computadores, TVs y electrodomésticos',
        disposalInstructions: 'Llevar a puntos RAEE autorizados (ej: Colombia Limpia). Las empresas con más de 1 tonelada deben gestionar con recicladores autorizados.'
    },
    {
        id: 'rp11',
        name: 'Amianto o asbesto',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Material aislante en construcciones antiguas',
        disposalInstructions: 'Manejo exclusivo por empresas autorizadas (ej: Aprotec). Fibras cancerígenas al respirar. Prohibido en Colombia desde 2011.'
    },
    {
        id: 'rp12',
        name: 'Residuos hospitalarios',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Gasas, vendas o materiales infecciosos',
        disposalInstructions: 'Solo centros médicos pueden gestionarlos con empresas como Stericycle. Ciudadanos deben entregar en EPS autorizadas.'
    },
    {
        id: 'rp13',
        name: 'Mercurio metálico',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Líquido plateado de instrumentos rotos',
        disposalInstructions: 'Aislar en recipiente hermético con agua. Llamar a Bomberos o Secretaría de Ambiente. Prohibido manipular sin protección.'
    },
    {
        id: 'rp14',
        name: 'Fertilizantes químicos',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Sobras de nitratos/fosfatos para jardinería',
        disposalInstructions: 'Llevar a centro de acopio de ICA. Nunca mezclar con agua. Causan eutrofización en ríos.'
    },
    {
        id: 'rp15',
        name: 'Medicamentos caducados',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Fármacos vencidos o deteriorados (sólidos o líquidos)',
        disposalInstructions: 'Entrega obligatoria en Puntos Azules. Nunca desechar en caneca gris, inodoro o lavamanos. El programa gestiona su destrucción controlada para proteger el ambiente y la salud pública.'
    },
    {
        id: 'rp16',
        name: 'Jeringas y agujas usadas',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Material médico punzocortante contaminado',
        disposalInstructions: 'Depositarlas en recipientes rígidos con tapa (ej. botellas plásticas marcadas "PELIGRO") y llevar a Puntos Azules especializados. Algunos hospitales y EPS también reciben estos residuos.'
    },
    {
        id: 'rp17',
        name: 'Tanques de gas vacíos',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Cilindros de propano/butano',
        disposalInstructions: 'Devolver a distribuidores (Ej: Gas Natural). Explosivos si se compactan. No llevar a basura convencional.'
    },
    {
        id: 'rp18',
        name: 'Termómetros de mercurio',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Contienen metales pesados',
        disposalInstructions: 'Entrega especial en farmacias o puntos limpios. Extremadamente peligrosos para el medio ambiente.'
    },
    {
        id: 'rp19',
        name: 'Termómetros digitales',
        category: 'Residuos Peligrosos',
        recyclable: false,
        description: 'Contienen baterías y componentes electrónicos',
        disposalInstructions: 'Llevar a Punto Azul o punto limpio para RAEE. No mezclar con residuos domésticos por sus metales pesados.'
    },
  
    {
      id: 'e1',
      name: 'Teléfonos móviles',
      category: 'Electrónicos',
      recyclable: false,
      description: 'Smartphones y celulares',
      disposalInstructions: 'Llevar a puntos de recogida especializados. Contienen metales y componentes valiosos pero peligrosos.'
    },
    {
        id: 'e2',
        name: 'Computadores portátiles',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Laptops y notebooks obsoletas o dañadas',
        disposalInstructions: 'Llevar a puntos RAEE autorizados (ej: Colombia Limpia). Borrar datos previamente. Las baterías deben manejarse por separado.'
    },
    {
        id: 'e3',
        name: 'Televisores CRT',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Pantallas de tubo de rayos catódicos',
        disposalInstructions: 'Gestionar con recicladores especializados (ej: EcoCómputo). Contienen hasta 4 kg de plomo. Prohibido desarmar en casa.'
    },
    {
        id: 'e4',
        name: 'Tablets',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Dispositivos táctiles con batería integrada',
        disposalInstructions: 'Entregar en almacenes de cadena o puntos Verde RAEE. Las pantallas LCD contienen mercurio.'
    },
    {
        id: 'e5',
        name: 'Impresoras',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Equipos de inyección de tinta o láser',
        disposalInstructions: 'Llevar a centros de recolección de tóner y cartuchos (ej: HP Planet Partners). Los cabezales contienen metales pesados.'
    },
    {
        id: 'e6',
        name: 'Consolas de videojuegos',
        category: 'Electrónicos',
        recyclable: false,
        description: 'PlayStation, Xbox o Nintendo usadas',
        disposalInstructions: 'Donar si funcionan. Para reciclaje, llevar a puntos RAEE. Contienen metales preciosos en sus placas.'
    },
    {
        id: 'e7',
        name: 'Cargadores de celular',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Adaptadores AC/DC para dispositivos móviles',
        disposalInstructions: 'Depositar en contenedores RAEE de centros comerciales. El cobre interno es reciclable pero requiere procesamiento especial.'
    },
    {
        id: 'e8',
        name: 'Pantallas LED/LCD',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Monitores planos modernos',
        disposalInstructions: 'Gestionar con empresas autorizadas (ej: Recopila). Las capas de polarización contienen cadmio.'
    },
    {
        id: 'e9',
        name: 'Routers y módems',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Dispositivos de red obsoletos',
        disposalInstructions: 'Devolver al operador de telecomunicaciones o llevar a punto RAEE. Las placas tienen oro y paladio.'
    },
    {
        id: 'e10',
        name: 'Baterías de UPS',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Baterías de respaldo para computadores',
        disposalInstructions: 'Llevar a centro de acopio de Baterías con el Ambiente. Contienen plomo y ácido sulfúrico.'
    },
    {
        id: 'e11',
        name: 'Discos duros',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Almacenamiento magnético de datos',
        disposalInstructions: 'Triturar físicamente antes de reciclar para proteger información. Llevar a puntos especializados en RAEE.'
    },
    {
        id: 'e12',
        name: 'Teclados y mouse',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Periféricos de computador',
        disposalInstructions: 'Depositar en contenedores RAEE. Los cables internos deben extraerse para reciclaje separado.'
    },
    {
        id: 'e13',
        name: 'Reproductores DVD/Blu-ray',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Equipos de entretenimiento obsoletos',
        disposalInstructions: 'Llevar a puntos limpios. Los lásers contienen selenio y arsénico.'
    },
    {
        id: 'e14',
        name: 'Drones',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Dispositivos aéreos no tripulados',
        disposalInstructions: 'Baterías LiPo van a puntos RAEE. La estructura de fibra de carbono requiere manejo especializado.'
    },
    {
        id: 'e15',
        name: 'Smartwatches',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Relojes inteligentes con batería',
        disposalInstructions: 'Entregar en tiendas de tecnología. Las pantallas OLED contienen indio y galio.'
    },
    {
        id: 'e16',
        name: 'Tarjetas electrónicas',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Placas madre o circuitos impresos',
        disposalInstructions: 'Llevar a centros autorizados para extracción de metales preciosos. Prohibido quemar por emisiones tóxicas.'
    },
    {
        id: 'e17',
        name: 'Transformadores',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Dispositivos para modificar voltaje',
        disposalInstructions: 'Gestionar con empresas como Lito. Contienen aceite dieléctrico contaminante.'
    },
    {
        id: 'e18',
        name: 'Equipos de sonido',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Amplificadores, parlantes o mezcladoras',
        disposalInstructions: 'Llevar a puntos RAEE. Los imanes de neodimio en parlantes son altamente contaminantes.'
    },
    {
        id: 'e19',
        name: 'Cámaras fotográficas',
        category: 'Electrónicos',
        recyclable: false,
        description: 'Cámaras digitales o réflex antiguas',
        disposalInstructions: 'Entregar en tiendas especializadas. Los sensores CCD contienen metales raros.'
    },
    {
      id: 'e20',
      name: 'Cables eléctricos',
      category: 'Electrónicos',
      recyclable: true,
      description: 'Cobre revestido de plástico',
      disposalInstructions: 'Llevar a punto limpio o depositar en caneca blanca si la normativa local lo permite.'
    },
  

    {
      id: 'o1',
      name: 'Restos de fruta',
      category: 'Orgánicos',
      recyclable: true,
      description: 'Cáscaras y pulpa de frutas',
      disposalInstructions: 'Compostar o depositar en caneca verde para orgánicos. Verificar si tu zona tiene recogida selectiva de orgánicos.'
    },
    {
        id: 'o2',
        name: 'Cáscaras de huevo',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Cáscaras de huevo crudas o cocidas',
        disposalInstructions: 'Triturar antes de compostar. Neutralizan suelos ácidos. Depositar en caneca verde. No mezclar con huevos podridos.'
    },
    {
        id: 'o3',
        name: 'Restos de verduras',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Tallos, hojas y cáscaras de vegetales',
        disposalInstructions: 'Cortar en trozos pequeños para acelerar descomposición. Caneca verde o compostaje. Ideal para lombricultivos.'
    },
    {
        id: 'o4',
        name: 'Posos de café',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Residuos de café molido usado',
        disposalInstructions: 'Depositar en caneca verde o compostar. Excelente fuente de nitrógeno. Las lombrices los adoran.'
    },
    {
        id: 'o5',
        name: 'Bolsa de té usada',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Sobres de té sin grapas ni etiquetas',
        disposalInstructions: 'Verificar que sean 100% papel. Depositar en caneca verde. Los de malla sintética van a caneca negra.'
    },
    {
        id: 'o6',
        name: 'Cáscaras de plátano',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Pieles de banano o plátano',
        disposalInstructions: 'Cortar en trozos para compostaje rápido. En caneca verde, separar de otros residuos. Atraen moscas si no se tratan.'
    },
    {
        id: 'o7',
        name: 'Restos de poda',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Hojas secas, ramas pequeñas (<5cm)',
        disposalInstructions: 'Triturar para compostaje. En Bogotá usar bolsa blanca para recolección especial. No incluir malezas con semillas.'
    },
    {
        id: 'o8',
        name: 'Pan duro',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Pan o productos de panadería en descomposición',
        disposalInstructions: 'Remojar antes de compostar para evitar plagas. En caneca verde, envolver en papel. No reciclar si tiene moho visible.'
    },
    {
        id: 'o9',
        name: 'Flores marchitas',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Flores naturales muertas o arreglos florales',
        disposalInstructions: 'Quitar alambres y plásticos. Depositar en caneca verde. Las flores con pesticidas no son compostables.'
    },
    {
        id: 'o10',
        name: 'Cáscaras de cítricos',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Cáscaras de naranja, limón o mandarina',
        disposalInstructions: 'Compostar en pequeñas cantidades (son ácidas). En caneca verde, mezclar con otros orgánicos para neutralizar pH.'
    },
    {
        id: 'o11',
        name: 'Servilletas usadas',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Papel de cocina sin químicos blanqueadores',
        disposalInstructions: 'Solo si están manchadas con comida. Depositar en caneca verde. Las con aceite/grasa van a caneca negra.'
    },
    {
        id: 'o12',
        name: 'Huesos grandes',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Huesos de res, cerdo o pollo enteros',
        disposalInstructions: 'Solo en plantas industriales de compostaje. En casa, desechar en caneca negra. Atraen animales si no se entierran.'
    },
    {
        id: 'o13',
        name: 'Cáscaras de frutos secos',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Cáscaras de nueces, almendras o maní',
        disposalInstructions: 'Triturar para compostaje lento (lignina). En caneca verde, mezclar con material verde fresco.'
    },
    {
        id: 'o14',
        name: 'Restos de arroz/cereales',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Granos cocidos sin sal o condimentos',
        disposalInstructions: 'Compostar en capas delgadas. En caneca verde, evitar excesos (generan mal olor).'
    },
    {
        id: 'o15',
        name: 'Cáscaras de ajo/cebolla',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Capas externas de bulbos',
        disposalInstructions: 'Compostar en pequeñas cantidades (repelen lombrices). En caneca verde, mezclar con otros residuos.'
    },
    {
        id: 'o16',
        name: 'Estiércol animal',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Excremento de herbívoros (conejo, caballo)',
        disposalInstructions: 'Compostar solo si es fresco. No usar de perros/gatos (parásitos). En zonas rurales, usar directamente como abono.'
    },
    {
        id: 'o17',
        name: 'Cáscaras de mango',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Pieles de frutas tropicales',
        disposalInstructions: 'Cortar en trozos por su fibrosidad. En caneca verde, cubrir con hojas secas para evitar moscas.'
    },
    {
        id: 'o18',
        name: 'Recortes de césped',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Hierba fresca cortada',
        disposalInstructions: 'Secar al sol antes de compostar (evita compactación). En caneca verde, alternar con material seco.'
    },
    {
        id: 'o19',
        name: 'Alimentos descompuestos',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Comida en estado de putrefacción',
        disposalInstructions: 'Solo en compostaje industrial. En casa, desechar en caneca negra (riesgo sanitario).'
    },
    {
        id: 'o20',
        name: 'Cáscaras de papa',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Pieles de tubérculos',
        disposalInstructions: 'Compostar solo si no tienen brotes. En caneca verde, mezclar con cal para neutralizar solanina.'
    },
    {
        id: 'o21',
        name: 'Huesos de aguacate',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Semillas grandes de frutos',
        disposalInstructions: 'Moler para compostaje (tardan años en degradarse). En caneca verde, preferible descartar en caneca negra.'
    },
    {
        id: 'o22',
        name: 'Cáscaras de piña',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Corona y piel espinosa',
        disposalInstructions: 'Cortar en trozos pequeños. Fermentar en agua para hacer limpiador natural antes de compostar.'
    },
    {
        id: 'o23',
        name: 'Aserrín natural',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Virutas de madera no tratada',
        disposalInstructions: 'Excelente para compostaje (carbono). En caneca verde, mezclar con material húmedo. Evitar maderas pintadas.'
    },
    {
        id: 'o24',
        name: 'Corazones de manzana',
        category: 'Orgánicos',
        recyclable: true,
        description: 'Núcleos y semillas de frutas',
        disposalInstructions: 'Compostar sin problema. Las semillas pueden germinar. En caneca verde, picar para acelerar descomposición.'
    },
    {
      id: 'o25',
      name: 'Huesos pequeños',
      category: 'Orgánicos',
      recyclable: true,
      description: 'Restos de carne cocinada',
      disposalInstructions: 'Depositar en caneca verde para orgánicos (no compostar en casa). Algunas zonas requieren separar restos cárnicos.'
    },
  
    {
        id: 'dg1',
        name: 'Pañuelos usados',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Papel higiénico o pañuelos faciales',
        disposalInstructions: 'Caneca NEGRA: Nunca reciclar papel higiénico usado por contaminación biológica'
    },
    {
        id: 'dg2',
        name: 'Toallas sanitarias',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Productos femeninos usados',
        disposalInstructions: 'Caneca NEGRA: Envolver bien antes de desechar'
    },
    {
        id: 'dg3',
        name: 'Pañales desechables',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Pañales infantiles o para adultos',
        disposalInstructions: 'Caneca NEGRA: Preferiblemente en bolsa separada y bien cerrada'
    },
    {
        id: 'dg4',
        name: 'Cepillos de dientes',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Cepillos dentales comunes',
        disposalInstructions: 'Caneca NEGRA: Algunas marcas tienen programas especiales (consultar)'
    },
    {
        id: 'dg5',
        name: 'Rasuradoras desechables',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Maquinillas de afeitar',
        disposalInstructions: 'Caneca NEGRA: Envolver en papel para evitar cortes'
    },
    {
        id: 'dg6',
        name: 'Colillas de cigarrillo',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Filtros de tabaco usados',
        disposalInstructions: 'Caneca NEGRA: Apagar completamente primero'
    },
    {
        id: 'dg7',
        name: 'Cinta adhesiva',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Cinta de embalar o scotch',
        disposalInstructions: 'Caneca NEGRA: No es reciclable por sus componentes químicos'
    },
    {
        id: 'dg8',
        name: 'Papel encerado',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Papel para alimentos con cera',
        disposalInstructions: 'Caneca NEGRA: Contaminaría el reciclaje de papel'
    },
    {
        id: 'dg9',
        name: 'Fotografías',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Fotos impresas tradicionales',
        disposalInstructions: 'Caneca NEGRA: Contienen químicos no reciclables'
    },
    {
        id: 'dg10',
        name: 'Esponjas de cocina',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Esponjas sintéticas usadas',
        disposalInstructions: 'Caneca NEGRA: No son reciclables por su composición'
    },
    {
        id: 'dg11',
        name: 'Vasos desechables sucios',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Vasos de plástico/papel con residuos',
        disposalInstructions: 'Caneca NEGRA: Solo van a BLANCA si están completamente limpios'
    },
    {
        id: 'dg12',
        name: 'Papel carbón',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Papel autocopiativo',
        disposalInstructions: 'Caneca NEGRA: Contiene químicos especiales'
    },
    {
        id: 'dg13',
        name: 'Calzado viejo',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Zapatos y zapatillas rotas',
        disposalInstructions: 'Caneca NEGRA: Algunas ONGs aceptan calzado en buen estado'
    },
    {
        id: 'dg14',
        name: 'Pelo humano',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Cabello de cortes o cepillos',
        disposalInstructions: 'Caneca NEGRA: Alternativamente puede compostarse en grandes cantidades'
    },
    {
        id: 'dg15',
        name: 'Cenizas de carbón',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Restos de fogatas o chimeneas',
        disposalInstructions: 'Caneca NEGRA: Enfriar completamente antes de desechar'
    },
    {
        id: 'dg16',
        name: 'Polvo de barrer',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Mezcla de tierra y pequeños residuos',
        disposalInstructions: 'Caneca NEGRA: No es compostable por contaminantes'
    },
    {
        id: 'dg17',
        name: 'Paños de limpieza sucios',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Trapo con productos químicos',
        disposalInstructions: 'Caneca NEGRA: Contienen residuos contaminantes'
    },
    {
        id: 'dg18',
        name: 'Etiquetas adhesivas',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Pegatinas y stickers',
        disposalInstructions: 'Caneca NEGRA: El adhesivo contamina el reciclaje'
    },
    {
        id: 'dg19',
        name: 'Bolígrafos rotos',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Plumas y marcadores gastados',
        disposalInstructions: 'Caneca NEGRA: Algunas marcas tienen programas de recolección'
    },
    {
        id: 'dg20',
        name: 'Lentes de contacto',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Lentes desechables usados',
        disposalInstructions: 'Caneca NEGRA: Programas especiales en algunas ópticas'
    },
    {
        id: 'dg21',
        name: 'Chicles usados',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Goma de mascar gastada',
        disposalInstructions: 'Caneca NEGRA: Envolver en papel antes de desechar'
    },
    {
        id: 'dg22',
        name: 'Cortinas de baño',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Cortinas plásticas viejas',
        disposalInstructions: 'Caneca NEGRA: Algunos centros reciben PVC para reciclaje especial'
    },
    {
        id: 'dg23',
        name: 'Algodón con maquillaje',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Discos desmaquillantes usados',
        disposalInstructions: 'Caneca NEGRA: Contaminado con productos químicos'
    },
    {
        id: 'dg24',
        name: 'Mascarillas desechables',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Cubrebocas usados',
        disposalInstructions: 'Caneca NEGRA: Cortar las cintas antes de desechar'
    },
    {
        id: 'dg25',
        name: 'Preservativos usados',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Condones y protectores sexuales',
        disposalInstructions: 'Caneca NEGRA: Nunca tirar por el inodoro'
    },
    {
        id: 'dg26',
        name: 'Hisopos de algodón',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Cotton buds o aplicadores',
        disposalInstructions: 'Caneca NEGRA: El plástico no es reciclable en este formato'
    },
    {
        id: 'dg27',
        name: 'Cápsulas de café usadas',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Cápsulas mono-dosis gastadas',
        disposalInstructions: 'Caneca NEGRA: Algunas marcas tienen programas de recolección'
    },
    {
        id: 'dg28',
        name: 'Pinturas secas',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Restos de pintura solidificada',
        disposalInstructions: 'Caneca NEGRA: Líquidos llevar a punto limpio'
    },
    {
        id: 'dg29',
        name: 'Tiritas usadas',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Curitas y apósitos médicos',
        disposalInstructions: 'Caneca NEGRA: Desechar en bolsa sellada'
    },
    {
        id: 'dg30',
        name: 'Cenizas de cigarrillo',
        category: 'Desechos generales',
        recyclable: false,
        description: 'Restos de tabaco quemado',
        disposalInstructions: 'Caneca NEGRA: Mojar antes de desechar para evitar incendios'
    }
  ];
  
  export const CATEGORIES = [
    { id: 'plastics', name: 'Plásticos', color: 'bg-yellow-100', textColor: 'text-yellow-800' },
    { id: 'metals', name: 'Metales', color: 'bg-gray-100', textColor: 'text-gray-800' },
    { id: 'paper', name: 'Papel y Cartón', color: 'bg-blue-100', textColor: 'text-blue-800' },
    { id: 'glass', name: 'Vidrio', color: 'bg-green-100', textColor: 'text-green-800' },
    { id: 'hazardous', name: 'Residuos Peligrosos', color: 'bg-red-100', textColor: 'text-red-800' },
    { id: 'electronics', name: 'Electrónicos', color: 'bg-purple-100', textColor: 'text-purple-800' },
    { id: 'organic', name: 'Orgánicos', color: 'bg-brown-100', textColor: 'text-brown-800' },
    { id: 'general', name: 'Desechos generales', color: 'bg-gray-300', textColor: 'text-gray-700' }
  ];