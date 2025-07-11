import './ArticleFull.scss';

/**
 * Convert the article object to be for full Article Page
 */
// TODO Setup Styling for general container
// TODO Setup styling for elememnts
export default function ArticleFull({ article }) {
    const { h1, summary } = article;

    return (
        <>
            <h1>{h1}</h1>
            <p>{summary}</p>
        </>
    )
}