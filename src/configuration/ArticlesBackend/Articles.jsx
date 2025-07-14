import article1 from "./article1";
import article2 from "./article2";
import { urlifyTitle } from '../../components/ArticleOverview';


export default function getArticles() {
    return [
        article1(),
        article2(),
        article1(),
        article2(),
        article1(),
        article2(),
        article1(),
        article2(),
        article1(),
        article2()
    ];
}

export function getArticleByUrl( url ) {
    return getArticles()
            .find( article => 
                urlifyTitle(article.h1) === url
            );
}