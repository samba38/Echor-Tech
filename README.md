This is small Node.js Express API built for the Echor Tech assignment.
The API takes sentence as input and returns the word_count, unique_words, and the reversed_sentences 

*** Input Example *** 
 { "sentence": "I love working with JavaScript and Node.js" }

*** Output Example ***
 {
  "word_count": 7,
  "unique_words": ["i","love","working","with","javascript","and","node.js"],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}

# Technologies used
 .Node js
 .Express js

# How to run the project
 npm install
 node index.js
 server runs on : http://localhost:3000

# Files
.index.js
  > This is main file for running server 
.app.http
 > This is used for testing