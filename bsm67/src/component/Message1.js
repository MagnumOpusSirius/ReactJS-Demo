
//PascalCase
function Message1(){
    // JSX: Javascript XML
    // gets converted ti JS code.

    // we can easily create dynamic content using JSX
    // we use {any code that produces a value}
    const name="Bruce";
    return <h1> Hello {name} </h1>
}

//to use this we need to export it as default object from this module
export default Message1;