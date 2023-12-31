# Responsive Dashboard UI

## Screenshot Of The Original Design By: Ecem Gokdogan

![Original Design](./designs/screenshot.jpg)

## Screenshot Of My Version:

![My Skeleton U.I.](./designs/screenshot2.jpg)


## Features

```
[ ] Single page application (SPA)
[ ] Nav Menu
    [ ] Menu item special styles based on the "active" page 
[ ] Sidebar
[ ] Capacity to load multiple pages in the same area based on state
[ ] 
[ ] 

```

## Bugs / Fixes

### How To Make A Progress Circle

There are two different approaches. One is using [`svg` attributes](https://css-tricks.com/building-progress-ring-quickly/) like `stroke-dasharray` and `stroke-dashoffset` to adjust the percentage of the circumference of the circle element we want to show.

The other approach is using regular HTML elements and the `background: conic-gradient(...)` style attribute in CSS to once again adjust the percentage of the circle being shown. This is the approach used by the original designer/developer of this U.I. "Ecem Gokdogan" so I will go with that. It is also less code and calculations tbh. 

### Getting The Date Of The Next Weekday

This was a fun problem to solve. "What day is next 'monday'?" using code. The solution used a creative bitwise `OR` comparison alongside a nifty modulus operation to calculate the date of the next 'monday', 'tuesday', etc. I got the idea from [this stackOverflow solution](https://stackoverflow.com/questions/33078406/getting-the-date-of-next-monday)

--- 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


---

## Meta Data

Started On: 2023-12-23

### References:

- [Inspiration - CodePen - Responsive Dashboard | Bento Style - Ecem Gokdogan](https://codepen.io/ecemgo/pen/YzBZjjb)
- [Fontawesome for the icons](https://fontawesome.com/icons/)
- [Favicon Generator](https://www.favicon-generator.org/)
- []()
