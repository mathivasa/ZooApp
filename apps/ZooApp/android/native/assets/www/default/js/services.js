
/* JavaScript content from js/services.js in folder common */
angular.module('starter.services', [])

.service('productService', function() {
   var productList = [ {
   "name" : "Lion","id":"011",src:'http://images.nationalgeographic.com/wpf/media-live/photos/000/004/cache/african-lion-male_436_990x742.jpg',"category":"wildanimals","scientificName":"Panthera leo",familyName:"Felidae",LifeSpan:"10-14 years",detail:"Lions are the only cats that live in groups, which are called prides. Prides are family units that may include up to three males, a dozen or so females, and their young. All of a pride's lionesses are related, and female cubs typically stay with the group as they age. Young males eventually leave and establish their own prides by taking over a group headed by another male.",video:"video/movie.mp4"
  }, {
   "name" : "Tiger","id":"012",src:'http://images.nationalgeographic.com/wpf/media-live/photos/000/202/cache/tiger-face-snarl-hiss-close-up_20246_990x742.jpg',"category":"wildanimals","scientificName":"Panthera tigris",familyName:"Felidae",LifeSpan:"20 years",detail:"There were eight tiger subspecies at one time, but three became extinct during the 20th century. Over the last 100 years, hunting and forest destruction have reduced tiger populations from hundreds of thousands of animals to perhaps fewer than 2,500. Tigers are hunted as trophies, and also for body parts that are used in traditional Chinese medicine. All five remaining tiger subspecies are at-risk, and many protection programs are in place."
  }, {
   "name" : "Giraffe","id":"013",src:'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/giraffe-mom-baby.jpg.adapt.945.1.jpg',"category":"wildanimals","scientificName":"Giraffa camelopardalis",familyName:"Giraffidae",LifeSpan:"25 years",detail:"Giraffes are the world's tallest mammals, thanks to their towering legs and long necks. A giraffe's legs alone are taller than many humans—about 6 feet . These long legs allow giraffes to run as fast as 35 miles an hour over short distances and cruise comfortably at 10 miles an hour over longer distances."
  }, {
   "name" : "Elephant","id":"014",src:'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/A-G/Five%20Reasons%20Why/A-G/moms5.png.adapt.945.1.jpg',"category":"wildanimals"
  },{
   "name" : "Vulture","id":"015",src:'http://www.denverzoo.org/sites/default/files/birds_02_480x490.jpg',"category":"birds","scientificName":"Sarcoramphus papa",familyName:"Solitary",LifeSpan:"30 years",detail:"Like other vultures, the king vulture is a scavenger. These large birds glide on air currents, conserving energy while searching the forests or savanna below for the corpses of dead animals. Because of their unappetizing eating habits, they fill an ecological niche, and may help to prevent the spread of disease by disposing of rotting remains."
  },{
   "name" : "Turquoise-Browed Motmot","id":"016",src:'http://en.bcdn.biz/Images/2016/6/23/e7d1dafe-9b0c-4ba1-a622-a98f7f708aee.jpg',"category":"birds"
  },{
   "name" : "Hooded Pitohui","id":"017",src:'http://en.bcdn.biz/Images/2016/6/23/221eb948-2448-47a3-abc8-d4b6d22baa2f.jpg',"category":"birds"
  },{
   "name" : "Malachite Kingfisher","id":"018",src:'http://en.bcdn.biz/Images/2016/6/23/6d544b46-f9db-46ad-8273-cd513e027f71.jpg',"category":"birds"
  },{
   "name" : "King Cobra","id":"019",src:'http://cdn2.walkthroughindia.com/wp-content/uploads/2011/05/Giant-King-Cobra.jpg',"category":"reptiles"
  },{
   "name" : "The Gharial","id":"020",src:'http://cdn.walkthroughindia.com/wp-content/uploads/2012/12/gharial_india.jpg',"category":"reptiles"
  },{
   "name" : "Cane Turtle","id":"021",src:'http://cdn.walkthroughindia.com/wp-content/uploads/2012/09/Cane-turtle-India.jpg',"category":"reptiles"
  },{
   "name" : "Rubber Boa","id":"022",src:'http://www.toptenz.net/wp-content/uploads/2014/08/weirdlizards5.jpg',"category":"reptiles"
  },{
   "name" : "Giant Isopod","id":"023",src:'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2007/12/isopod.jpg',"category":"Aquatic"
  },{
   "name" : "Mandarin Dragonet ","id":"024",src:'https://usercontent1.hubstatic.com/12387616_f520.jpg',"category":"Aquatic"
  },{
   "name" : "Cauliflower jellyfish","id":"025",src:'https://usercontent2.hubstatic.com/12387665_f520.jpg',"category":"Aquatic"
  },{
   "name" : "Yellow tang","id":"026",src:'https://usercontent1.hubstatic.com/12387888_f520.jpg',"category":"Aquatic"
  }];

   var addProduct = function(newObj) {
       productList.push(newObj);
   };

   var getProducts = function(){
       return productList;
   };
   
   var name = function(name){
    
    for(i=0;i<productList.length;i++){
     if(productList[i].name==name){
      return productList[i];  
     }
    }
   };
   
   var category = function(category){
    var array = [];
    for(i=0; i<productList.length; i++){
     if(productList[i].category==category){
      array.push(productList[i]);  
     }
    }
    
    return array;
   };

   return {
     addProduct: addProduct,
     getProducts: getProducts,
     name: name,
     category: category
   };

 });