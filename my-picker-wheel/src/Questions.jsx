const questions = {
  "Python": [
    { question: "What is the output of 2 ** 3 in Python?", choices: ["6", "8", "9", "16"], answer: "8" },
    { question: "Which keyword is used to define a function in Python?", choices: ["func", "define", "def", "function"], answer: "def" },
    { question: "What data type is the result of `3 / 2` in Python 3?", choices: ["int", "float", "double", "str"], answer: "float" },
    { question: "What is the correct way to write a comment in Python?", choices: ["// Comment", "/* Comment */", "# Comment", "-- Comment"], answer: "# Comment" },
    { question: "Which module in Python is used for handling JSON data?", choices: ["json", "pickle", "csv", "os"], answer: "json" },
    { question: "What is the difference between `is` and `==` in Python?", choices: ["No difference", "`is` compares values, `==` compares references", "`is` compares references, `==` compares values", "Both compare references"], answer: "`is` compares references, `==` compares values" },
    { question: "Which of the following is a mutable data type in Python?", choices: ["tuple", "string", "list", "int"], answer: "list" },
    { question: "What is the purpose of the `__init__` method in Python?", choices: ["Initialize a class object", "Destroy a class object", "Loop through a list", "Define a function"], answer: "Initialize a class object" },
    { question: "Which function is used to read user input in Python?", choices: ["input()", "read()", "scan()", "get()"], answer: "input()" },
    { question: "What will be the output of `print(type([]))`?", choices: ["list", "dict", "tuple", "set"], answer: "list" }
  ],

  "AI/ML": [
    { question: "What does CNN stand for in Deep Learning?", choices: ["Convolutional Neural Network", "Cognitive Neural Network", "Computational Neural Network", "Conscious Neural Network"], answer: "Convolutional Neural Network" },
    { question: "What is supervised learning?", choices: ["A type of ML where data is labeled", "A type of ML where data is not labeled", "A self-learning AI model", "A learning method for robots"], answer: "A type of ML where data is labeled" },
    { question: "Which algorithm is commonly used for classification problems?", choices: ["K-Means", "Linear Regression", "Decision Trees", "DBSCAN"], answer: "Decision Trees" },
    { question: "What does the term 'overfitting' mean in Machine Learning?", choices: ["When a model learns too much from training data and performs poorly on new data", "When a model is too simple and performs well on all datasets", "When a model predicts too many classes", "When a model has too many hidden layers"], answer: "When a model learns too much from training data and performs poorly on new data" },
    { question: "What is the purpose of activation functions in neural networks?", choices: ["Introduce non-linearity", "Reduce computations", "Increase dataset size", "Normalize inputs"], answer: "Introduce non-linearity" },
    { question: "Which ML technique is used for anomaly detection?", choices: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Feature engineering"], answer: "Unsupervised learning" },
    { question: "Which of the following is an unsupervised learning algorithm?", choices: ["Linear Regression", "Decision Trees", "K-Means Clustering", "Naive Bayes"], answer: "K-Means Clustering" },
    { question: "What is the role of a loss function in training ML models?", choices: ["Measures model performance", "Increases accuracy", "Reduces training time", "Selects hyperparameters"], answer: "Measures model performance" },
    { question: "Which technique helps prevent overfitting in ML models?", choices: ["Adding more layers", "Reducing training data", "Regularization", "Ignoring validation set"], answer: "Regularization" },
    { question: "What is the purpose of backpropagation in neural networks?", choices: ["Calculate output", "Optimize learning rate", "Update weights", "Normalize inputs"], answer: "Update weights" }
  ],
  
  "Web Development": [
    { question: "What does HTML stand for?", choices: ["HyperText Markup Language", "High-Level Text Management Language", "Hyper Transfer Markup Language", "HyperText Markdown Language"], answer: "HyperText Markup Language" },
    { question: "What is the purpose of CSS?", choices: ["To structure web pages", "To style web pages", "To make websites interactive", "To store data on the server"], answer: "To style web pages" },
    { question: "Which CSS property controls the text size?", choices: ["font-size", "text-style", "text-size", "font-style"], answer: "font-size" },
    { question: "Which JavaScript function is used to fetch data from an API?", choices: ["getData()", "fetch()", "request()", "retrieve()"], answer: "fetch()" },
    { question: "Which tag is used to include JavaScript in HTML?", choices: ["<script>", "<js>", "<javascript>", "<code>"], answer: "<script>" },
    { question: "What is the default HTTP method for an HTML form?", choices: ["GET", "POST", "PUT", "DELETE"], answer: "GET" },
    { question: "Which HTML element is used to define an unordered list?", choices: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>" },
    { question: "Which JavaScript framework is used for front-end development?", choices: ["React", "Django", "Flask", "Laravel"], answer: "React" },
    { question: "Which HTTP status code represents a successful request?", choices: ["200", "404", "500", "301"], answer: "200" },
    { question: "Which CSS property is used for flexbox layout?", choices: ["display", "position", "flex", "grid"], answer: "display" }
  ]
};

export default questions;
