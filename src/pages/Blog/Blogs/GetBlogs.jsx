import blog1 from "./blog1";
import blog2 from "./blog2";

export default function getBlogs() {
    return [
        blog1(),
        blog2()
    ];
}