import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Chat Bot Application!';
  i = 0;
  constructor(){};
  filterBy: any;
  message: any = [];
  questions: any = [];
  sampleImage ='https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png';
  sampleImage1 = 'https://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/lady.jpg';
  book = [
    { name: 'how are you?', description: 'I am good . Thank you ' },
    {
      name: 'how are you doing ',
      description: 'I am doing absolutely great. How are you doing?',
    },
    { name: 'good morning', description: 'A very good Morning' },
    { name: 'good after noon', description: 'A very good afternoon' },
    { name: 'good evening', description: 'A very good evening' },
    { name: 'good night', description: 'A very good night' },

    { name: 'hi', description: 'hello' },
    { name: 'thank you', description: 'You’re Welcome' },

    { name: 'goodbye ', description: 'Good bye' },
    {
      name: 'how can you help me? ',
      description: 'I can try helping you with the possible solutions I have',
    },
    { name: 'what can you do', description: 'I am a programmed robot' },

    { name: 'what is your name', description: 'Hi , My name is Mathew' },
    {
      name: 'happy birthday!',
      description:
        'Sorry I am not born , I am created . still, thank you for wishing me ',
    },
    {
      name: 'I have a question can you help me',
      description: 'I can’t Promise, but I will try my best. ',
    },
    { name: 'do you like people?', description: 'Yes! I do Like people' },
    {
      name: 'does santa claus exist?',
      description:
        ' It’s a children’s book character. No It does not exist in reality',
    },
    {
      name: 'are you part of the Matrix?',
      description: 'No, Matrix is a fictious story . I am not a part of it ',
    },
    {
      name: 'do you have a hobby?',
      description:
        'Yes, I like to search what ever I am asked for and also learn through searches.',
    },
    {
      name: 'what is the difference between angular and jquery?',
      description:
        'jQuery is a javascript-based libray that is primarly used for DOM manipulation.where as Angular is a front-end development framework that is used for single page applications',
    },
    {
      name: 'name the key features of angularjs?',
      description:
        'the key features of angularjs is scope,model,view,services,databinding ',
    },
    {
      name: 'expalin databinding in angularjs?',
      description:
        'According to AngularJS Data-binding in Angular apps is the automatic synchronization of data between the model and view          components. The way that Angular implements data-binding lets you treat the model as the single-source-of-truth in your application. The view is a projection of the model at all times. When the model changes, the view reflects the change and vice versa.There are two ways of data binding 1.	Data mining in classical template systems 2.	Data binding in angular templates',
    },
    {
      name: 'what are directives in angularjs?',
      description:
        'A core feature of AngularJS, directives are attributes that allow you to invent new HTML syntax, specific to your application. They are essentially functions that execute when the Angular compiler finds them in the DOM.  Some of the most commonly used directives are ng-app,ng-controller and ng-repeat.The different types of directives are i)Element directive ii)Attribute directives iii) CSS class directives iv) Comment directives ',
    },

    {
      name: 'what are Controllers in angularjs?',
      description:
        'Controllers are Javascript functions which provide data and logic to HTML UI. As the name suggests, they control how data flows from the server to HTML UI.',
    },

    {
      name: 'what is the difference between angularjs and backbone.js?',
      description:
        'AngularJS combines the functionalities of most third party libraries and supports individual functionalities required to develop HTML5 Apps.  While Backbone.js does these jobs individually ',
    },

    {
      name: 'Explain what is injector in angularjs?',
      description:
        'An injector is a service locator, used to retrieve object instance as defined by provider, instantiate types, invoke methods, and load modules. ',
    },
    {
      name: 'What is factory method in angularjs?',
      description:
        'Factory method is used for creating a directive.  It is invoked when the compiler matches the directive for the first time. We can invoke the factory method using $injector.invoke. ',
    },
    {
      name: 'what is ng-app,ng-init and ng-model?',
      description:
        'ng-app -Initializes application and ng-model-Binds HTML controls to application data.	ng-Controller-Attaches a controller class to view.ng-repeat-Bind repeated data HTML elements. Its like a for loop.ng-if- Bind HTML elements with condition.ng-src-Used to pass the URL image ',
    },
    {
      name: 'does Angular use the jquery library?',
      description:

      
        'Yes, Angular can use jQuery if its present in the app when the application is being bootstrapped. If jQuery is not present in the script path, Angular falls back to its own implementation of the subset of jQuery that we call jQLite. ',
    },
    {
      name: 'can angularjs have multiple ng-app directives in a single page?',
      description:
        'No Only one AngularJS application can be auto-bootstrapped per HTML document. The first ngApp found in the document will be used to define the root element to auto-bootstrap as an application. If another ng-app directive has been placed then it will not be processed by AngularJS and we will need to manually bootstrap the second app, instead of using second ng-app directive.',
    },
    {
      name: 'can angular applications ng-app be nested within each other?',
      description:
        'No. AngularJS applications cannot be nested within each other.',
    },
    {
      name: 'what is internationalization and how to implement it in angularjs',
      description:
        'Internationalization is a way in which you can show locale specific information on a website. AngularJS supports inbuilt internationalization for three types of filters: currency, date and numbers. To implement internalization, we only need to incorporate corresponding js according to locale of the country. By default it handles the locale of the browser.',
    },

    {
      name: 'on which types of component can we create a custom directive?',
      description:
        'AngularJS provides support to create custom directives for the following •	Element directives − Directive activates when a matching element is encountered •	Attribute − Directive activates when a matching attribute is encountered •	CSS − Directive activates when a matching css style is encountered•	Comment − Directive activates when a matching comment is encountered',
    },
    {
      name: 'what is $rootscope in angularjs?',
      description:
        'Every application has a single root scope. All other scopes are descendant scopes of the root scope. Scopes provide separation between the model and the view, via a mechanism for watching the model for changes. They also provide event emission/broadcast and subscription facility',
    },
    {
      name: 'can we have nested controllers in  angularjs?',
      description:
        'Yes, we can create nested controllers in AngularJS. Nested controllers are defined in hierarchical manner while using in View.',
    },
    {
      name: 'what is bootstrapping in angularjs?',
      description:
        'Bootstrapping in AngularJS is nothing but initializing, or starting the Angular app. AngularJS supports automatic and manual bootstrapping.',
    },
    {
      name: 'What does SPA (Single Page Application) mean? How can we implement SPA with  angular?',
      description:
        'Single Page Applications (SPAs) are web apps that load a single HTML page and dynamically update that page as the user interacts with the app. Since SPA the page never reloads, though parts of the page may refresh. This reduces the round trips to the server to a minimum.      It’s a concept where we create a single shell page or master page and load the webpages inside that master page instead of loading pages from the server by doing post backs. We can implement SPA with Angular using Angular routes. You can read up about SPAs here',
    },
    {
      name: 'Explain $q service, deferred and promises',
      description:
        'Promises are post processing logics which are executed after some operation/action is completed whereas deferred is used to control how and when those promise logics will execute.',
    },
    {
      name: 'Explain $q service, deferred and promises',
      description:
        'Promises are post processing logics which are executed after some operation/action is completed whereas deferred is used to control how and when those promise logics will execute.•	“$q” is the angular service which provides promises and deferred functionality',
    },
    {
      name: 'how to implement routing in angularjs?',
      description:
        'It is a five-step process •Step 1: – Add the “Angular-route.js” file to your view •Step 2: – Inject “ngroute” functionality while creating Angular app object. •Step 3: – Configure the route provider.•Step 4: – Define hyperlinks. •Step 5: – Define sections where to load the view ',
    },
    {
      name: 'is angularjs compatible with all browsers?',
      description:
        'Yes AngularJS is compatible with the following browsers: Safari, Chrome, Firefox, Opera 15, IE9 and mobile browsers (Android, Chrome Mobile, iOS Safari). ',
    },
    {
      name: 'why is the sky blue?',
      description:
        'The earth is surrounded by an atmosphere.The atmosphere (i.e., air, one of the four elements) is a mixture of gasses, mostly nitrogen and oxygen.The way the sun’s light travels through the atmosphere makes the sky look blue.White light is made of several different colors, like you see in a rainbow. Each of these colors travel in a wave, but the wavelength (distance between the tops of each wave) varies. Red light has a long wavelength, while blue light has a much shorter wavelength.When light from the sun enters our atmosphere, the waves collide with gas molecules. The longer wavelengths, like red and yellow, pass straight through and appear to us as “regular” sunlight.Shorter wavelengths, like blue, bump into the gas molecules and scatter in different directions. Some of it still makes it through directly, but the rest is reflected back to our eyes from all directions, so the whole sky looks blue.',
    },
    {
      name: 'how much does the earth weigh?',
      description:
        'The earth weighs 13,170,000,000,000,000,000,000,000 pounds. You can say this number like this: 13 octillion, 170 septillion',
    },
    {
      name: 'how do airplanes fly?',
      description:
        'Even though airplanes are very heavy, they stay up in the sky    Why is this   There are different forces (pushes and pulls) that make flight possible Lift is caused by the variation in air pressure when air flows under and over an airplanes wings. This force lifts up. It is opposed by weight, or the force of gravity, pulling downward Thrust is caused by the action of the propellers moving the plane forward. Opposed to that is drag, caused by air resistance. If lift is more than weight, the plane will rise. If thrust is more than drag, the plane will gain speed Airplane wings are designed to take advantage of lift. They are shaped so that air has to travel farther over the top of the wing than underneath it  ',
    },
    {
      name: 'how do flies walk on the ceiling?',
      description:
        'Flies can walk upside down! They can do this because of their sticky feet  A fly has foot pads that are covered in tacky glue     To unstick their feet so they can walk anywhere, the fly uses tiny foot claws to push or twist themselves away',
    },
    {
      name: 'how are rainbows made?',
      description:
        'A rainbow is formed when light hits water droplets in the air and is refracted, or bent Light that appears white (like light from the sun) is actually made up of several colors The colors that make up white light are the same colors that make a rainbow. They are: red, orange, yellow, green, blue, indigo, and violet. You can often see a rainbow after it rains. Beams of sunlight shine towards the rain in the air and when the light goes into the raindrops, it is bent (refracted)',
    },
    {
      name: 'are sharks mammals?',
      description:
        'No, sharks are not mammals.Mammals, like polar bears, squirrels, lions, elephants, and dolphins, give birth to live young. They are warm-blooded, and have fur or hair.Sharks are a type of fish. They use gills to breathe. They also do not have bones like we do, but have a skeleton made of cartilage (the same flexible material at the end of your nose)',
    },
    {
      name: 'why can I see the moon during the day?',
      description:
        'The moon is the brightest object in the night sky. During the day, the sun is much brighter! But sometimes, you can see the moon during the daytime. Why is this The moon is always in the sky. It orbits (travels in a circle) around the earth.The moon looks bright at night because of light from the sun reflecting off the moon’s surface. The sun always lights up half of the moon. But we cannot always see that part of the moon – sometimes it is facing away from us.During the day, we can see the moon if it’s a clear day, and the moon is not hiding low in the sky The moon is also easier to see when its orbit brings it closer to earth',
    },

    {
      name: 'why do birds fly south for the winter?',
      description:
        'Many birds fly south in the winter. Birds that eat nectar or insects will not be able to find food in areas that have cold winters To find the food they need, birds will migrate Migrating means leaving to find warmer areas.Birds that migrate usually leave at about the same time each year and fly back home at around the same time each spring! How do they know when to come back to their homes? Well, that is something we don’t know for sure, but birds (like most other animals) have strong instincts that tell them when it’s warm enough to head back to their homes up north.',
    },
    {
      name: 'what is the difference between link and compile in angular.js?',
      description:
        '•	Compile function is used for template DOM Manipulation and to collect all the directives.•	Link function is used for registering DOM listeners as well as instance DOM manipulation and is executed once the template has been cloned ',
    },
  ];

  filter() {
    this.questions = this.book.filter((qname) =>
      qname.name.includes(this.filterBy.toLowerCase())
    );
    this.message.push(this.questions);
    this.filterBy = '';

  
  }
  clearchat() {
    this.message = [];
  }
}
