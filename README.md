#zipcodegrubbing.com
My goal for every project is to focus on mobile devices first and desktop second. This was no exception, every route and component are optimized
for mobile devices. Ranging from css mediaQueries to using different components for each device. One of my biggest challenges for this project was making sure the
user can search for new restaurants at any given time, no matter the component or route they were currently in. At first this greatly slowed the website down due
to the Api request in every component, I knew the waiting of the data and the speed of the website were unacceptable. I decided to integrate a Api animation for every search
to make up for any waiting time I did have, and redirect the user back to the root component where the new set of restaurants were already loaded. The root component was the 
only component making Api calls and by calling it ahead of time it provided a smooth transition before the user even arrived to the component. 
