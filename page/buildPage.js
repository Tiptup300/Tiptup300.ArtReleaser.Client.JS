import { setPageTitle } from "./setPageTitle.js";

export function buildPage() {
    let output;
    
    let page;

    setPageTitle("it's cool man");
    page = createPage();
    page.innerHTML = "🚀"

    output = page;
    return output;

    function createPage() {
        return document
        .createElement("article");
    }
}