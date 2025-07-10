import ArticleOverview from './Article/ArticleOverview/ArticleOverview';
import './Blog.scss';
import getBlogs from './Blogs/GetBlogs';

/**
 * Take all articles and put them into a Article Overview object
 */
export default function Blog() {

    // TODO Add styling, should just be a global css style for all pages that arent home to just add marigns like https://www.emgoto.com/
    return (
        <>
            { getBlogs().map (
                ( article ) => <ArticleOverview article={article} />
            )}
        </>
    )
}