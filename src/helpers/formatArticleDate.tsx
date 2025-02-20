import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function formatArticleDate(date: string) {
  const dateFormatted = format(date, 'MMM dd, yyyy', { locale: es });
  return `${dateFormatted.charAt(0).toUpperCase()}${dateFormatted.slice(1)}`;
}

export default formatArticleDate;
