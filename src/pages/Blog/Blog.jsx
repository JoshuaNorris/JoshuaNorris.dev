import ArticleOverview from './Article/ArticleOverview/ArticleOverview';
import './Blog.scss';
import getBlogs from './Articles/Articles';

/**
 * Take all articles and put them into a Article Overview object
 */
export default function Blog() {

    // TODO Add styling, should just be a global css style for all pages that arent home to just add marigns like https://www.emgoto.com/
    return (
        <div className='contentPage'>
            <div className='contentContainer'>
                <h1>Here are all the blogs</h1>
                <ul className='articleList'>
                { getBlogs().map (
                    ( article ) => <ArticleOverview article={article} />
                )}
                </ul>
            </div>
        </div>
    )
}