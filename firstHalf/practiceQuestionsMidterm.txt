What HTML element indicates the most important header text in the body of a web page?
<h1>
2. What HTML elements make text italic by default on most web browsers? List two different tags.
<em> <i> <var>
3. What HTML elements indicate computer code? List two different tags.
<var> <code> <samp>
4. What HTML element allows you to embed CSS?
<style>
5. Fix this HTML code so it will validate: <a href="http://cnn.com>"News</a>
<a href="http://cnn.com">News</a>
6. Fix the syntax error in this CSS code: p { font-size = 10rem }
p { font-size: 10rem }
7. Show at least two different ways to specify bright red in CSS code.
#FF0000 rgb(255,0,0) rgba(255,0,0,1.0)
8. Which language defines the structural layer of a web page? Write the full name
HyperText Markup Language
9. Which language defines the presentational layer of a web page? Write the full name
Cascading Style Sheet
10. Which language defines the behavioral layer of a web page? Write the full name
JavaScript
11. What are the four required elements in an HTML5 document?
<html> <body> <title> <meta charset="utf-8">
12. Rewrite the following content to mark it up as an HTML table. Use as many appropriate tags as possible.
Name Exam 1 Exam 2
Eric 75 79
Darren 106 103
Ave. 90.5 91.0
<table>
<thead>
<tr><th>Name</th><th>Exam 1</th><th>Exam 2</th></tr>
</thead>
<tbody>
<tr><td>Eric</td><td>75</td><td>79</td></tr>
<tr><td>Darren</td><td>106</td><td>103</td></tr>
</tbody>
<tfoot>
<tr><td>Ave.</td><td>90.5</td><td>91.0</td></tr>
</tfoot>
</table>
CSIS-390 Midterm Practice
2
CSIS-390 Midterm Practice
3
13. This HTML attribute is used to specify the URL of
an image in the <img> tag. src
14. The main purpose of headings (<h1>,< h2>, etc.)
is to control text size True False
15. By default, most web browsers will indent
paragraphs. True False
16. The names of HTML attributes should be in
quotes. True False
17. Which HTML tag is used to include an external
style sheet? <link>
18. Which HTML tag is to include JavaScript?
<script>
19. Which tag is used to make a radio button?
<input type="radio">
20. Which two tags are used to make a drop down
menu in a form?
<select> <option>
21. Which tag is used to define an ordered list?
<ol>
22. What symbol is used in CSS to select elements by
their unique id? #
23. What CSS property moves an element down to
avoid previously floated element.
clear
24. Write the HTML code to insert a picture with the
source file "smallpic.jpg" and then make this
picture a hyperlink to "bigpic.jpg"
<a href="bigpic.jpg">
<img src="smallpic.jpg">
</a>
25. Consider this CSS code:
nav ul li {
background-color: red;
font-weight: bold;
}
What part is the selector? nav ul li
The colon (:) is used to separate
CSS properties from their values.
What values are used? red and bold
26. In CSS, the . operator selects elements by their
class name.
Consider this code:
<ol class="num">
<li id="first" class="best">Derpy</li>
<li id="second" class="good">Rarity</li>
<li id="third" class="good">Spike</li>
</ol>
<ul class="items">
<li class="good">Caring</span></li>
<li class="good">Friendship</span></li>
<li class="best">Ninjitsu</span></li>
</ul>
Write the CSS to give…
27. All <li> tags red text
li { color: red }
28. The second ordered <li> tag blue text
#second { color: blue }
29. All unordered <li> tags green text
ul li { color: green }
30. All elements will class="best" pink text
.best { color: pink }
31. All <li> tags will class="good" that are in a
unordered list purple text
ul li.good { color: purple }
CSIS-390 Midterm Practice
4
Consider page1.html:
<html>
<head>
<link href="page1.css" rel="stylesheet">
<style>
p {
color: red;
}
</style>
<title>A Sample CSS Page</title>
</head>
<body>
My
<p>Little
<span style="color: green">Pony</span>
</p>
</body>
</html>
and page1.css:
body {
color: blue;
}
p {
color: purple;
}
32. What color is the word My?
Blue
33. What color is the word Little?
Red
34. What color is the word Pony?
Green
Consider page2.html:
<html>
<head>
<link href="page2.css" rel="stylesheet">
<style>
p {
color: red;
}
</style>
<title>A Sample CSS Page</title>
</head>
<body>
<div>My
<p>Little
<span>Pony</span>
</p>
<span class="pink">Friendship</span>
</div>
<p>is</p>
Magic
</body>
</html>
and page2.css:
p { color: orange; }
div p { color: blue; }
span { color: purple; }
.pink { color: pink; }
div { color: green; }
35. What color is the word My? Green
36. What color is the word Little? Blue
37. What color is the word Pony? Purple
38. What color is the word Friendship? Pink
39. What color is the word is? Red
40. What color is the word Magic? Black
CSIS-390 Midterm Practice
5
Consider this HTML document:
<!DOCTYPE html>
1<html>
2<head>
3<title>Website Title</title>
4<meta charset="utf-8">
</head>
5<body>
6<header>
7<h1 id="top">Website Title</h1>
8<h2>Webpage Title</h2>
9<h3>Slogan</h3>
10<nav>
11<ul>
12<li>
13<a href="home.html">
14<b>Home</b>
</a>
</li>
<li>
<a href="about.html">About</a>
</li>
</ul>
</nav>
</header>
15<article>
<h2>Article Title</h2>
<h3>Author Name</h3>
16<section class="intro">
<h3>Sub-title</h3>
<p><b>Paragraph</b></p>
</section>
<section class="main">
<h3>Sub-title</h3>
17<p>Paragraph.
18<img src="p1.jpg" alt="a class">
</p>
<p>Paragraph</p>
<p>Paragraph</p>
</section>
</article>
</body>
</html>
41. Circle at least 5 validation errors in the code on
the left. Do not assume there are any typos,
misspellings can be HTML validation errors.
42. How many HTML elements are direct "children"
of the <body> element? Do NOT count
grandchildren or great grandchildren. 2
43. The <html> element is at the highest level (level
0) and the <body> and <head> elements are just
below (level 1). What is the deepest level? 7
44. Starting with the <html> element, number the
first occurrence of each HTML element to count
the total number of different elements used. 18
45. How many different HTML attributes are used in
the document? List them below to help count
them.
charset, id, href, class, alt, and src
46. Write the CSS code to make the Webpage
Title text red. No other text should be red. You
cannot use inline CSS.
#id { color: red }
47. Write the CSS code to make all paragraphs in the
intro section, i.e., <section class="intro"> italic.
You cannot use inline CSS and no other text
should be italic
section.intro p { font-style: italic }
48. Explain why it is difficult to use linked or
embedded CSS to change the style of the Author
Name. How you could modify the HTML to make
it easier to style the author name no matter
where it is or no matter how the document is
structured?
The h3 element appears in different places.
We could add an id to select it no matter
how the document is structured.
Assuming the author name always in the first h3
in the article, we could select it using:
article li:nth-child(1)
CSIS-390 Midterm Practice
6
49. Which tag is the least semantic, i.e., it describes appearance rather than meaning
a. <section> b. <b> c. <table> d. <ul> e. <p>
50. Explain your answer above:
<b> describes how the text looks, i.e., bold, whereas all the other tags tell you something about
the identity of the content, i.e., section, table, unordered list, paragraph
51. Which tag is the most semantic, i.e., it is most helpful in understanding the meaning of the content
a. <font> b. <b> c. <ol> d. <em> e. <strong>
52. Explain your answer above:
<ol> describe two things about the content, i.e., list and ordered, whereas Note the font tag is
an obsolete tag used to give text color and weight, so it is entirely about appearance, not semantics.
53. Why do we give HTML elements id attributes?
To uniquely select the element via CSS or JavaScript selectors.
54. Why do we give HTML elements class attributes?
To classify one or more elements so the group can be styled or selected using CSS or JavaScript
55. Why do we give HTML elements href attributes?
To specify the URL. For example, the <link> tag specifies the URL of a stylesheet to include.
56. Why do we give HTML elements name attributes?
To identify form elements for traditional form submission (GET or POST method).
57. What is the correct way to specify the character set of an HTML document?
<meta charset="name_of_character_set">
58. What is the correct way to use or include an external stylesheet called "bootstrap.css"?
<link rel="stylesheet" href="bootstrap.css">
59. What is the correct way to use or include an external JavaScript file called " script.js"?
<script src="script.js">/<script>
60. <p style="text-align: center">Paragraph text.</p> is an example of inline CSS.
61. Linking an external stylesheet to all the pages of a website helps to create a consistent look and feel. What
is another equally important reason for using linked/external stylesheets?
To eliminate CSS code redundancy.
To centrally control the appearance of all the web pages of a website
CSIS-390 Midterm Practice
7
Consider this URL: http://pm4.breimer.net/project2/admin.php?status=active
62. The URL above is : a. relative b. absolute c. root-relative d. universal
63. In the URL above, the name of the protocol is http
the name of the document is admin.php and
the document is in a folder named project2
64. In the URL above, the ? indicates
a. The presence of PHP code in the script
b. The start of the URL query string also called the parameter list
c. That the GET method will be used by the script
d. That the script will execute an SQL query
Write the CSS code to do each of the following.
65. Give all <li> elements red text but only if they
are inside of an <ol> element which is inside
of a <nav> element
nav ol li { color: red }
66. Give all <p> elements red text but only if they
are inside of a <div> element with the
class="alert"
div.alert p { color: red }
67. Make all element with the class ="box" have a
1px solid black border but only if the element
is inside of a <section> element with the
id="boxed_elements"
section#boxed_elements .box {
border: 1px solid black;
}
Write the name of the CSS property:
68. Changes font size
font-size
69. Changes background color
background-color
70. Makes text underlined
text-decoration
71. Draws a decorated line around an element
border
72. Makes elements appear as block or inline
display
73. Draws a shadow to decorate text
text-shadow
CSIS-390 Midterm Practice
8
74. Write a JavaScript function called changeToBlue that does the following:
It defines a variable called myBody that points to the document's <body> element. Use an appropriate
method to select the <body> element from the document. It sets the following attribute to the selected
element: style="color: blue"
function changeToBlue() {
var myBody = document.querySelector("body");
myBody.setAttribute("style", "color: blue");
}
75. Write JavaScript code to select an element with id="Blue" and add an event listener so when the element
is clicked the changeToBlue function is called.
document.querySelector("#Blue").addEventListener("click", changeToBlue);
76. Write a JavaScript function called makeList that will generate an ordered or unordered list from an array.
The function should take two parameters: an array of values and the list type.
makeList(["Friendship","Love","Caring"], "ol") would return the following HTML.
<ol>
<li>Friendship</li>
<li>Love</li>
<li>Caring</li>
</ol>
function makeList(arrayOfValues, type) {
var newList = document.createElement(type);
for (var i = 0; i < arrayOfValues.length; i++) {
var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode(arrayOfValues[i]));
newList.appendChild(newItem)
}
return newList;
}
CSIS-390 Midterm Practice
9
77. Write a JavaScript function called makeBinaryChoice to create a pair of radios buttons with labels. The
function should take four parameters: a label, a name and two values.
makeBinaryChoice("Color: ", "color", "Black", "Blue") would return the following HTML.
<div>
<label>Color: </label>
<label for="Black">Black</label>
<input value="Black" name="color" id="Black" type="radio">
<label for="Blue">Blue</label>
<input value="Blue" name="color" id="Blue" type="radio">
</div>
function makeBinaryChoice(label, name, value1, value2) {
var newDiv = document.createElement("div");
var newLabel = document.createElement("label");
newLabel.appendChild(document.createTextNode(label));
var label1 = document.createElement("label");
label1.setAttribute("for", value1);
label1.appendChild(document.createTextNode(value1));
var radio1 = document.createElement("input");
radio1.setAttribute("value", value1);
radio1.setAttribute("name", name);
radio1.setAttribute("id", value1);
radio1.setAttribute("type", "radio");
var label2 = document.createElement("label");
label2.setAttribute("for", value2);
label2.appendChild(document.createTextNode(value2));
var radio2 = document.createElement("input");
radio2.setAttribute("value", value2);
radio2.setAttribute("name", name);
radio2.setAttribute("id", value2);
radio2.setAttribute("type", "radio");
newDiv.appendChild(newLabel);
newDiv.appendChild(label1);
newDiv.appendChild(radio1);
newDiv.appendChild(label2);
newDiv.appendChild(radio2);
return newDiv;
}
