
/*
In MVC, no other part cares about changing the DOM except for the view. The view can attach user events but leaves event handling concerns to the controller.
The view’s prime directive is to change the state of what the user sees on the screen.
 */

class viewHandler {
    constructor(html) {
        /* 
        Instance variables here will recieve the htmlRewrite variable and then invoke a function
        to perform DOM and display htmlRewrite string
        - Instance variable here is just gonna be an array of objects contaning strings
        */
        this.html = html;
    }

    htmlRewrite() {

    }


}