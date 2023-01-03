import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Chat Bot Application!';
  i = 0;
  noresult:any=[];
  constructor(){};
  filterBy: any;
  message: any = [];
  questions: any = [];
  sampleImage ='https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png';
  sampleImage1 = 'https://png.pngtree.com/png-vector/20190701/ourmid/pngtree-robot-icon-for-your-project-png-image_1533288.jpg';
  
  
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

    {
      name: 'was abraham lincoln the sixteenth president of the united states?',
      description:'yes',
    },
    {
      name: 'did lincoln sign the national banking act of 1863?',
      description:'yes',
    },
    {
      name: 'how many long was lincolns formal education?',
      description:'18 months',
    },  
    {
      name: 'when did lincoln begin his political career?',
      description:'1832',
    },
    {
      name: 'what did the legal tender Act of 1862 establish?',
      description:'the United State',
    },
    {
      name: 'who suggested lincoln grow a beard?',
      description:'Grace Bedell',
    },
    {
      name: 'when did the gettysburg address argue that america was born?',
      description:'1776',
    },
    {
      name: 'did lincoln beat John C. breckinridge in the 1860 election?',
      description:'yes',
    },
    {
      name: 'was abraham lincoln the first president of the united States?',
      description:'NO',
    },

    {
      name: 'which county was lincoln born in?',
      description:'Hardin County',
    },
    {
      name: 'when did lincoln first serve as president?',
      description:'March 4, 1861',
    }, 

    {
      name: 'who assassinated lincoln?',
      description:'John Wilkes',
    },
    {
      name: 'did lincoln win the election of 1860?',
      description:'yes',
    }, 
    {
      name: 'who was the general in charge at the battle of antietam?',
      description:'General McClellan',
    },
    {
      name: 'do scholars rank lincoln among the top three presidents?',
      description:'yes',
    }, 
    {
      name: 'when was the first photgraph of lincoln taken?	',
      description:'1846',
    },
    {
      name: 'was lorenzo romano amedeo carlo avogadro an italian savant?',
      description:'yes',
    }, 
    {
      name: 'how long was lincolns legal Career?	',
      description:'23 years',
    },
    {
      name: 'do scholars rank lincoln among the top three presidents?',
      description:'yes',
    }, 
    {
      name: 'how many species of beetles are there?	',
      description:'35000',
    },
    {
      name: 'what are the three sections of a beetle?',
      description:'the head, the thorax, and the abdome',
    }, 
    {
      name: 'was celsius born in uppsala in sweden ?	',
      description:'yes',
    },
    {
      name: 'what is the study of beetles called?',
      description:'coleopterology',
    },
    {
      name: 'do carrion beetles eat dung?',
      description:'No',
    }, 
    {
      name: 'what are prey of various animals including birds and mammals?	',
      description:'beetles',
    },
    {
      name: 'are many beetles territorial?',
      description:'Yes',
    },
    {
      name: 'what is oxygen?',
      description:'One kind of gas obtained via a tracheal system.',
    }, 
    {
      name: 'who appointed harlan fiske stone to the supreme court?	',
      description:'Calvin_Coolidge',
    }, 
    
    {
      name: 'kangarao	',
      description:'A kangaroo is a marsupial from the family Macropodidae (macropods, meaning "large foot").In common use the term is used to describe the largest species from this family, the Red Kangaroo, the Antilopine Kangaroo, and the Eastern and Western Grey Kangaroo of the Macropus genus. The family also includes many smaller species which include the wallabies, tree-kangaroos, wallaroos, pademelons and the Quokka, some 63 living species in all.  Kangaroos are endemic to the continent of Australia, while the smaller macropods are found in Australia and New Guinea.In general, larger kangaroos have adapted much better to changes wrought to the Australian landscape by humans and though many of their smaller cousins are endangered, they are plentiful. They are not farmed to any extent, but wild kangaroos are shot for meat, over which there is controversy.  Steve Dow: "An industry thats under the gun". Sydney Morning Herald online, September 26, 2007.The kangaroo is an Australian icon: it is featured on the Australian coat of arms,  Australias coat of arms URL accessed January 6, 2007.  on some of its currency,  The Australian currency URL accessed January 6, 2007.  and is used by many Australian organisations, including Qantas.  The Kangaroo symbol URL accessed January 6, 2007      The word kangaroo derives from the Guugu Yimidhirr word gangurru, referring to a grey kangaroo.  Etymology of mammal names URL accessed January 7, 2007.  The name was first recorded as "Kangooroo or Kanguru" on 4 August,1770, by Lieutenant (later Captain) James Cook on the banks of the Endeavour River at the site of modern Cooktown, when HM Bark Endeavour was beached for almost seven weeks to repair damage sustained on the Great Barrier Reef. A common myth about the kangaroos English name is that it came from the Aboriginal words for "I dont understand you." According to this legend, Captain James Cook and naturalist Sir Joseph Banks were exploring Australia when they happened upon the animal. They asked a nearby local what the creatures were called. The local responded "Kangaroo", meaning "I dont understand you", which Cook took to be the name of the creature.  Tour lecture,  , Dawsonville, GA.Kangaroo soon became adopted into standard English where it has come to mean any member of the family of kangaroos and wallabies.  Male kangaroos are called bucks, boomers, jacks, or old men; females are does, flyers, or jills, and the young ones are joeys.  Animal Bytes: Kangaroo and Wallaby URL accessed January 7, 2007.  The collective noun for kangaroos is a mob, troop, or court. Kangaroos are sometimes colloquially referred to as roos.',
    },  

    {
      name: 'leopard',
      description:'The leopard (Panthera pardus) is an Old World mammal of the Felidae family and the smallest of the four big cats of the genus Panthera, along with the tiger, lion, and jaguar. Leopards that are melanistic, either all-black or very dark in coloration, are known colloquially as Black Panthers.Once distributed across southern Eurasia and Africa, from Korea to South Africa and Spain, it has disappeared from much of its former range and now chiefly occurs in subsaharan Africa. There are fragmented populations in Israel, the Indian subcontinent, Indochina, Malaysia, and western China. Despite the loss of range and continued population declines, the cat remains a least concern species;  its numbers are greater than that of the other Panthera species, all of which face more acute conservation concerns.The leopard is an agile and graceful predator. Although smaller than the other members of Panthera, the leopard is still able to take large prey given a massive skull that well utilizes powerful jaw muscles.  Its body is comparatively long for a cat and its legs are short.  Head and body length is between 90 and 190 cm, the tail reaches 60 to 110cm. Shoulder height is 45 to 80 cm. Males are considerably larger than females and weigh 37 to 90 kg compared to 28 to 60 kg for females. Ronald M. Nowak: Walkers Mammals of the World. Johns Hopkins University Press, 1999 ISBN 0-8018-5789-9.One of many spotted cats, a leopard may be mistaken for a cheetah or a jaguar. The leopard has rosettes rather than cheetahs simple spots, but they lack internal spots, unlike the jaguar. The leopard is larger and less lanky than the cheetah but smaller than the jaguar. The leopards black, irregular rosettes serve as camouflage. They are circular in East Africa but tend to be square in southern Africa.Leopards have been reported to reach 21 years of age in captivity.Graceful and stealthy, leopards are famous for their ability to go undetected. They are good, agile climbers, but cannot get down from a tree headfirst, because they do not have the ankle flexibility—the only two cats that do are the Margay and the Clouded Leopard. Female leopard. Note the white spots on the back of the ears used for communication with cubs when hunting in long grassAlong with climbing, they are strong swimmers but not as fond of water as tigers; for example, leopards will not normally lie in water. They are mainly nocturnal but can be seen at any time of day and will even hunt during daytime on overcast days. In regions where they are hunted, nocturnal behaviour is more common. These cats are solitary, avoiding one another. However, three or four are sometimes seen together. Hearing and eyesight are the strongest of these cats senses and are extremely acute. Olfaction is relied upon as well, but not for hunting. When making a threat, leopards stretch their backs, depress their ribcages between their shoulder blades so they stick out, and lower their heads (similar to domestic cats). During the day they may lie in bush, on rocks, or in a tree with their tails hanging below the treetops and giving them away.Leopards are opportunistic hunters. Although mid-sized animals are preferred, the leopard will eat anything from dung beetles to 900 kg male giant elands.  The leopard stalks its prey silently and at the last minute pounces on its prey and strangles its throat with a quick bite. Leopards often hide their kills in dense vegetation or take them up trees,  and are capable of carrying animals up to three times their own weight this way. Storing carcasses up trees keeps them away from other predators such as spotted hyenas, jackals, tigers and lions, though the latter will occasionally be successful in climbing and fetching the leopard kills.',
    },
    {
      name: 'penguin',
      description:'A penguin encounters a human during Antarctic summer.Penguins (order Sphenisciformes, family Spheniscidae) are a group of aquatic, flightless birds living almost exclusively in the Southern Hemisphere.The number of penguin species is debated. Depending on which authority is followed, penguin biodiversity varies between 17 and 20 living species, all in the subfamily Spheniscinae. Some sources consider the White-flippered Penguin a separate Eudyptula species, while others treat it as a subspecies of the Little Penguin (e.g. Williams, 1995; Davis & Renner, 2003); the actual situation seems to be more complicated (Banks et al. 2002). Similarly,  it is still unclear whether the Royal Penguin is merely a color morph of the Macaroni penguin. Also eligible to be a separate species is the Northern population of Rockhopper penguins (Davis & Renner, 2003). Although all penguin species are native to the southern hemisphere, they are not, contrary to popular belief, found only in cold climates, such as Antarctica. In fact, only a few species of penguin actually live so far south. At least ten  species live in the temperate zone; one lives as far north as the Galápagos Islands: the Galápagos Penguin.The largest living species is the Emperor Penguin (Aptenodytes forsteri): adults average about 1.1 m (3 ft 7 in) tall and weigh 35 kg (75 lb) or more. The smallest penguin species is the Little Blue Penguin (also known as the Fairy Penguin), which stands around 40 cm tall (16 in) and weighs 1 kg (2.2 lb). Among extant penguins larger penguins inhabit colder regions, while smaller penguins are generally found in temperate or even tropical climates (see also Bergmanns Rule). Some prehistoric species attained enormous sizes, becoming as tall or as heavy as an adult human (see below for more). These were not restricted to Antarctic regions; on the contrary, subantarctic regions harboured high diversity, and at least one giant penguin occurred in a region not quite 2000 km south of the Equator 35 mya , in a climate decidedy warmer than today.Most penguins feed on krill, fish, squid, and other forms of sealife caught while swimming underwater. They spend half of their life on land and half in the oceans.Penguins seem to have no special fear of humans and have approached groups of explorers without hesitation. This is probably on account of there being no land predators in Antarctica or the nearby offshore islands that prey on or attack penguins. Instead, penguins are at risk at sea from predators such as the leopard seal. Typically, penguins do not approach closer than about 3 meters (9 ft); they become nervous at about that distance. This is also the distance that Antarctic tourists are told to keep from penguins (tourists are not supposed to approach closer than 3 meters, but are not expected to withdraw if the penguins come closer).',
    }, 
    {
      name: 'polar bear',
      description:'The polar bear (Ursus maritimus) is a bear native to the Arctic. Polar bears and Kodiak bears are the worlds largest land carnivores, with most adult males weighing 300-600 kg (660-1320 lb); adult females are about half the size of males. Its fur is hollow and translucent, but usually appears as white or cream colored, thus providing the animal with effective camouflage.  Its skin is actually black in color. Its thick blubber and fur insulate it against the cold. The bear has a short tail and small ears that help reduce heat loss, as well as a relatively small head and long, tapered body to streamline it for swimming.A semi-aquatic marine mammal, the polar bear has adapted for life on a combination of land, sea, and ice, and is the apex predator within its range.  Polar Bears International  It feeds mainly on seals, young walruses, and whales, although it will eat anything it can kill.The polar bear is a vulnerable species at high risk of extinction. Zoologists and climatologists believe that the projected decreases in the polar sea ice due to global warming will reduce their population by two thirds by mid-century.    Database entry includes a lengthy justification of why this species is listed as vulnerable.Local long-term studies show that 7 out of 19 subpopulations are declining or already severely reduced.   See also HTML excerpts:  population status reviews and  Table 1 summarizing polar bear population status per 2005.   Polar Bears and Conservation and    In the USA, the Center for Biological Diversity petitioned to up-list the legal conservation status of polar bears to threatened species in 2005.This petition is still under review.Polar bears rank with the Kodiak bear as among the largest living land carnivores, and male polar bears may weigh twice as much as a Siberian tiger. Most adult males weigh 350 650 kg (770 1500+ lb) and measure 2.5 3.0 m (8.2 9.8 ft) in length. Adult females are roughly half the size of males and normally weigh 150 250 kg (330 550 lb), measuring 2 2.5 m (6.6 8.2 ft), but double their weight during pregnancy.  Stirling makes no mention of length, these are from  SeaWorld  The great difference in body size makes the polar bear among the most sexually dimorphic of mammals, surpassed only by the eared seals.    At birth, cubs weigh only 600 700 g or about a pound and a half. The largest polar bear on record was a huge male, allegedly weighing 1002 kg (2200 lb) shot at Kotzebue Sound in northwestern Alaska in 1960.The polar bears ears and tail are smaller than other bears, and its legs are stocky, as expected from Allens rule for a northerly animal. Its feet are very large, however, presumably to distribute load like snowshoes when walking on snow or thin ice.The bears sometimes have problems with various skin diseases with dermatitis caused sometimes by mites or other parasites. The bears are especially susceptible to Trichinella, a parasitic roundworm they contract through cannibalism.Sometimes excess heavy metals have been observed, as well as ethylene glycol (antifreeze) poisoning. Bears exposed to oil and petroleum products lose the insulative integrity of their coats, forcing metabolic rates to dramatically increase to maintain body heat in their challenging environment. Bacterial Leptospirosis, rabies and morbillivirus have been recorded. Interestingly, the bears are thought by some to be more resistant than other carnivores to viral disease.  The pollutant effect on the bears immune systems, however, may end up decreasing their ability to cope with the naturally present immunological threats it encounters, and in such a challenging habitat even minor weaknesses can lead to serious problems and quick death.',
    }, 
    {
      name: 'elephant',
      description:'Elephants (Elephantidae) are a family in the order Proboscidea in the class Mammalia. They were once classified along with other thick skinned animals in a now invalid order, Pachydermata. There are three living species: the African Bush Elephant, the African Forest Elephant (until recently known collectively as the African Elephant), and the Asian Elephant (also known as the Indian Elephant). Other species have become extinct since the last ice age, which ended about 10,000 years ago, the Mammoth being the most well-known of these.The word "elephant" has its origins in the Greek ἐλέφας, meaning "ivory" or "elephant".Elephants are mammals, and the largest land animals alive today.The elephants gestation period is 22 months, the longest of any land animal. At birth it is common for an elephant calf to weigh 120 kilograms (265 lb).  An elephant may live as long as 70 years, sometimes longer. The largest elephant ever recorded was shot in Angola in 1956. This male weighed about 12,000 kg (26,400 lb),    with a shoulder height of 4.2 m (13.8 ft), a metre (3 ft 4 in) taller than the average male African elephant.    The smallest elephants, about the size of a calf or a large pig, were a prehistoric species that lived on the island of Crete during the Pleistocene epoch. Bate, D.M.A. 1907. On Elephant Remains from Crete, with Description of Elephas creticus sp.n. Proc. zool. Soc. London: 238-250.Elephants are symbols of wisdom in Asian cultures, and are famed for their memory and high intelligence, and are thought to be on par with cetaceans    and hominids   . Aristotle once said the elephant was "the beast which passeth all others in wit and mind."Elephants are increasingly threatened by human intrusion and poaching. Once numbering in the millions, the African elephant population has dwindled to between 470,000 and 690,000 individuals.    The elephant is now a protected species worldwide, with restrictions in place on capture, domestic use, and trade in products such as ivory. Elephants generally have no natural predators, although lions may take calves and occasionally adults. A. J. Loveridge, J. E. Hunt, F. Murindagomo   D. W. Macdonald. (2006) Influence of drought on predation of elephant (Loxodonta africana) calves by lions (Panthera leo) in an African wooded savannah. Journal of Zoology 270:3, 523–530     In some areas, lions may regularly take to preying on elephants. Hemson, Graham (2003) The Ecology and Conservation of Lions: Human-Wildlife Conflict in semi-arid Botswana. Ph. D. Thesis, University of Oxford.',
    }, 
    {
      name: 'Liechtenstein',
      description:'The Principality of Liechtenstein is a tiny, doubly landlocked alpine country in Western Europe, bordered by Switzerland to its west and by Austria to its east. Mountainous, it is a winter sports resort, although it is perhaps best known as a tax haven. Despite this, it is not heavily urbanized. Many cultivated fields and small farms characterize its landscape both in the north (Unterland) and in the south (Oberland). It is the smallest German-speaking country in the world.At one time, the territory of Liechtenstein formed a part of the ancient Roman province of Raetia. For centuries this territory, geographically removed from European strategic interests, had little impact on the tide of European history. Prior to the reign of its current dynasty, the region was enfeoffed to a line of the counts of Hohenems.The Liechtenstein dynasty, from which the principality takes its name (rather than vice-versa), comes from Castle Liechtenstein in faraway Lower Austria, which the family possessed from at least 1140 to the thirteenth century, and from 1807 onward. Through the centuries, the dynasty acquired vast swathes of land, predominantly in Moravia, Lower Austria, Silesia, and Styria, though in all cases, these territories were held in fief under other more senior feudal lords, particularly under various lines of the Habsburg family, to whom several Liechtenstein princes served as close advisors. Thus, and without any territory held directly under the Imperial throne, the Liechtenstein dynasty was unable to meet a primary requirement to qualify for a seat in the Imperial diet, the Reichstag.The family yearned greatly for the added power which a seat in the Imperial government would garner, and therefore, searched for lands to acquire which would be unmittelbar or held without any feudal personage other than the Holy Roman Emperor himself having rights on the land. After some time, the family was able to arrange the purchase of the minuscule Herrschaft ("Lordship") of Schellenberg and countship of Vaduz (in 1699 and 1712 respectively) from the Hohenems. Tiny Schellenberg and Vaduz possessed exactly the political status required, no feudal lord other than their comital sovereign and the suzerain Emperor.Thereby, on January 23, 1719, after purchase had been duly made, Charles VI, Holy Roman Emperor, decreed Vaduz and Schellenberg were united, and raised to the dignity of Fürstentum (principality) with the name "Liechtenstein" in honor of "[his] true servant, Anton Florian of Liechtenstein". It is on this date that Liechtenstein became a sovereign member state of the Holy Roman Empire. As a testament to the pure political expediency of the purchases, the Princes of Liechtenstein did not set foot in their new principality for over 120 years.Schloss Vaduz, overlooking the capital, is still home to the prince of Liechtenstein.In 1806, most of the Holy Roman Empire was invaded by Napoleon I of the First French Empire. This event had broad consequences for Liechtenstein: imperial, legal and political mechanisms broke down, while Francis II, Holy Roman Emperor, abdicated the imperial throne and the Empire itself dissolved. As a result, Liechtenstein ceased to have any obligations to any feudal lord beyond its borders. Modern publications generally (although incorrectly) attribute Liechtensteins sovereignty to these events. In reality, its prince merely became suzerain, as well as remaining sovereign lord. From July 25 1806 when the Confederation of the Rhine was founded, the prince of Liechtenstein was a member, in fact a vassal of its hegemon, styled protector, French Emperor Napoleon I Bonaparte, until the dissolution of the Confederation on October 19 1813.Soon afterward, Liechtenstein joined the German Confederation (June 20 1815 – August 24 1866, which was presided over by the Emperor of Austria).Then, in 1818, Johann I granted a constitution, although it was limited in its nature. 1818 also saw the first visit of a member of the house of Liechtenstein, Prince Alois, however, the first visit by a sovereign prince would not occur until 1842.Liechtenstein also had many advances in the nineteenth century, as in 1836, the first factory was opened, making ceramics. In 1861, the Savings and Loans Bank was founded, as was the first cotton-weaving mill. Two bridges over the Rhine were built in 1868, and in 1872 a railway line across Liechtenstein was constructed.When the Austro-Prussian War broke out in 1866 new pressure was placed on Liechtenstein as, when peace was declared, Prussia accused Liechtenstein of being the cause of the war through a miscount of the votes for war with Prussia. This led to Liechtenstein refusing to sign a peace treaty with Prussia and remained at war although no actual conflict ever occurred. This was one of the arguments that were suggested to justify a possible invasion of Liechtenstein in the late 1930s.Until the end of World War I, Liechtenstein first was closely tied to the Austrian Empire and later, to Austria-Hungary; however, the economic devastation caused by WWI forced the country to conclude a customs and monetary union with its other neighbor, Switzerland. (Their Army had been disbanded in 1868, out of financial considerations.) At the time of the dissolution of the Austro-Hungarian Empire, it was argued that Liechtenstein as a fief of the Holy Roman Empire (supposedly still incarnated in Liechtensteiner eyes at an abstract level in the person of the then-dethroned Austro-Hungarian Emperor, despite its formal dissolution in 1806) was no longer bound to Austria, then emerging as an independent state, which did not consider itself as the legal successor to the Empire. Liechtenstein is thus the last independent state in Europe which can claim an element of continuity from the Holy Roman Empire.The Prince of Liechtenstein owns vineyards in Vaduz (in the foreground)',
    }, 

    {
      name: 'Singapore',
      description:'Singapore officially the Republic of Singapore is an island nation located at the southern tip of the Malay Peninsula. It lies 137 kilometres (85 mi) north of the Equator, south of the Malaysian state of Johor and north of Indonesias Riau Islands. At 704.0 km² (272 sq mi), it is one of the few remaining city-states in the world and the smallest country in Southeast Asia.The British East India Company established a trading post on the island in 1819. The main settlement up to that point was a Malay fishing village at the mouth of the Singapore River. Several hundred indigenous Orang Laut people also lived around the coast, rivers and smaller islands. The British used Singapore as a strategic trading post along the spice route.    It became one of the most important commercial and military centres of the British Empire. Winston Churchill called it "Britains greatest defeat" when it was occupied by the Japanese during World War II.Singapore reverted to British rule in 1945. In 1963, it merged with Malaya, Sabah and Sarawak to form Malaysia. Less than two years later it split from the federation and became an independent republic on 9 August 1965. Singapore was admitted to the United Nations on September 21 that same year.Since independence, Singapores standard of living has increased progressively. A state-led industrialization drive, aided by foreign direct  investment has created a modern economy based on electronics manufacturing, petrochemicals, tourism and financial services alongside the traditional trade. Singapore is the 17th wealthiest country in the world in terms of GDP per capita.Singapore is 44th (as on 2006).  The small nation has a foreign reserve of S$222 billion (US$147 billion).The Constitution of the Republic of Singapore established the nations political system as a representative democracy, while the country is recognized as a parliamentary republic.The Peoples Action Party (PAP) dominates the political process and has won control of Parliament in every election since self-government in 1959.Recent studies of Singapore indicate that lions have never lived there (not even Asiatic lions), and the beast seen by Sang Nila Utama was likely a tiger, most likely the Malayan Tiger.',
    },
    {
      name: 'qatar',
      description:'Qatar,In terms of English phonemics, the vowels sound halfway between short u   and broad a  . The q and the t have no direct counterparts, but are closest to the unaspirated allophones of English k and t. However, since these allophones cannot occur in these positions in English, in this context they will sound more like English g and d. So the closest pronunciation, according to English phonemics, to the original Arabic might be   or  . ), officially the State of Qatar is an Arab emirate in Southwest Asia, occupying the small Qatar Peninsula on the northeasterly coast of the larger Arabian Peninsula. It is bordered by Saudi Arabia to the south; otherwise the Persian Gulf surrounds the state. The name "Qatar" may derive from the same Arabic root as qatura which means "to exude."  The word Qatura traces to the Arabic qatran meaning "tar" or "resin", which relates to the countrys rich resources in petroleum and natural gas.  Adrian Room, Placenames of the World (1997) McFarland and Company.Other sources say the name may derive from "Qatara", believed to refer to the Qatari town of Zubara, an important trading port and town in the region in ancient times. The word "Qatara" first appeared on Ptolemys map of the Arabian Peninsula. An approximation of the native pronunciation falls between the English words "cutter" and "gutter", but not like "guitar".After domination by the Ottoman and British empires for centuries, Qatar became an independent state on September 3, 1971.Although the peninsular land mass that makes up Qatar has sustained humans for thousands of years, for the bulk of its history the arid climate fostered only short-term settlements by nomadic tribes. Clans such as the Al Khalifa and the Al Saud (which would later ascend thrones of Bahrain and Saudi Arabia respectively) swept through the Arabian peninsula and camped on the coasts within small fishing and pearling villages.'
    },
    {
      name: 'finland',
      description:'Finland, officially the Republic of Finland "Republic of Finland", or "Suomen tasavalta" in Finnish and "Republiken Finland" in Swedish, is the long protocol name, which is not defined by the law. Legislation only recognizes the short name.  ( ), is a Nordic country situated in Northern Europe. It has borders with Sweden to the west, Russia to the east, and Norway to the north, while Estonia lies to its south across the Gulf of Finland. The capital city is Helsinki.finland has a population of 5,300,362 people,  spread over an area of  . The majority of the population is concentrated in the southern part of the country. Finland is the sixth largest country in Europe in terms of area, with a low population density of 15.5 people per square kilometre, making it the most sparsely populated country in the European Union.  As their mother tongue, most Finns speak Finnish, one of the few official languages of the European Union that is not of Indo-European origin. The second official language, Swedish, is spoken natively by a 5.5 percent minority.Previously part of Sweden and from 1809 an autonomous Grand Duchy within the Russian Empire, Finland declared its independence in 1917. Today, Finland is a democratic, parliamentary republic and has been a member state of the United Nations since 1955 and the European Union since 1995. Finland has thriving services and manufacturing sectors and is a highly democratic welfare state with low levels of corruption, consistently ranking at or near the top in international comparisons of national performance.Finland is eleventh on the United Nations,Human Development Index and ranked as the sixth happiest nation in the world.    According to the World Audit Democracy profile, Finland is the freest nation in the world in terms of civil liberties, freedom of the press, low corruption levels and political rights.    Finland is rated the sixth most peaceful country in the world by the Economist Intelligence Unit,    and since 1945, Finland has been at peace, adopting neutrality in wartime.Finland was rated the best country to live in by Readers Digest study released in October 2007, which looked at issues such as quality of drinking water and greenhouse gas emissions as well as factors such as education and income.   Readers Digest study says Finland best for living.Rock paintings in Astuvansalmi in Ristiina, the Southern Savonia region.According to archaeological evidence, the area now composing Finland was first settled around 8500 BCE during the Stone Age as the ice shield of the last ice age receded. The earliest people were hunter-gatherers, living primarily off what the tundra and sea could offer. Pottery is known from around 5300 BCE (see Comb Ceramic Culture).The arrival of the Battle Axe culture (or Cord-Ceramic Culture) in southern coastal Finland around 3200 BCE may have coincided with the start of agriculture. However, the earliest certain records of agriculture are from the late third millennium BCE. Even with the introduction of agriculture, hunting and fishing continued to be important parts of the subsistence economy, especially in the northern and eastern parts of the country. Some scientists believe it is probable that speakers of a Finno-Ugric language arrived in the region during the Stone Age, around 2000 BCE at the latest (see Finno-Ugric peoples).    Recently, this view has beem rejected by researchers; the Finnish linguist and professor Juha Janhunen describes the idea of Finno-Ugric languages being present in Finland for thousands of years as "an old myth"   Janhunen, Juha. In Short Finnish roots (Korta finska rötter)", Hufvudstadsbladet, 2007-12-29. Retrieved on December_30, 2007  It is instead believed that both the Finnish and the Swedish language arrived in Finland at a much later stage and at around the same time, Finnish from the East and Swedish from the West.  ibid.  Finnish and Swedish gradually replaced earlier languages, both Finno-Ugric (Sami language) and Indo-European (Germanic). According to Janhunen, contemporary Finland is the result of the Finnish language expanding in the inner parts of Finland during the last thousand years.   ibid.  . Relatively recently, before the arrival of Germanic and Sami languages in Finland, other, now unknown, languages were spoken in Finland as is evidenced by the oldest elements of placenames in Finland being neither Finnish nor Swedish.'
    },

    {
      name: 'ghana',
      description:'The Republic of Ghana is a country in West Africa. It borders Côte dIvoire (also known as Ivory Coast) to the west, Burkina Faso to the north, Togo to the east, and the Gulf of Guinea to the south. The word "Ghana" means "Warrior King", Jackson, John G. Introduction to African Civilizations, 2001. Page 201.  and was the source of the name "Guinea" (via French Guinoye) used to refer to the West African coast (as in Gulf of Guinea).Ghana was inhabited in pre-colonial times by a number of ancient kingdoms, including the Ga Adangbes on the eastern coast, inland Empire of Ashanti and various Fante states along the coast and inland. Trade with European states flourished after contact with the Portuguese in the 15th century, and the British established a crown colony, Gold Coast, in 1874. MacLean, Iain. Rational Choice and British Politics: An Analysis of Rhetoric and Manipulation from Peel to Blair, 2001. Page 76.Upon achieving independence from the United Kingdom in 1957, Peter N. Stearns and William Leonard Langer. The Encyclopedia of World History: Ancient, Medieval, and Modern, Chronologically Arranged, 2001. Page 1050.  the name Ghana was chosen for the new nation to reflect the ancient Empire of Ghana that once extended throughout much of western Africa.Medieval Ghana (4th - 13th Century):The Republic of Ghana is named after the medieval Ghana Empire of West Africa. The actual name of the Empire was Wagadugu. Ghana was the title of the kings who ruled the kingdom. It was controlled by Sundiata in 1240 AD, and absorbed into the larger Mali Empire. (Mali Empire reached its peak of success under Mansa Musa around 1307.Geographically, the old Ghana is 500 miles north of the present Ghana, and occupied the area between Rivers Senegal and Niger. Some inhabitants of present Ghana had ancestors linked with the medieval Ghana. This can be traced down to the Mande and Voltaic people of Northern Ghana--Mamprussi, Dagomba and the Gonja.Anecdotal evidence connected the Akans to this Empire. The evidence lies in names like Danso shared by the Akans of present Ghana and Mandikas of Senegal/Gambia who have strong links with the Empire.Ghana was also the site of the Empire of Ashanti which was the most advanced black state in sub-Sahara Africa. It is said that at its peak, the King of Ashanti could field 500,000 troops.Gold Coast & European Exploration: Before March 1957 Ghana was called the Gold Coast. The Portuguese who came to Ghana in the 15th Century found so much gold between the rivers Ankobra and the Volta that they named the place Mina - meaning Mine. The Gold Coast was later adopted to by the English colonisers. Similarly, the French, equally impressed by the trinkets worn by the coastal people, named The Ivory Coast, Cote dIvoire.In 1482, the Portuguese built the Elmina Castle. Their aim was to trade in gold, ivory and slaves. In 1481 King John II of Portugal sent Diogo Azambuja to build this castle.in 1598 the Dutch joined them, and built forts at Komenda and Kormantsi. In 1637 they captured the castle from the Portuguese and that of Axim in 1642 (Fort St Anthony). Other European traders joined in by the mid 17th century. These were the English, Danes and Swedes. The coastline was dotted by more than 30 forts and castles built by the Dutch, British and the Danish merchants, the highest concentration of European military architecture outside of Europe. By the latter part of 19th century the Dutch and the British were the only traders left and when the Dutch withdrew in 1874, Britain made the Gold Coast a crown colony.For most of central sub-Saharan Africa, agricultural expansion marked the period before 500. Farming began earliest on the southern tips of the Sahara, eventually giving rise to village settlements. Toward the end of the classical era, larger regional kingdoms were formed in West Africa, one of which was the Kingdom of Ghana, north of what is today the nation of Ghana. After its fall at the beginning of the 13th century, Akan migrants moved southward then founded several nation-states including the first great Akan empire of the Bono which is now known as the ibalBrong Ahafo region in Ghana. Later Akan groups such as the Ashanti federation and Fante states are thought to possibly have roots in the original Bono settlement at Bono manso. Much of the area was united under the Empire of Ashanti by the 16th century. The Ashanti government operated first as a loose network and eventually as a centralized kingdom with an advanced, highly-specialized bureaucracy centered in Kumasi.The first contact between the Ghanaian peoples, the Fantes on the coastal area and Europeans occurred in 1482. The Portuguese  first landed at Elmina, a coastal city inhabited by the Fanti nation-state in 1482. During the next few centuries parts of the area were controlled by British, Portuguese, and Scandinavian powers, with the British ultimately prevailing. These nation-states maintained varying alliances with the colonial powers and each other, which resulted in the 1806 Ashanti-Fante War, as well as an ongoing struggle by the Empire of Ashanti against the British. Moves toward regional de-colonization began in 1946, and the areas first constitution was promulgated in 1951.formed from the merger of the British colony Gold Coast, The Empire of Ashanti and the British Togoland trust territory by a UN sponsored plebiscite, Ghana became the first democratic sub-Sahara country in colonial Africa to gain its independence in 1957. Kwame Nkrumah, founder and first president of the modern Ghanaian state, was not only an African anti-colonial leader but also one with a dream of a united Africa which would not drift into neo-colonialism. He was the first African head of state to espouse Pan-Africanism, an idea he came into contact with during his studies at Lincoln University in Pennsylvania (United States), at the time when Marcus Garvey was becoming famous for his "Back to Africa Movement." He merged the dreams of both Marcus Garvey and the celebrated African-American scholar W.E.B. Du Bois into the formation of the modern day Ghana. Ghanas principles of freedom and justice, equity and free education for all, irrespective of ethnic background, religion or creed borrow from Osagyefo Dr Kwame Nkrumahs implementation of Pan-Africanism.Nkrumah was overthrown by a supported CIA-backed coup Interview with John Stockwell in Pandoras Box: Black Power (Adam Curtis, BBC Two, 22 June 1992).On Nkrumah assassination by CIA: Gaines, Kevin (2006) American Africans in Ghana, Black expatriates and the Civil Rights Era, The University of North Carolina Press, Chapel Hill. . A series of subsequent coups ended with the ascension to power of Flight Lieutenant Jerry Rawlings in 1981. These changes resulted in the suspension of the constitution in 1981 and the banning of political parties. A new constitution, restoring multi-party politics, was promulgated in 1992, and Rawlings was elected as president in the free and fair elections of that year and again won the elections 1996 to serve his second term. The constitution prohibited him from running for a third term. John Kufuor, the current president, is now serving his second term, which ends in 2008 where another election will be held to elect a new president. The year 2007 marks Ghanas Golden Jubilee celebration of its 50-year anniversary, which was on March 6th, 1957.Ghana is a republic and member of the Commonwealth of Nations. Its head of state is President John Agyekum Kufuor, the ninth leader of the country since independence. The government sits at Osu Castle. The Parliament of Ghana is unicameral and dominated by two main parties, the New Patriotic Party and National Democratic Congress.'
    },
    {
      name:'history of indian cuisine',
      description:'The history of Indian cuisine consists of cuisine from the Indian subcontinent, which is rich and diverse. The diverse climate in the region, ranging from deep tropical to alpine, has also helped considerably broaden the set of ingredients readily available to the many schools of cookery in India. In many cases, food has become a marker of religious and social identity, with varying taboos and preferences (for instance, a segment of the Jain population consume no roots or subterranean vegetable; see Jain vegetarianism) which has also driven these groups to innovate extensively with the food sources that are deemed acceptable. One strong influence over Indian foods is the longstanding vegetarianism within sections of Indias Hindu and Jain communities. At 31%, slightly less than a third of Indians are vegetarians.The beginning of agriculture in the Indian subcontinent comes from the North-West part of India. As per the Archaeological survey, crops were grown in the cleared forest around 8000 BCE in north Rajasthan. Mehrgarh is a prehistoric site located in Baluchistan, which shows the earliest evidence of farming & herding in South Asia as per Archaeological survey (Mehrgarh is a Neolithic site dated 7000BCE to 3000 BCE).'
    },
    {
      name: 'was woodrow wilson the thirtieth president of the united states?',
      description:'No',
    },
    {
      name: 'did woodrow wilson create the league of nations?',
      description:'No',
    },
    {
      name: 'where was the league of nations created?',
      description:'Paris',
    },
    {
      name: 'when was woodrow wilson born?',
      description:'December 28, 1856',
    },
    {
      name: 'who was president when wilson finished congressional government?',
      description:'Grover Cleveland',
    },
    {
      name: 'where was woodrow wilson born?',
      description:'Woodrow Wilson was born in Staunton, Virginia',
    },
    {
      name: 'is uruguay a member of the cairns group of exporters of agricultural products ?',
      description:'Yes',
    },
    
    {
      name: 'what is naive bayes algorithm?',
      description:'Naive Bayes algorithm is a collection of classifiers which works on the principles of the Bayes’ theorem. This series of NLP model forms a family of algorithms that can be used for a wide range of classification tasks including sentiment prediction, filtering of spam, classifying documents.Naive Bayes algorithm converges faster and requires less training data. Compared to other discriminative models like logistic regression, Naive Bayes model it takes lesser time to train. This algorithm is perfect for use while working with multiple classes and text classification where the data is dynamic and changes frequently.',
    },
    {
      name: 'explain dependency parsing in nlp?',
      description:'Dependency Parsing, also known as Syntactic parsing in NLP is a process of assigning syntactic structure to a sentence and identifying its dependency parses. This process is crucial to understand the correlations between the “head” words in the syntactic structure. The process of dependency parsing can be a little complex considering how any sentence can have more than one dependency parses. Multiple parse trees are known as ambiguities. Dependency parsing needs to resolve these ambiguities in order to effectively assign a syntactic structure to a sentence.Dependency parsing can be used in the semantic analysis of a sentence apart from the syntactic structuring.',
    },
    {
      name:'what is nltk how is it different from spacy?',
      description:'NLTK or Natural Language Toolkit is a series of libraries and programs that are used for symbolic and statistical natural language processing. This toolkit contains some of the most powerful libraries that can work on different ML techniques to break down and understand human language. NLTK is used for Lemmatization, Punctuation, Character count, Tokenization, and Stemming. The difference between NLTK and Spacey are as follows.While NLTK has a collection of programs to choose from, Spacey contains only the best-suited algorithm for a problem in its toolkit. NLTK supports a wider range of languages compared to Spacey (Spacey supports only 7 languages).While Spacey has an object-oriented library, NLTK has a string processing library. Spacey can support word vectors while NLTK cannot',
    },
    {
      name:'is the Gray wolf a mammal?',
      description:'Yes',
    },
    {
      name:'Where is the largest gray wolf population thought to be found?',
      description:'Kazakhstan',
    },
    {
      name:'Are the Javanese the largest and politically dominant ethnic group in Indonesia?',
      description:'Yes',
    },
    {
      name:'When did Islam become the dominant religion in Java and Sumatra?',
      description:'the end of the 16th century',
    },
    {
      name:'Is James Monrow the fifth president of US?',
      description:'Yes',
    },
    {
      name:'What is JIT and AOT in Angular',
      description:'The JIT is nothing but just-in-time compilation which is used to compile the angular application during Runtime in the browser.where as AOT means Ahead-of-Time Compilation, which is used to compile the angular application during BuildTime in the browser',
    },
    {
      name:'What Observables in Angular?',
      description:'Observables are used to handle asynchronous data, such as streams of data that are received over time. They are often used in Angular for tasks such as making HTTP requests, handling user input events, and managing animations.Observables are created using the Observable constructor, which takes a function called an "observer function" as an argument. The observer function defines how the observable should behave when it is subscribed to.',
    },

    {
      name:'How Angular application woks?',
      description:'Angular is a framework for building client-side applications in HTML, CSS, and JavaScript. When an Angular application is launched, the browser loads the applications HTML file, which includes tags that reference the applications CSS and JavaScript files. The browser then downloads and runs the CSS and JavaScript files, which initialize the application and set up the frameworks runtime environment.The Angular framework uses a component-based architecture, in which an application is made up of a hierarchy of components. Each component is a self-contained unit that controls a portion of the applications UI and logic. The root component, called the root component, is the top-level component in the component hierarchy, and it controls the overall layout and behavior of the application.As the user interacts with the application, the Angular framework updates the component tree and the HTML DOM (Document Object Model) to reflect the current state of the application. The framework uses a two-way data binding mechanism to synchronize the component tree with the UI, so that changes to the component tree are reflected in the UI, and vice versa.'
    },
    {
      name:'What is XML?',
      description:'XML (eXtensible Markup Language) is a markup language that is used to encode data in a format that is both human-readable and machine-readable. It is based on the Standard Generalized Markup Language (SGML), but is more flexible and easier to use than SGML.XML is used to structure, store, and transport data, and is particularly well-suited for storing and transporting data that is hierarchical in nature, such as a database of employees in a company. XML documents are made up of elements, which are defined by tags, and are used to store data and describe the structure of the document.'
    },
    {
      name:'what typescript?',
      description:'ypeScript is a programming language that is a strict syntactical superset of JavaScript, and adds optional static typing to the language. It was developed and is maintained by Microsoft.TypeScript is designed for development of large applications and transcompiles to JavaScript. TypeScript is popular among developers because it can help catch errors before the code is run, making the debugging process easier. It also allows for the use of object-oriented programming techniques, such as classes and interfaces, which are not natively supported in JavaScript.TypeScript code is typically written in files with a .ts extension, and then compiled into JavaScript code with a .js extension that can be run in a web browser or on a server.'
    },
    {
      name:'what is React?',
      description:'React is a JavaScript library for building user interfaces. It was developed by Facebook, and is often used for building single-page applications and mobile applications.React allows developers to create reusable UI components. It works by rendering components to a virtual DOM (a lightweight in-memory representation of the actual DOM), and then updating the actual DOM efficiently when the data changes. This makes it possible to build fast, dynamic web applications.React uses a syntax extension called JSX, which allows you to write HTML-like code in your JavaScript. This can make the code easier to read and understand, especially for developers who are familiar with HTML.'
    },
    {
       name:'The Battle of Plassey was fought in',
       description:'1757'
    },
    {
      name:'TThe territory of Porus who offered strong resistance to Alexander was situated between the rivers of',
      description:'Jhelum and Chenab'
   },
   {
    name:'Under Akbar, the Mir Bakshi was required to look after',
    description:'military affairs'
 },

 {
  name:'The system of competitive examination for civil service was accepted in principle in the year',
  description:'1853'
},
{
 name:'The theory of economic drain of India during British imperialism was propounded by',
 description:'Dadabhai Naoroji'
},
{
name:'Tripitakas are sacred books of',
description:'Buddhists'
},

