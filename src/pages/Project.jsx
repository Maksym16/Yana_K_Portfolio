import React from 'react';
import { useParams } from "react-router-dom";
import FinDo from '../components/FinDo';
import PortlandElectric from '../components/PortlandElectric';
import Evelina from '../components/Evelina';
import GlowYoga from '../components/GlowYoga';
import SnovIo from '../components/SnovIo';

const Project = () => {
  const { id } = useParams();
 
  const projectSwitcher = (id) => {
    switch (id) {
      case 'fin-do':
        return <FinDo />
      case 'snov':
        return <SnovIo />
      case 'glow-yoga':
        return <GlowYoga />
      case 'evelina':
        return <Evelina />
      case 'portland-electric':
        return <PortlandElectric />
      default:
        <></>
    }
  }
  return (
    <>
      {projectSwitcher(id)}
    </>
  );
}

export default Project;
