import { useParams } from 'react-router-dom';

const getPageTitle = () => {
  const { categoryId } = useParams();

  switch (categoryId) {
    case 'desktops':
      return 'Nuestras desktops';
    case 'notebooks':
      return 'Nuestras notebooks';
    case 'gadgets':
      return 'Nuestros gadgets';
    default:
      return 'Todos nuestros productos';
  }
};

export default getPageTitle;
