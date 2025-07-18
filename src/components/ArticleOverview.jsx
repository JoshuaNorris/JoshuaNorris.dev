import { Link } from 'react-router-dom';
import { BLOG_PATH } from '../configuration/Routes';

export function urlifyTitle( title ) {
    return title
        .toLowerCase()
        .normalize('NFKD')                   // split accented letters
        .replace(/[\u0300-\u036F]/g, '')     // remove diacritic marks
        .replace(/[^a-z0-9\s-]/g, '')        // strip invalid chars
        .trim()                              // remove leading/trailing spaces
        .replace(/\s+/g, '-')                // spaces → hyphens
        .replace(/-+/g, '-');
}


/**
 * Convert the article object to be for an overview card
 */
// TODO Add styling to make this look like a "card"
export default function ArticleOverview({ article }) {
    const { h1, image } = article;

    return (
        <Link 
            to={ BLOG_PATH + "/" + urlifyTitle( h1 )}
            className='articleOverview'
            key={ urlifyTitle( h1 ) }
        >

            <img className='article-overview-image' src={image}></img>
            <h2>{h1}</h2>
            
        </Link>
    )
}