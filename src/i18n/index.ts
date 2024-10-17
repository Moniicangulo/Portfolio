import spanish from './es.json';
import english from './en.json';

const languages = {
  spanish: 'es',
  english: 'en'
};

export const geti18n = ({ currentLocale = 'es' }: { currentLocale: string | undefined }) => {
  if (currentLocale === 'en') {
    return english;
  }
  if (currentLocale === 'es') {
    return spanish;
  }
  return spanish; 
};