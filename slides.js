/**
 * Store and construct all slides
 */
class Slide(html, script){
    this.html = html;
    this.script = script;
}
slides = [
    Slide(<div id="0">Hello</div>)
]
slides.forEach(element => {
    print(element)
});
