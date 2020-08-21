export const projectData = [
  {
    projects: [
      {
        id: 1,
        title: "Face Recognition App (Coming Soon)",
        description:
          "This is a React personal application with user authentications. Users can paste any image URL and the app will detect all faces in the image. This App will be using node.js and a database.",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>React</li><li>Face Recognition API</li><li>Tachyons</li><li>Node.js</li><li>PostgreSQL</li><li>VS Code</li>",
        image: require("../src/assets/fr.png"),
        code: {
          isAvailable: false,
          link: "",
        },
        view: {
          isAvailable: false,
          link: "",
        },
      },
      {
        id: 2,
        title: "Budget Bookkeeping Web App",
        description:
          "This is a Web Application that helps users to keep track of their income and expenses. My role was leading a team of five developers. Users can view all their expenses and revenue transaction. Also, users have the ability to generate custom reporting and search for a specific transaction id. users can add tasks to accomplished later and more.",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>PHP</li><li>MySQL Database</li><li>Bootstrap4</li><li>Google Charts && Maps</li>",
        image: require("../src/assets/bbk.PNG"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/budgetbookkeeping",
        },
        view: {
          isAvailable: true,
          link: "https://www.youtube.com/watch?v=peX4eEnmCwM",
        },
      },
      {
        id: 3,
        title: "Musical Database",
        description:
          "I was leading a team of 8 developers. Designed and developed Oracle database with 19 tables using oracle data modeling software and oracle APEX. Inserted more than 150 rows of data and develops more than 110 select statements.",
        tools:
          "<li>Oracle Database</li><li>APEX</li><li>Data Modeling</li><li>Oracle SQL</li><li>VS Code</li>",
        image: require("../src/assets/md.png"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/oracleDatabase",
        },
        view: {
          isAvailable: false,
          link: "",
        },
      },
      {
        id: 4,
        title: "RoboFriends",
        description:
          "This is a React personal project that fetch data such as images and names from an API. This app has a search functionality where a user can search for a specific robot based on the names.",
        tools:
          "<li>React</li><li>Tachyons</li><li>API</li><li>VS Code</li>",
        image: require("../src/assets/rf.png"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/robofriends",
        },
        view: {
          isAvailable: true,
          link: "https://dshammas.github.io/robofriends/",
        },
      },
      {
        id: 5,
        title: "DSEngineer dev-Portfolio",
        description:
          "This is my personal React website which presents and visualize my projects, skills, and the tools that I have used.",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>React</li><li>React-Bootstrap</li><li>React Routing</li><li>Font Awesome</li><li>Tilt.js</li><li>AOS animations</li><li>VS CODE</li>",
        image: require("../src/assets/portfolio.png"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/davidshammas",
        },
        view: {
          isAvailable: true,
          link: "https://dshammas.github.io/davidshammas/",
        },
      },
      {
        id: 6,
        title: "To-Do-List",
        description:
          "This a React personal app that is also using React routing to move between pages. Users have the ability to add and delete a task. Also, they can mark a task as completed.",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>React</li><li>React Routing</li><li>VS Code</li>",
        image: require("../src/assets/todolist.png"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/todo-list",
        },
        view: {
          isAvailable: true,
          link: "https://dshammas.github.io/todo-list/",
        },
      },
      {
        id: 7,
        title: "Shopping-List",
        description:
          "This is a vanilla JavaScript personal app that allows users to input items with quantity and price.",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Bootstrap 4</li><li>Font Awesome</li><li>VS Code</li>",
        image: require("../src/assets/shoppingList.png"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/shoppinglist",
        },
        view: {
          isAvailable: true,
          link: "https://dshammas.github.io/shoppinglist/",
        },
      },
      {
        id: 8,
        title: "Book-List",
        description:
          "This is a vanilla JavaScript personal app that allows users to input name, authors and the ISBN of the book and saves them into the local storage. ",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Bootstrap 4</li><li>Font Awesome</li><li>VS Code</li>",
        image: require("../src/assets/booklist.png"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/booklist",
        },
        view: {
          isAvailable: true,
          link: "https://dshammas.github.io/booklist/",
        },
      },
      {
        id: 9,
        title: "Exchange Rate Calculator",
        description:
          "This is a vanilla JavaScript personal app that also fetches the exchange rate of the currencies from an API. Designed the app using bootstrap and font awesome for the icons. ",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Bootstrap 4</li><li>Font Awesome</li><li>API</li><li>VS Code</li>",
        image: require("../src/assets/exchange.png"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/exchangeRateCalculator",
        },
        view: {
          isAvailable: true,
          link: "https://dshammas.github.io/exchangeRateCalculator/",
        },
      },
      {
        id: 10,
        title: "Java Expense Tracker",
        description:
          "This is a one-page GUI Application will help the users to keep track of their expenses, assets and send a monthly report to the users. Coded the application with java utilizing NetBeans. Designed the interface using Scene Builder. Debugged, modified, and tested the app.",
        tools:
          "<li>Java</li><li>Scene Builder</li><li>NetBeans</li>",
        image: require("../src/assets/budgetbookkeeper.PNG"),
        code: {
          isAvailable: true,
          link: "https://github.com/ColinOakland/BookKeeper",
        },
        view: {
          isAvailable: false,
          link: "",
        },
      },
      {
        id: 11,
        title: "Java Ice Cream Ordering",
        description:
          "This program lets the user to choose between different ice cream flavors. Also, it calculates the cost, saves the flavors, topping, and return info when needed. Coded the application with Java utilizing NetBeans and j-Grasp. Designed the interface using Scene Builder. Debugged, modified, and tested the application.",
        tools:
          "<li>Java</li><li>Scene Builder</li><li>NetBeans</li><li>j-Grasp</li>",
        image: require("../src/assets/Captureicecream.PNG"),
        code: {
          isAvailable: false,
          link: "",
        },
        view: {
          isAvailable: false,
          link: "",
        },
      },
      {
        id: 12,
        title: "Background Generator",
        description:
          "This is a JavaScript personal app that let the user pick the background color, then gives them the CSS color code for the background.",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>VS Code</li>",
        image: require("../src/assets/bg.png"),
        code: {
          isAvailable: true,
          link: "",
        },
        view: {
          isAvailable: true,
          link: "",
        },
      },
    ],
  },

  {
    featured: [
      {
        id: 1,
        title: "Face Recognition App (Coming Soon)",
        description:
          "This is a React personal application with user authentications. Users can paste any image URL and the app will detect all faces in the image. This App will be using node.js and a database.",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>React</li><li>Face Recognition API</li><li>Tachyons</li><li>Node.js</li><li>PostgreSQL</li><li>VS Code</li>",
        image: require("../src/assets/fr.png"),
        code: {
          isAvailable: false,
          link: "https://www.amazon.com",
        },
        view: {
          isAvailable: false,
          link: "https://www.google.com",
        },
      },
      {
        id: 2,
        title: "Budget Bookkeeping Web App",
        description:
          "My role was leading a team of five developers. This is a Web Application that helps users to keep track of their income and expenses. Users can view all their expenses and revenue transactions. Also, users have the ability to generate custom reports and search for a specific transaction id. users can add tasks to accomplished later and more.",
        tools:
          "<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>PHP</li><li>MySQL Database</li><li>Bootstrap4</li><li>Google Charts && Maps</li>",
        image: require("../src/assets/bbk.PNG"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/budgetbookkeeping",
        },
        view: {
          isAvailable: true,
          link: "https://www.youtube.com/watch?v=peX4eEnmCwM",
        },
      },
      {
        id: 3,
        title: "Musical Database",
        description:
          "I was leading a team of 8 developers. Designed and developed Oracle database with 19 tables using oracle data modeling software and oracle APEX. Inserted more than 150 rows of data and develops more than 110 select statements.",
        tools:
          "<li>Oracle Database</li><li>APEX</li><li>Oracle SQL</li><li>Data Modeling</li><li>VS Code</li>",
        image: require("../src/assets/md.png"),
        code: {
          isAvailable: true,
          link: "https://github.com/dshammas/oracleDatabase",
        },
        view: {
          isAvailable: false,
          link: "",
        },
      },
    ],
  },

  {
    skills: [
      {
        id: 1,
        title: "JavaScript",
        image: "",
      },
      {
        id: 2,
        title: "PHP",
        image: "",
      },
      {
        id: 3,
        title: "HTML",
        image: "",
      },
      {
        id: 4,
        title: "CSS",
        image: "",
      },
      {
        id: 5,
        title: "Java",
        image: "",
      },
      {
        id: 6,
        title: "C++",
        image: "",
      },
      {
        id: 7,
        title: "C",
        image: "",
      },
      {
        id: 8,
        title: "Scheme",
        image: "",
      },
      {
        id: 9,
        title: "React",
        image: "",
      },
      {
        id: 10,
        title: "Leadership",
        image: "",
      },
      {
        id: 11,
        title: "Time Management",
        image: "",
      },
      {
        id: 12,
        title: "Software Engineering",
        image: "",
      },
      {
        id: 13,
        title: "Web Development",
        image: "",
      },
      {
        id: 14,
        title: "Project Management",
        image: "",
      },
      {
        id: 15,
        title: "NetBeans",
        image: "",
      },
      {
        id: 16,
        title: "VS Code",
        image: "",
      },
      {
        id: 17,
        title: "Microsoft Office",
        image: "",
      },
      {
        id: 18,
        title: "Windows",
        image: "",
      },
      {
        id: 19,
        title: "Oracle SQL",
        image: "",
      },
      {
        id: 20,
        title: "MySQL",
        image: "",
      },
      {
        id: 21,
        title: "Bootstrap",
        image: "",
      },
      {
        id: 22,
        title: "Scrum",
        image: "",
      },
      {
        id: 23,
        title: "Drawing",
        image: "",
      },
      {
        id: 24,
        title: "Public Speaking",
        image: "",
      },
      {
        id: 25,
        title: "Android",
        image: "",
      },
      {
        id: 26,
        title: "ios",
        image: "",
      },
    ],
  },
  {
    courses: [
      {
        id: 1,
        title: "Java (Object-oriented Programming) I",
        image: "",
      },
      {
        id: 2,
        title: "Java (Object-oriented Programming) II",
        image: "",
      },
      {
        id: 3,
        title: "Java (Data Structure)",
        image: "",
      },
      {
        id: 4,
        title: "Intro to Electrical and Computer Engineering",
        image: "",
      },
      {
        id: 5,
        title: "Intro to Industrial and System Engineering",
        image: "",
      },
      {
        id: 6,
        title: "Software Engineering and Practice",
        image: "",
      },
      {
        id: 7,
        title: "Computer Organization  ",
        image: "",
      },
      {
        id: 8,
        title: "Database Design and Implementation",
        image: "",
      },
      {
        id: 9,
        title: "Operation Systems (IP)",
        image: "",
      },
      {
        id: 10,
        title: "C Programming and Unix",
        image: "",
      },
      {
        id: 11,
        title: "Programming Languages",
        image: "",
      },
      {
        id: 12,
        title: "Algorithms",
        image: "",
      },
      {
        id: 13,
        title: "Networking Concepts",
        image: "",
      },
      {
        id: 14,
        title: "Linux System Administration",
        image: "",
      },
      {
        id: 15,
        title: "windows system administration",
        image: "",
      },
      {
        id: 16,
        title: "Engineering Physics I",
        image: "",
      },
      {
        id: 17,
        title: "Engineering Physics II",
        image: "",
      },
      {
        id: 18,
        title: "Trigonometry",
        image: "",
      },
      {
        id: 19,
        title: "Calculus I",
        image: "",
      },
      {
        id: 20,
        title: "Calculus II",
        image: "",
      },
      {
        id: 21,
        title: "Linear Algebra",
        image: "",
      },
      {
        id: 22,
        title: "Discrete Mathematics",
        image: "",
      },
      {
        id: 23,
        title: "Internship",
        image: "",
      },
      {
        id: 24,
        title: "Web Development",
        image: "",
      },
      {
        id: 25,
        title: "Theory of Computation (IP)",
        image: "",
      },
      {
        id: 26,
        title: "Capstone Senior Project (IP)",
        image: "",
      },
    ]
  },
  {
    aboutImage : [
      {
        aboutImage: require("../src/assets/ds-about.jpg"),
      }
    ]
  },
];
