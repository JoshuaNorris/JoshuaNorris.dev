import './ArticleFull.scss';

/**
 * Convert the article object to be for full Article Page
 */
// TODO
export default function ArticleFull({ article }) {
    const { h1, summary, h2 } = article;

    return (
        <>
            <h1>{h1}</h1>
            <p>{summary}</p>
        </>
    )
}