📇 Login App

* A React + Redux app to login, view and sort server list. 

🔧 Tech Stack

* React + Vite + TypeScript – Fast development setup with strong typing.

* Redux Toolkit (RTK Query) – Used for scalable state management and data fetching. Could’ve gone with plain fetch/AJAX, but RTK Query was chosen to showcase scalability.

* Tailwind CSS – Utility-first CSS framework for quick and consistent styling.

* Vitest + Testing Library – For unit testing. Could also use Jest or Cypress for other types of testing.

* Path Aliases – Added for cleaner imports.

🧪 Running Tests

npm run test

📁 Possible improvements given more time:

* could use images as React component instead of adding them in src attribute. This would allow me for easier styling.

* could do coverage tests.

* i'd like to refactor things a bit more.

* for styling, it would be nice to use cxl. Could create a separate file for styles, and then this would improve readability a little bit.

* for sure it would be nice to make UI better and make it standout more. People make first impressions really quickly, so that matters to clients a lot.

* as for the fun part : I've been recently reading about AI agents, so there's a tool called flow wise ai, where you can build several llm's and then with a supervisor give them different roles to play. I could add a couple of tools to them, or perhaps give some data that they could then use in the vector database. I'm not yet sure if it's doable, but if I could expose an endpoint of it, I could get this with React, and make a chatbot or something more exciting. 

* better error handling. 

* add additional fixes based on accessibility wcag standards. 

* if it would be a new project for a new client, I would add some seo too, depending on the business. 

* and others. 