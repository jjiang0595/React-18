## React 
ReactJS is an open source JavaScript library designed by Facebook for creating rich and engaging web apps fast and efficiently with minimal coding. The core objective of ReactJS is providing the best possible rendering performance. Its strength comes from the focus on individual components. Instead of working on the entire web app, ReactJS allows a developer to break down the complex UI into simpler components.

React is a JavaScript library for building user interfaces.

- Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
- Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
- Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.


### Virtual DOM
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

The "classic" jQuery style web development can be problematic in that:
- Its hard to keep track of changes - it can become difficult keep track of current (and prior) 
state of the DOM to manipulate it into the form we need
- It can be slow - modifying the actual-DOM is a costly operation, and modifying the DOM
on every change can cause poor performance.
