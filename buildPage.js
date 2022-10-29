export function buildPage() {
    let output;
    
    let page;

    pageTitle = "it's cool man";
    page = createPage();
    page.innerHTML = "🚀"

    output = page;
    return output;

    function createPage() {
        return document
        .createElement("article");
    }
}