import { AnimatePresence, motion } from 'framer-motion'
import { ExperienceList } from './ExperienceList'
const experiencie = [
  {
    id: 1,
    company: 'Smartclip Spain',
    position: 'Sofware Engineer',
    date: '2023 - Present',
    responsabilities: [
      'Actualmente, aporto mi experiencia para optimizar el rendimiento y los KPIs de campañas publicitarias y otras cositas más. Además, he dejado mi marca en roles anteriores como Especialista en Front-end y Tecnología de Video, destacándome en la integración de contenido y la mejora del rendimiento a través de la refactorización de código.'
    ],
    // translate to english the responsabilities array
    responsabilitiesEnglish: [
      'Currently, I contribute my experience to optimize the performance and KPIs of advertising campaigns and other little things. In addition, I have left my mark in previous roles as a Front-end and Video Technology Specialist, standing out in content integration and performance improvement through code refactoring.'
    ]
  },
  {
    id: 2,
    company: 'Smartclip Spain',
    position: 'Front-end Developer & Video Tech Specialist',
    date: '2022 - 2023',
    responsabilities: [
      'Desarrollar herramientas de trabajo utilizando PHP, Vite, React, JavaScript, Tailwind y CSS para crear aplicaciones web interactivas y atractivas',
      'Implementé la compilación y transpilación del código utilizando webpack y babel para mejorar la compatibilidad con múltiples navegadores y asegurar un rendimiento óptimo',
      'Realicé refactorizaciones de código utilizando las mejores prácticas de programación, optimizando algoritmos y mejorando la eficiencia del código para lograr un rendimiento óptimo de las aplicaciones',
      'Utilicé Git para gestionar el repositorio de trabajo, permitiendo un control de versiones efectivo y colaboración en equipo',
      'Realicé integraciones de tipo Instream y Oustream, trabajando con tecnologías de video como HTML5 Video, Video.js, JW Player y Google IMA SDK para integrar anuncios publicitarios en videos de manera efectiva y sin interrupciones'
    ],
    // translate to english the responsabilities array
    responsabilitiesEnglish: [
      'Develop work tools using PHP, Vite, React, JavaScript, Tailwind and CSS to create interactive and attractive web applications',
      'I implemented the compilation and transpilation of the code using webpack and babel to improve compatibility with multiple browsers and ensure optimal performance',
      'I performed code refactoring using best programming practices, optimizing algorithms and improving code efficiency to achieve optimal application performance',
      'I used Git to manage the working repository, allowing effective version control and team collaboration',
      'I performed Instream and Oustream type integrations, working with video technologies such as HTML5 Video, Video.js, JW Player and Google IMA SDK to integrate advertising ads into videos effectively and without interruptions'
    ]
  },
  {
    id: 3,
    company: 'El Economista',
    position: 'Front-end Developer',
    date: '2021 - 2022',
    /* 
    - Implementé mejoras en las métricas de las Web Vitals, siguiendo buenas prácticas de desarrollo para garantizar un rendimiento óptimo y una experiencia de usuario mejorada.
    - Desarrollé landing pages atractivas y funcionales, utilizando HTML, CSS y JavaScript para crear interfaces interactivas y convincentes.
    - Utilicé Figma para realizar diseños y prototipos, colaborando con el equipo de diseño para crear experiencias visuales y de usuario impactantes.
    - Creé WebComponents utilizando tecnologías como HTML, CSS y JavaScript para modularizar y reutilizar componentes en el desarrollo de aplicaciones web.
    - Colaboré con el equipo en la implementación de nuevas funcionalidades en el sitio web, aportando ideas y soluciones técnicas para mejorar la experiencia del usuario.
    - Realicé la maquetación de landing pages, secciones web y herramientas web utilizando HTML, CSS y frameworks como Bootstrap, asegurando una apariencia visualmente atractiva y una navegación intuitiva.
    - Refactoricé código existente, optimizando algoritmos y estructuras de datos para mejorar el rendimiento, la eficiencia y la mantenibilidad del código base.
    - Apliqué buenas prácticas de desarrollo, siguiendo estándares de codificación, documentación clara y uso de herramientas de análisis estático de código para garantizar la calidad del software.
    - Mejoré la visibilidad de la publicidad en el sitio mediante la implementación de buenas prácticas de desarrollo, como la carga diferida de anuncios, el uso de formatos publicitarios responsivos y la optimización del código para mejorar la viewability.
    */
    responsabilitiesEnglish: [
      'I implemented improvements in the Web Vitals metrics, following good development practices to ensure optimal performance and an improved user experience.',
      'I developed attractive and functional landing pages, using HTML, CSS and JavaScript to create interactive and compelling interfaces.',
      'I used Figma to make designs and prototypes, collaborating with the design team to create impactful visual and user experiences.',
      'I created WebComponents using technologies such as HTML, CSS and JavaScript to modularize and reuse components in the development of web applications.',
      'I collaborated with the team in the implementation of new functionalities on the website, contributing ideas and technical solutions to improve the user experience.',
      'I performed the layout of landing pages, web sections and web tools using HTML, CSS and frameworks such as Bootstrap, ensuring a visually attractive appearance and intuitive navigation.',
      'I refactored existing code, optimizing algorithms and data structures to improve performance, efficiency and maintainability of the base code.',
      'I applied good development practices, following coding standards, clear documentation and use of static code analysis tools to ensure software quality.',
      'I improved the visibility of advertising on the site by implementing good development practices, such as deferred loading of ads, the use of responsive ad formats and code optimization to improve viewability.'
    ]
  },
  {
    id: 4,
    company: 'PS-Lab',
    position: 'Front-end Developer',
    date: '2020 - 2021',
    /* 
    - Participé en la optimización del sitio web, aplicando las mejores prácticas de desarrollo y teniendo en cuenta las métricas de web vitals de Google, como LCP (Largest Contentful Paint), FID (First Input Delay) y CLS (Cumulative Layout Shift).
    - Utilicé HTML5, CSS y SASS para crear componentes y landing pages visualmente atractivos y responsivos, asegurando una experiencia de usuario fluida y consistente en diferentes dispositivos.
    - Implementé funcionalidades interactivas utilizando JavaScript, aprovechando su capacidad para manipular el DOM y mejorar la interactividad del sitio web.
    - Utilicé Highcharts y D3.js, dos bibliotecas populares de visualización de datos, para representar gráficos y presentar información de manera clara y comprensible.
    - Aproveché el framework Bootstrap para agilizar el desarrollo y garantizar una apariencia visual coherente y profesional en todo el sitio web. Utilicé sus componentes y estilos predefinidos para lograr una implementación rápida y eficiente.
    */
    responsabilitiesEnglish: [
      'I participated in the optimization of the website, applying the best development practices and taking into account Google web vitals metrics, such as LCP (Largest Contentful Paint), FID (First Input Delay) and CLS (Cumulative Layout Shift).',
      'I used HTML5, CSS and SASS to create visually attractive and responsive components and landing pages, ensuring a smooth and consistent user experience on different devices.',
      'I implemented interactive features using JavaScript, taking advantage of its ability to manipulate the DOM and improve the interactivity of the website.',
      'I used Highcharts and D3.js, two popular data visualization libraries, to represent graphs and present information in a clear and understandable way.',
      'I took advantage of the Bootstrap framework to speed up development and ensure a consistent and professional visual appearance throughout the website. I used its components and predefined styles to achieve a quick and efficient implementation.'
    ]
  }
]
const Experience = () => {
  return (
    <section className="mt-10" id="experience">
      <h4 className="text-lg font-bold underline decoration-wavy decoration-indigo-600">Experience</h4>
      <motion.ul layout className="mt-4 flex flex-col gap-4">
        <AnimatePresence>
          {experiencie.map(
            ({ id, company, position, date, responsabilitiesEnglish }, indx) => (
              <motion.li
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 * indx + 0.2 }}
                key={id}
                className="w-full "
              >
                <article className="border border-gray-500 rounded-md p-3 shadow bg-white">
                  <header className="grid card-experience w-full">
                    <p
                      className="font-medium text-lg"
                      style={{
                        gridArea: 'companyName'
                      }}
                    >
                      {company}
                    </p>
                    <p
                      className="text-sm text-gray-500"
                      style={{
                        gridArea: 'position'
                      }}
                    >
                      {position}
                    </p>
                    <span
                      style={{
                        gridArea: 'date'
                      }}
                      className="ml-auto"
                    >
                      {date}
                    </span>
                    <ExperienceList
                      responsabilitiesEnglish={responsabilitiesEnglish}
                    />
                  </header>
                </article>
              </motion.li>
            )
          )}
        </AnimatePresence>
      </motion.ul>
    </section>
  )
}

export default Experience
