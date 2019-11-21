import business from '../assets/images/business-card-cover.jpg';
import integrator from '../assets/images/integrator-card-cover.jpeg';
import government from '../assets/images/government-card-cover.jpg';
import user from '../assets/images/user-card-cover.jpg';
const roles = [
  {
    id: 0,
    name: 'Бизнес',
    image: business,
    link: '/business',
  },
  {
    id: 1,
    name: 'Интегратор',
    image: integrator,
    link: '/integrator',
  },
  {
    id: 2,
    name: 'Правительство',
    image: government,
    link: '/government'
  },
  {
    id: 3,
    name: 'Клиент',
    image: user,
    link: '/user'
  }
  ]
;

export default roles;
