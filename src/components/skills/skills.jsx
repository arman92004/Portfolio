import React from "react";
import "./skills.scss"
import { FaJava,FaHtml5, FaCss3Alt  } from 'react-icons/fa';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
const skills = () => {
    return (
        <div className="skills">
          <div className="heading">
            <h1><h1>What I wield</h1></h1>
          </div>
            <div className="skills-container">
          <div className="tech-icons">
          <FaJava />
          </div>
          <div className="tech-icons">
          <DiJavascript1 />
          </div>
          <div className="tech-icons">
          <DiReact />
          </div>
          <div className="tech-icons">
          <DiNodejs />
          </div>
          <div className="tech-icons">
          <DiMongodb />
          </div>
          <div className="tech-icons">
          <FaHtml5 />
          </div>
          <div className="tech-icons">
          <FaCss3Alt />
          </div>
          <div className="tech-icons">
          {/* <img src="." alt="" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="256" height="133" viewBox="0 0 204.8 105.765"><path d="M0 96.334h6.747V69.7l10.445 23.227c1.232 2.8 2.92 3.806 6.228 3.806s4.93-.995 6.164-3.806L40.03 69.7v26.644h6.748v-26.6c0-2.595-1.04-3.85-3.18-4.498-5.125-1.6-8.564-.216-10.12 3.244l-10.25 22.923L13.3 68.48c-1.492-3.46-4.995-4.844-10.12-3.244C1.038 65.885 0 67.14 0 69.734v26.6zm52.386-21.686h6.745v14.68c-.063.798.256 2.67 3.952 2.727 1.886.03 14.554 0 14.672 0v-17.48h6.76c.03 0-.007 23.834-.006 23.936.037 5.878-7.294 7.155-10.672 7.254H52.533v-4.54l21.342-.001c4.342-.46 3.83-2.617 3.83-3.344v-1.77h-14.34c-6.672-.06-10.92-2.973-10.973-6.323-.005-.3.144-14.995-.004-15.14z" fill="white"/><path d="M89.716 96.334h19.398c2.27 0 4.477-.475 6.23-1.298 2.92-1.34 4.347-3.157 4.347-5.536v-4.93c0-1.947-1.622-3.763-4.8-4.974-1.687-.65-3.763-.995-5.774-.995h-8.175c-2.724 0-4.022-.822-4.346-2.638-.065-.216-.065-.4-.065-.606v-3.07c0-.173 0-.347.065-.563.324-1.384 1.038-1.774 3.438-2 .195 0 .454-.044.65-.044h19.268v-4.497h-18.944c-2.725 0-4.152.173-5.45.562C91.532 67 89.78 69 89.78 72.46v3.936c0 3.028 3.44 5.623 9.212 6.228.65.043 1.298.086 1.946.086h7.007c.26 0 .52 0 .714.044 2.14.173 3.05.562 3.698 1.34.4.4.52.78.52 1.2v3.936c0 .476-.324 1.082-.973 1.6-.584.52-1.557.865-2.855.952-.26 0-.454.043-.713.043h-18.62v4.498zm72.064-7.828c0 4.628 3.438 7.223 10.38 7.742a29.45 29.45 0 0 0 1.946.086h17.582v-4.498h-17.712c-3.957 0-5.45-.995-5.45-3.374v-23.27h-6.747v23.312zm-37.785.234V72.705c0-4.074 2.86-6.545 8.516-7.325a12.94 12.94 0 0 1 1.821-.13h12.807a13.87 13.87 0 0 1 1.886.13c5.656.78 8.516 3.25 8.516 7.325V88.74c0 3.305-1.215 5.074-4.015 6.227l6.646 6h-7.834l-5.377-4.854-5.413.343h-7.216c-1.235 0-2.535-.174-3.966-.564-4.3-1.17-6.37-3.424-6.37-7.152zm7.283-.4c0 .217.065.433.13.694.4 1.864 2.145 2.904 4.8 2.904h6.13l-5.63-5.083h7.834l4.9 4.433c.905-.482 1.5-1.22 1.7-2.167.065-.216.065-.433.065-.65V73.096c0-.173 0-.4-.065-.607-.4-1.733-2.146-2.73-4.746-2.73H136.22c-3 0-4.94 1.3-4.94 3.337v15.256z" fill="white"/><g fill="white"><path d="M197.624 57.73c-4.147-.112-7.316.273-10.024 1.415-.77.325-1.997.333-2.123 1.298.423.443.49 1.105.825 1.65.647 1.047 1.74 2.45 2.713 3.184 1.064.803 2.16 1.663 3.303 2.36 2.03 1.238 4.296 1.945 6.25 3.184 1.152.73 2.296 1.65 3.42 2.476.555.408.93 1.042 1.65 1.297v-.118c-.38-.483-.477-1.147-.825-1.65l-1.533-1.533c-1.5-2-3.402-3.737-5.425-5.19-1.613-1.158-5.224-2.722-5.897-4.6l-.118-.118c1.144-.13 2.483-.543 3.54-.825 1.773-.475 3.358-.353 5.19-.825l2.477-.708v-.472c-.926-.95-1.586-2.207-2.595-3.066-2.64-2.25-5.523-4.495-8.49-6.37-1.646-1.04-3.68-1.714-5.425-2.595-.587-.296-1.618-.45-2.005-.944-.916-1.168-1.415-2.65-2.122-4-1.48-2.85-2.934-5.964-4.246-8.963-.895-2.045-1.48-4.062-2.594-5.897-5.355-8.804-11.12-14.118-20.048-19.34-1.9-1.11-4.187-1.55-6.605-2.123l-3.892-.236c-.792-.33-1.616-1.3-2.36-1.77-2.958-1.87-10.545-5.933-12.736-.6-1.383 3.373 2.067 6.664 3.302 8.374.866 1.2 1.976 2.543 2.594 3.892.407.886.478 1.775.826 2.713.857 2.3 1.603 4.823 2.712 6.958.56 1.08 1.178 2.218 1.887 3.184.435.593 1.18.854 1.297 1.77-.728 1.02-.77 2.6-1.18 3.892-1.843 5.812-1.148 13.035 1.533 17.337.823 1.32 2.76 4.152 5.425 3.066 2.33-.95 1.8-3.89 2.477-6.486.15-.59.058-1.02.354-1.415v.118l2.123 4.245c1.57 2.53 4.36 5.175 6.722 6.96 1.225.925 2.2 2.525 3.774 3.066v-.118h-.118c-.307-.48-.787-.677-1.18-1.06-.923-.905-1.95-2.03-2.713-3.066-2.15-2.918-4.048-6.11-5.778-9.435-.826-1.587-1.545-3.338-2.24-4.953-.268-.623-.265-1.564-.825-1.887-.763 1.184-1.887 2.14-2.477 3.538-.944 2.234-1.066 4.958-1.415 7.784-.207.074-.115.023-.236.118-1.642-.396-2.22-2.087-2.83-3.538-1.544-3.67-1.83-9.576-.472-13.798.35-1.092 1.94-4.534 1.297-5.543-.307-1.007-1.32-1.6-1.887-2.36-.7-.95-1.402-2.204-1.887-3.302-1.264-2.86-1.854-6.07-3.184-8.963-.636-1.382-1.71-2.78-2.594-4-.978-1.36-2.073-2.364-2.83-4-.27-.585-.636-1.52-.236-2.123a.93.93 0 0 1 .708-.708c.684-.527 2.59.175 3.302.472 1.89.786 3.47 1.534 5.072 2.595.77.5 1.547 1.496 2.476 1.77h1.06c1.66.382 3.52.12 5.07.59 2.742.833 5.198 2.13 7.43 3.538 6.798 4.292 12.355 10.402 16.157 17.7.612 1.173.876 2.294 1.415 3.538 1.087 2.5 2.456 5.093 3.538 7.547 1.08 2.45 2.13 4.92 3.656 6.958.802 1.07 3.9 1.646 5.307 2.24.987.417 2.603.852 3.538 1.415 1.785 1.077 3.515 2.36 5.19 3.54.837.59 3.41 1.883 3.538 2.948z"/><path d="M144.91 12.798c-.865-.016-1.476.094-2.123.236v.118h.118c.412.848 1.14 1.393 1.65 2.123l1.18 2.476.118-.118c.73-.515 1.065-1.338 1.06-2.595-.293-.308-.336-.694-.59-1.062-.337-.49-1-.768-1.415-1.18z" fill-rule="evenodd"/></g><path d="M194.855 91.708c0 2.97 2.347 4.972 4.972 4.972s4.972-2.002 4.972-4.972-2.347-4.972-4.972-4.972-4.972 2.002-4.972 4.972zm8.83 0c0 2.254-1.723 3.938-3.86 3.938-2.16 0-3.86-1.684-3.86-3.938s1.698-3.938 3.86-3.938c2.135 0 3.86 1.684 3.86 3.938zm-2.52 2.838h1.113l-1.63-2.492c.875-.093 1.537-.518 1.537-1.552 0-1.154-.73-1.63-2.134-1.63h-2.215v5.675h.955v-2.453h.888l1.485 2.453zm-2.374-3.25v-1.63h1.1c.57 0 1.26.106 1.26.77 0 .795-.623.862-1.34.862h-1.02z" fill="white" fill-rule="evenodd"/></svg>
          </div>
    
          <div className="tech-icons">
          <DiGit />
          </div>
          <div className="tech-icons">
          <svg width="100px" height="100px" viewBox="0 0 256 204" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <title>Bootstrap</title>
        <g>
            <path d="M53.1720678,0 C38.5648814,0 27.7564746,12.7848136 28.2402712,26.6500339 C28.7045424,39.9707119 28.1014237,57.2225085 23.7581017,71.291661 C19.4017627,85.4020339 12.0341695,94.340339 0,95.488 L0,108.444203 C12.0341695,109.591864 19.4017627,118.530169 23.7581017,132.640542 C28.1014237,146.709695 28.7045424,163.961492 28.2402712,177.282169 C27.7564746,191.14522 38.5648814,203.932203 53.1742373,203.932203 L202.847458,203.932203 C217.454644,203.932203 228.260881,191.14739 227.777085,177.282169 C227.312814,163.961492 227.915932,146.709695 232.259254,132.640542 C236.617763,118.530169 243.965831,109.591864 256,108.444203 L256,95.488 C243.965831,94.340339 236.617763,85.4020339 232.259254,71.291661 C227.915932,57.224678 227.312814,39.9707119 227.777085,26.6500339 C228.260881,12.7869831 217.454644,0 202.847458,0 L53.1698983,0 L53.1720678,0 Z M173.559322,125.533288 C173.559322,144.624814 159.31878,156.20339 135.686508,156.20339 L95.4576271,156.20339 C93.0612729,156.20339 91.1186441,154.260761 91.1186441,151.864407 L91.1186441,52.0677966 C91.1186441,49.6714424 93.0612729,47.7288136 95.4576271,47.7288136 L135.456542,47.7288136 C155.162034,47.7288136 168.094373,58.4027119 168.094373,74.7910508 C168.094373,86.2936949 159.394712,96.5922712 148.31078,98.3951186 L148.31078,98.9960678 C163.399593,100.65139 173.559322,111.099661 173.559322,125.533288 Z M131.299797,61.4833898 L108.361763,61.4833898 L108.361763,93.8825763 L127.681085,93.8825763 C142.615864,93.8825763 150.851254,87.8687458 150.851254,77.1189153 C150.851254,67.0459661 143.770034,61.4833898 131.299797,61.4833898 L131.299797,61.4833898 Z M108.361763,106.738983 L108.361763,142.444475 L132.143729,142.444475 C147.692475,142.444475 155.930034,136.205017 155.930034,124.478915 C155.930034,112.750644 147.462508,106.736814 131.143593,106.736814 L108.361763,106.736814 L108.361763,106.738983 Z" fill="white"></path>
        </g>
    </svg>
          </div>
    
        </div>
    </div>
    
      );
}

export default skills