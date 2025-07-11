import article1 from "./article1";
import article2 from "./article2";


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