{
  name:'In fireworks, the green flame is produced because of',
  description:'barium'
},
{
 name:'The power to decide an election petition is vested in the',
 description:'High courts'
},
{
name:'The members of the Rajya Sabha are elected by',
description:'elected members of the legislative assembly'
},
{
  name:'LPG consists of mainly',
  description:'methane, butane and propane'
},
{
  name:'What is sentiment analysis in NLP?',
  description:'The sentiment analysis, also known as opinion mining and emotion AI, is a process of detecting the polarity of the opinion in the text or can be a part of it. It is majorly used to identify, extract, and quantify user or customer reviews’ polarity, survey responses, or social media opinions'
},
{
  name:'What is ambiguity in NLP?',
  description:'Ambiguity can be referred to as a condition when a word can have multiple interpretations and results in being misunderstood. Natural languages are ambiguous and can make it difficult to process NLP techniques on them, resulting in the wrong outpu'
},
{
  name:'What is the Naive Bayes algorithm, and where is it used in NLP?',
  description:'Naive Bayes algorithm is used to predict tags of text by calculating the probability for each tag for the text and then providing the one with the highest probability.'
},
    ];
   
  filter() {
    if(this.filterBy)
    {     
    this.questions = this.book.filter(qname =>qname.name.toLowerCase().includes(this.filterBy.toLowerCase()));
     if(this.questions.length>0) 
     {
    this.message.push(this.questions);
     }
     else
     {
      //this.message.push(this.noresult);
    this.noresult="No Result Found for searching text!";
     }
    this.filterBy = '';
     }
  }
  clearchat() {
    this.message = [];
    this.noresult=[];
  }
}
