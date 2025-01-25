export const quizData= [
    {
      id: 1,
      question: "What is Redux?",
      options: [
        "A library for managing application state",
        "A framework for building user interfaces",
        "A database for storing data",
        "A tool for CSS styling"
      ],
      correctAnswer: "A library for managing application state"
    },
    {
      id: 2,
      question: "What is a Redux store?",
      options: [
        "A place to store user data",
        "A global object that holds the state of the entire application",
        "A database for storing Redux actions",
        "A function to dispatch actions"
      ],
      correctAnswer: "A global object that holds the state of the entire application"
    },
    {
      id: 3,
      question: "Which method is used to send actions to the Redux store?",
      options: [
        "sendAction()",
        "dispatch()",
        "updateStore()",
        "emitAction()"
      ],
      correctAnswer: "dispatch()"
    },
    {
      id: 4,
      question: "What is an action in Redux?",
      options: [
        "A JavaScript function that updates the store",
        "An object that describes what happened",
        "A method to fetch data from the server",
        "A middleware function"
      ],
      correctAnswer: "An object that describes what happened"
    },
    {
      id: 5,
      question: "What is a reducer in Redux?",
      options: [
        "A function that takes the current state and an action and returns the next state",
        "A function to reduce the size of data in the store",
        "A middleware function to handle asynchronous actions",
        "A function to update the database"
      ],
      correctAnswer: "A function that takes the current state and an action and returns the next state"
    },
    {
      id: 6,
      question: "What is middleware in Redux?",
      options: [
        "A function that reduces the size of the Redux store",
        "A function that handles side effects like API calls",
        "A database management system",
        "A method to dispatch actions to the store"
      ],
      correctAnswer: "A function that handles side effects like API calls"
    },
    {
      id: 7,
      question: "What is the initial state in Redux?",
      options: [
        "The state of the store after the first action is dispatched",
        "The default state passed to the reducer",
        "The state of the Redux store at runtime",
        "The state passed by the middleware"
      ],
      correctAnswer: "The default state passed to the reducer"
    },
    {
      id: 8,
      question: "How do you connect a React component to a Redux store?",
      options: [
        "Using the `connect` function from `react-redux`",
        "By importing the store directly into the component",
        "By passing the store as a prop to the component",
        "By using Redux hooks like `useReducer`"
      ],
      correctAnswer: "Using the `connect` function from `react-redux`"
    },
    {
      id: 9,
      question: "Which hook is used to access Redux state in functional components?",
      options: [
        "useState",
        "useReducer",
        "useSelector",
        "useContext"
      ],
      correctAnswer: "useSelector"
    },
    {
      id: 10,
      question: "What is the purpose of the `combineReducers` function in Redux?",
      options: [
        "To combine multiple stores into one",
        "To merge multiple middleware functions",
        "To create a single reducer from multiple reducers",
        "To initialize the Redux store"
      ],
      correctAnswer: "To create a single reducer from multiple reducers"
    }
  ]
  