import './ArticleOverview.scss';

/**
 * Convert the article object to be for an overview card
 */
// TODO Add styling, probably just a rectangle in the space it's container gives it with a mobile format that is more of a square
// TODO Add dates to object
// TODO Add images to object
// TODO Setup link from this element to the full article page
export default function ArticleOverview({ article }) {
    const { h1, image, summary } = article;

    return (
        <li className='articleOverview'>
            <img className='article-overview-image' src={image}></img>
            <h2>{h1}</h2>
        </li>
    )
}