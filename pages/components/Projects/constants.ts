import { Project } from './item';
import VitaImage from './assets/vita-life-story.png';

export const PROJECT_ITEMS: Project[] = [
  {
    name: 'Vita Life Story',
    description:
      'Group project using Python, Django, SQL, and AWS to create a photo sharing app',
    image: '/assets/vita-life-story.png',
    stacks: ['Django'],
    links: [
      {
        type: 'Github',
        href: 'https://github.com/hummingbirdcreative/Vita-App.git',
      },
      {
        type: 'External',
        href: 'https://vita-life-story.herokuapp.com/',
      },
    ],
  },
];
