// this createElement from REACT takes three arguments first one is type of element that you want to 
// put second one is props and third one is type of content you want to put THIS IS REALLY IMORTENT
// to understand because we are not going to using this method after this lecture but still we 
// need to learn why we are using JSX and not React.createElement (ONE WORD ANS DEV EXPERIENCE)

// UNDERSTAND THAT React.createElement is just pure javascript object its not html (DEEP)

// YOUR FIRST JOB IS TO CREATE ALL THE THINGS THAT YOU WANT TO RENDER
// IN REACT NATIVE WHAT WE CALLED PROPS IN HERE IS KNOW AS ATTRIBUTES 
// THE PROBLEM WITH React.createElement is happen with we have nested elements then readability become real issue
// SEE BELOW ONE IS THE SMALLEST EXAMPLE BUT THING ABOUT IT WHENE YOU HAVE COMPLEX PAGE TO BUILD THAT TIME THIS
// COMPLEX STRUCTURE WILL BE HARD TO READ AND THATS WHY WE HAVE JSX BUT UNDERSTAND THIS IS MUST

// ONE THING YOU WILL NEVER FORGOT IS REACT.CREATELEMENT IS JUST PURE JS OBJECT ITS NOT YET CONVERTED INTO HTML IT WILL BE 
// CONVERTED INTO HTML ONLY ONCE WE HAVE DONE REACT.DOM render.
// FOR MULTIPLE ELEMENTS IN SINGLE PARENT WE CAN DO LIKE WRAP IT IN ARRAY SO FOR SINGLE CHILD DIRECTLY PASS IF YOU HAVE MULTIPLE
// ELEMENTS THEN WE NEED TO USE ARRAY
// MAKE SURE IN CASE OF MULTIPLE CHILD VIEW WE MUST MEANS MUST NEED TO GIVE key PROP else it will give us unique key error

const heading = React.createElement('div', { id: 'parent' },
  React.createElement('div', { id: 'child' },
    [
    React.createElement('h1', {key : 'tag1'}, 'First H1 Tag'),
    React.createElement('h1', {key : 'tag2'}, 'Second H1 Tag'),
    React.createElement('h2', {key : 'tag3'}, 'FIRST H2 Tag')
   ]
  )
);

// YOUR SECOND JOB IS TO FIND THE ROOT WHERE YOU WANT TO RENDER ALL THE THINGS THAT YOU CREATED IN FIRST STEP    
const root = ReactDOM.createRoot(document.getElementById('root'));

// FINAL JOB IS TO RENDER YOUR ELEMENTS INTO ROOT.
root.render(heading);




