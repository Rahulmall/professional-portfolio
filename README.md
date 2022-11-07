# professional-portfolio
My professional portfolio
Personal Portfolio

The best way to show your skills to employers or potential clients is by presenting a well-digitalized flexible portfolio.

Hi There! Welcome to Rahul Mall’s Web Development Portfolio.

The content you see on this website is completely modifiable thanks to Sanity.io 

Sanity Content Platform
Sanity.io is the platform for structured content. With Sanity.io you can manage your text, images, and other media with APIs. You can also use the open-source single page application Sanity Studio to quickly set up an editing environment that you can customize.

I built this portfolio with the help of SCSS, React & Sanity 

My goal while building this portfolio was to learn implement ReactJS Best Practices, file, and folder structure, the use of SCSS, Flex, Animations using one of the most popular animation libraries- Framer Motion. And most importantly, learn how to use Sanity. Sanity allowed me to dynamically manage the content of the entire application.


Sprint 1

Setting up the backend using Sanity.io
Created the backend in a folder named backend_sanity 
Started the backend from scratch without any pre-defined schemas
Sanity.io gives you the ability to create your own schemas
My first schema was a Testimonials document which has fields such as name of the user, the company of the user, the imageurl of the user with the ability to crop/hotspot the image and a feedback field and this allowed the users to add new content to the database. Sanity allowed me to create, publish and implement a document into a database within minutes. If working on an MERN application using MongoDB, Express and Node to do this would have been extremely time consuming. The functionality to crop/hotspot the image would have taken a lot of time to be written and implemented.

Created the react app in a separate folder named frontend_react
Installed the required dependencies 
npm install @sanity/client @sanity/image-url framer-motion node-sass react-icons
velopment
Sprint 2

Setting up the file and folder structure
assets folder for images and other media
components folder for the smaller react components
constants folder for imports of the files constantly used
container folder for larger react components i.e. a component containing multiple components within itself

Used the BEM naming convention to organize and name the classes to write cleaner CSS 
Block Element Modifier Method

Using SCSS helps write nested CSS instead of creating a new class to style an element inside a container, a container in our case for which the stylesheet has been already written. We can write nested CSS to style that particular element or that kind of element which is inside the container. This saves us from writing a separate style sheet for the child element. We don’t need to write a new class to style that child element.

SCSS also allows us to nest media queries within a class or even inside the child element

Sprint 3 
Using react-icons & framer-motion created an animated responsive navbar for both desktop & mobile devices. 
The navbar in desktop mode is placed horizontally on the top. When the width of the screen goes below 900px the navbar slides from the right side vertically using the animation from framer- motion.

Sprint 4
Created the header section & about section 
Sprint 5 
Implemented with frontend with the custom sanity backend. The biggest plus of using a CMS website is that it can handed over to a non-developer person such as a business owner who would like to change the working hours on his website. Instead of asking a web developer to go into the code and make the necessary changes in the lines of code he can do it himself since it is a CMS integrated website. Using Sanity Studio he can edit the working hours himself.
I realized my Header & About sections were not taking 100% height of the screen as they were meant to. I also wanted to add a slider with navigation dots which suggested the section of the page a user is and also click on the other dots to scroll to that section. Also, I wanted to add social media icons on the bottom left of each section. To do that I used a React Best Practice known as Higher Order Components. 

I created a Wrapper Component named AppWrap which is a higher order component in order to do this.
Sprint 6
Created the work section or the portfolio section with types of work a user can choose from which to see the works of that particular type only 

Sprint 7
Created the Skills section under which the skills and experience can be mentioned. 
Created another a higher order component named MotionWrap.js which basically contained a <motion.div></motion.div> to wrap all of the sections so that an animation can be applied to the particular section when being viewed 

Sprint 8
Completed the testimonials section 

Sprint 8
Completed the footer by including contact details and a message form through which visitors can send message to me or contact me. The message’s will be stored in the custom sanity backend
Sprint 9
Deployed the portofio using netlify 
