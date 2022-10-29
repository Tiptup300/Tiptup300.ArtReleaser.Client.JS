import { buildPage } from './buildPage.js';

var pageTitle = "";
var db = [];

export function runPage() {
    let body, page;

    body = getBody();
    clearBody(body);
    page = buildPage();
    addPageToBody(body, page);
    setPageTitle();
    
    function getBody(){
        let output;

        output = 
            document
            .getElementsByTagName(
                "body"
            );

        return output;
    }

    function clearBody(body) {
        body.textContent = '';
    }

    function addPageToBody(body, page) {
        body.appendChild(page);
    }

    function setPageTitle() {
        document.title = pageTitle;
    }
}