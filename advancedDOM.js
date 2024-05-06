let text = document.getElementsByTagName('h1')[0];
console.log(text.innerText);


//adding additional text to innerText
// let element = text.innerText;
// text.innerText = element + "Some other text";


text.append("Some other text");           //adds text in the last position
text.prepend("Hi")                        //adds text in the first position
text.before("Nitya")                      //gives text before the tag
text.after("Sunkara")                     //gives text after the tag


//setting attributes to a tag
text.setAttribute('style', 'color:red')
text.setAttribute('src','link')


//creating a new tag
let h2Element = document.createElement('h2');
console.log(h2Element);
h2Element.innerText = 'San Jose';
let myBody = document.getElementsByTagName('body')[0];
myBody.append(h2Element)

