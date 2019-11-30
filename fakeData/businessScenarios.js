import business from '../assets/images/business-card-cover.jpg';
import integrator from '../assets/images/integrator-card-cover.jpeg';
import government from '../assets/images/government-card-cover.jpg';

const businessScenarios = [
  {
    id: 0,
    name: 'Предложить услуги',
    image: business,
    link: '/business/vendor',
  },
  {
    id: 1,
    name: 'Участие в тендерах',
    image: integrator,
    link: '/business/tenders',
  },
  {
    id: 2,
    name: 'Размещение в SberStore',
    image: government,
    link: '/business/store'
  },
];

export default businessScenarios;
