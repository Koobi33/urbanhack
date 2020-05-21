import business from '../assets/images/business-card-cover.jpg';
import integrator from '../assets/images/integrator-card-cover.jpeg';
import government from '../assets/images/goverment-card-cover.jpg';
import user from '../assets/images/user-card-cover.jpg';
const roles = [
  {
    id: 0,
    name: 'Business',
    image: business,
    link: '/business'
  },
  {
    id: 1,
    name: 'Integrator',
    image: integrator,
      link: '/integrator'
  },
  {
    id: 2,
    name: 'Government',
    image: government,
      link: '/government'
  },
  {
    id: 3,
    name: 'Customer',
    image: user,
      link: '/user'
  }
  ]
;

export default roles;
