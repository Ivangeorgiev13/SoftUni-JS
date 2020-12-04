import {errorHandler} from '../helpers.js'

export function create () {
    const { title, category, content } = this.params;
    const categories = ['javascript', 'python', 'java', 'c#'];

    if (categories.includes(category.toLowerCase())) {
        const obj = { title, category, content, creator: data.userid };
    
        fetch(baseUrl + '.json', {
            method: "POST",
            body: JSON.stringify(obj)
        }).then(() => this.redirect('/'))
            .catch(errorHandler)
    } else {
        let error = {message: "The category must be one of the following: JavaScript, Python, Java or C#"};
        errorHandler(error);
    }
}