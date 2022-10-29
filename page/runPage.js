import { buildPage } from './buildPage.js';

export function runPage() {
    let body, page;

    body = getBody();
    clearBody(body);
    page = buildPage();
    addPageToBody(body, page);
    
    function getBody(){
        return document
            .getElementsByTagName(
                "body"
            )[0];
    }

    function clearBody(body) {
        body.textContent = '';
    }

    function addPageToBody(body, page) {
        body.append(page);
    }
}