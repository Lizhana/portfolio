import { GrReactjs } from 'react-icons/gr';
import { IoLogoNodejs, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { SiRedux, SiSequelize, SiPostgresql, SiSocketdotio, SiMaterialui, SiAuth0 } from 'react-icons/si'
import {DiScrum} from 'react-icons/di'
import {TbBrandJavascript, TbBrandStripe} from 'react-icons/tb';
import { BiBarChart} from 'react-icons/bi'
import videoG from '../assets/PI-VideoGames.mp4';
import videoA from '../assets/App-Clima.mp4'
import videoS from '../assets/SleepT.mp4'




//////// Prijects Array ----->
export const ProjectsConst = [
    {
        name: 'Sleep Tacker',
        techs: [
            {
                tech: <TbBrandJavascript color="#01DCFF" />
            },
            {
                
                tech: <GrReactjs color="#01DCFF" />,
            },
            {
                
                tech: <IoLogoNodejs color="#4E9048" />,
            },
            {
                
                tech: <SiRedux color="#764ABC" />,
            },
            {
                
                tech: <SiAuth0 color="red" />,
            },
            {
                
                tech: <TbBrandStripe />,
            },
            {
                
                tech: <SiMaterialui />,
            },
            {
                
                tech: <DiScrum />,
            },
            {
                
                tech: <div className='Expres' >Expres Js</div>,
            },
            {
                
                tech: <BiBarChart
                color="#01DCFF" />,
            },
            {
                
                tech: <SiPostgresql />
            },
            {
                
                tech: <SiSocketdotio color="#01DCFF" />,
            },
            {
                
                tech: <SiSequelize color="#01DCFF" />,
            },
            
        ] ,
        resume:'Sleep Tracker es una aplicación web que se conecta a tu reloj inteligente FitBit, el objetivo principal es ayudarte a mejor tu sueño y descanso, para eso te muestra de forma amigable los datos obtenidos respecto al sueño, tiempo y eficiencia, esto mediante gráficas claras y exactas las cuales también puedes descargar en formato PDF, además, te permite llevar un registro puntual de los cuatro aspectos diarios que más influyen en un buen descanso; la hora y tipo de merienda, el consumo de café, el consumo de alcohol y el ejercicio realizado, y muestra gráficas para que puedas comparar como influyen estos con respecto a tu descanso, así mismo cuenta con tips para dormir mejor, una calculadora que conforme a tu edad te indica el tiempo que debes dormir, el tiempo estimado de ejercicio que debes realizar y te proporciona algunas sugerencias de actividades, todo esto avalado por la OMS, Sleep tracker te permite tener un perfil y poder editarlo, la aplicación cuenta con tres tipos de planes, entre ellos el paquete premium que además de los beneficios antes descritos brinda acceso a una sala de chat donde podrán compartir sugerencias, experiencias, etc.',
        git: 'https://github.com/Lizhana/sleep-tracker1',
        deploy: 'https://sleep-tracker-two.vercel.app/',
        video: videoS,
        
    },
    {
        name: 'Proyecto Integral Video Games',
        techs: [
            {
                tech: <TbBrandJavascript color="#01DCFF" />
            },
            {
                
                tech: <GrReactjs color="#01DCFF" />,
            },
            {
                tech: <IoLogoCss3 color="#264DE4" />
            },
            {
                
                tech: <SiRedux color="#764ABC" />,
            },
            {
                
                tech: 'Express Js',
            },

            {
                
                tech: <SiPostgresql />
            },
            {
                
                tech: <SiSequelize color="#01DCFF" />,
            },
            
        ] ,
        resume:'Este proyecto se realizo en un plazo no mayor a tres semanas sin usar librerias externas, sus fuciones principales son:  Buscar videjuegos, Filtrarlos / Ordenarlos, Crear perfines nuevos de videojuegos.',
        git: 'https://github.com/Lizhana/PI-VideoGames',
        deploy: '',
        video: videoG,
        
    },
    {
        name: 'App- Clima',
        techs: [
            {
                tech: <TbBrandJavascript color="#01DCFF" />
            },           
            {
                tech: <IoLogoCss3 color="#264DE4" />
            },
            {
                tech: <IoLogoHtml5  />
            },
            {
                
                tech: <GrReactjs color="#01DCFF" />,
            },
        ],
        resume:'Es una aplicacion que se alimenta de una Api externa, su finalidad es conocer el clima de diversas ciudades y paises, ademas ofrece informacion extra con respeto al pais que se ha buscado. Tiene un seach bar para buscar el lugar que se desee',
        git: 'https://github.com/Lizhana/App-Clima',
        deploy: '',
        video: videoA,
        
    },
]