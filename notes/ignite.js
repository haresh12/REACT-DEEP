/**
 *  You npm init rather then npm init -y because npm init -y will skip most of the things
 *  And make sure we use npm init to create packege.json file.
 * 
 *  
 *  Create react app behind the sence use WEBPACK bundler but here we are going to use Parcel and in Tiger21 we used VITE
 *  See all have to do the same job but with parcel in best for learning and easy to understand
 * 
 *  npm install -D parcel ? HERE WHY -D 
 * 
 *  So basically there are two type of dependency Dev and normal dependency dev dependency is basically used for 
 *  development purpouse only it has nothing to do with the features or app that you are building
 * 
 *   ^ VS ~ this is also best to learn caret vs tidle caret is basically for minor version and tilde is basically for
 *   major version
 *  
 *   Also its fine sometime if we don't use any of above and just use fixed version.
 * 
 * 
 *   Package.lock.json VS Package.json  : IN SIMPLEST WORDS PACKAGE.LOCK.JSON KEEPS THE LATEST VERSION IF DEPENDENCY
 *   Given the example you have used ^2.8.1 use see we have used carot before dependcy version now thats whare package.
 *   lock.json comes into picture because you are using carot so it will allow minor version to be update automatically
 *   but those version will never change in package.json it will be same it will be update on package.lock.json itself.
 * 
 *   Transitive dependency : See we install parcel as our dependency and parcel has dependecy of many other libraries
 *   and those libraries has different dependancy and this is like one dependency can have another dependecy and then
 *   those can have many other dependecy that it know as transitive dependency.
 *  
 *   SEE WE DON'T HAVE ONLY ONE PACKAGE.JSON MUST UNDERSTAND THAT EVERY PACKAGE OR DEPENDECY HAS ITS OWN PACKAGE.JSON
 *   AND THOSE PACAKGES MIGHT HAVE THERE OWN DEPENDECY.
 * 
 *   ONE THING IS STILL BIG QUESTION SHOULD WE PUT PACKAGE.LOCK.JSON IN OUR GIT HUB OR IT SHOULD BE IN .GITIGNOR
 *   FOR ME I THING ITS GOOD TO HAVE IN GIT BECAUSE THING ABOUT IT WHEN MULTIPLE PERSON WORKING ON SAME PROJECT
 * 
 *   npx parcel index.html
 * 
 *  npm vs npx =>  See when you use NPM it simply mean you are trying to install some command where in case of
 *  NPX it basically states for EXECUTING THE COMMOND SO SIMPLE NPM MEANS INSTALL AND NPX MEAN EXECUTE.
 * 
 *  WHY SHOULD WE NEVER USE CDN REACT URL AND SHOULD ALWAYS INSTALL THE PACKAGE FROM NPM ?
 * 
 *  BASIC REASON IF YOU USE CDN LINKS THEN EVERY TIME YOU RUN THE APP IT TRIES TO FATCH THE DATA ALSO CURRENTLY
 *  WE HAVE REACT VERSION 18 SO WE HAVE LINK FOR THAT IF TOMORROW IT CHANGES THEN WE NEED TO CHANGE THAT URL AGAIN
 *  TILL NOW WHEREVER I WORKED WE HAVE NEVER USED CDN LINKS
 * 
 *  */  