import React from 'react';
import { SiPcgamingwiki } from 'react-icons/si';
import { BsCpuFill, BsMotherboardFill } from 'react-icons/bs';
import { PiGameControllerFill, PiGraphicsCardFill } from 'react-icons/pi';
import { FaList } from 'react-icons/fa';

const CategoryIcon: React.FC<{ categoryId: number }> = ({ categoryId }) => {
  switch (categoryId) {
    case 1:
      return <SiPcgamingwiki style={{ marginRight: '5px' }} />;
    case 2:
      return <BsCpuFill style={{ marginRight: '5px' }} />;
    case 3:
      return <PiGameControllerFill style={{ marginRight: '5px' }} />;
    case 4:
      return <PiGraphicsCardFill style={{ marginRight: '5px' }} />;
    case 5:
      return <BsMotherboardFill style={{ marginRight: '5px' }} />;
    default:
      return <FaList style={{ marginRight: '5px' }} />; // Ícone padrão, se nenhum ID corresponder
  }
};

export default CategoryIcon;
