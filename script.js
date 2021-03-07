const pic = document.createElement("img")
const zone = document.getElementById("rezultzon")
const text = document.getElementById("phrase")
const btn = document.getElementById("submit")

pic.width = "400";
pic.height = "280";

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://i.pinimg.com/originals/dd/b3/07/ddb3072916931e04daf7a454a8d4b31f.jpg"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

function mosted(arr) {
	var count = 0;
	var tmp = 0;
	var counttmp = 1;
	for(var j=0;j<arr.length;j++){
	for(var i=1;i<arr.length;i++){
		if(arr[j]==arr[i]){count++;}}
		if(count>counttmp){tmp = arr[j]; counttmp = count;}
		count = 0;}
	return tmp;}

function listener(){
const message = document.getElementById("message").value.toLowerCase()
	
if(message.length>20){

var int = Math.floor(Math.random() * Math.floor(3));
text.innerHTML = randomPhrasesAndPictures[int].phrase;
pic.src = randomPhrasesAndPictures[int].imageURL;
zone.append(pic);

let messageWords = message.split(' ');
console.log(messageWords)

let numberOfWordsInTheMessage = message.split(/\s+\b/).length;
console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)

let theMostFrequentWord = mosted(messageWords);
console.log(`The most frequent word of the message is "${theMostFrequentWord}"`) 
}else{alert("message length < 20 !!!");} }