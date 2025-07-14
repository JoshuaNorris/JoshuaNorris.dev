import { useParams } from 'react-router-dom'
import { getArticleByUrl } from '../configuration/ArticlesBackend/Articles';

/**
 * Convert the article object to be for full Article Page
 */
// TODO Setup Styling for general container
// TODO Setup styling for elememnts
export default function Article() {
    const { title } = useParams();
    const article = getArticleByUrl( title );

    return (
        <div className='contentPage'>
            <div className='contentContainer'>
                <h1>{ article.h1 }</h1>
                <h2>{ article.h2.titles[0] }</h2>
                <p>{ article.h2.paragraphs[0] }</p>
                <h2>{ article.h2.titles[1] }</h2>
                <p>{ article.h2.paragraphs[1] }</p>
            </div>    
        </div>
    )
}