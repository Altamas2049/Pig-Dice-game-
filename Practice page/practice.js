/*var naem="Altamas";
console.log(name);

var lastName="Khan";
console.log(lastName)

var age =20;
console.log(age);


var fullAge =true;
console.log(fullAge)


var name ='Altamsh';
var age=20;
console.log(name+age)
console.log(age+age);

var job, ismarried;

console.log(job);

job='teacher';
ismarried=false;

console.log(name+' is a  '+age+' years old '+job+'is he married? '+ismarried);

age='thirty six';
job='driver';

console.log(name+' is a  '+age+' years old '+job+'is he married? '+ismarried);

//var lastName=prompt('waht is the last name ?')
//console.log(lastName)*/


//alert(name+' is a  '+age+' years old '+job+'is he married? '+ismarried)


/*var now =2020;
var birthyear = now-26;

birthyear= birthyear*2;
 
console.log(birthyear)*/

/*var agejohn=30;
var agemark=30;

agejohn=agemark=(3+5)*4-6;
agejohn++;
agemark=agejohn+1;
console.log(agemark);
console.log(agejohn);*/


/*var name ='john';
var age=28;
var ismarried='no';

if(ismarried ==='yes'){
    console.log(name+'ismarried');
}
else{
    console.log( name + ' will hopefully marry soon :)')
}
ismarried=false;
if(ismarried){
    console.log('yes');
}else{
    console.log('no')
}*/

/*var age = 25;
if(age<20){
    console.log('John is teenager');

} else if(age>20 && age<30){
    console.log('john is a young man')
}

else{
    console.log('john is a man')
}

var job = 'teacher';
job = prompt('what does jhon do?')

switch(job){
    case 'teacher':
        console.log('john teaches kids');
        break
    case 'driver':
        console.log('john driver a cab');
        break
    case 'cop':
        console.log('john helps fight crime ');
        break
    default:
        console.log('john does something else');
}*/



/*var heightjohn = 111;
var heightmike = 112;
var agejohn = 27;
var agemike = 29;


var scorejohn = heightjohn+5*agejohn;
var scoremike = heightmike+5*agemike;

if (scorejohn > scoremike){
    console.log('john wins the game with'+ scorejohn +'points:');
} else if(scoremike > scorejohn){
    console.log('mike wins the with ' + scoremike + ' points');
} else if ( scorejohn === scoremike){
    console.log('there is a draw');
}*/

/*function calculateage(yearofbirth){
    var age = 2020-yearofbirth;
    return age;
}


var agejhon = calculateage(1999);
var agemike = calculateage(1998);
console.log(agejhon);
console.log(agemike);

function yearofretirement(name, year){
    var age = calculateage(year);
    var retirment =65-age;

    if( retirment>=0){
        console.log(name + ' retires in ' + retirment + ' years ');
    }else {
        console.log(name + ' is already retired ');
    }
}


yearofretirement('john',1999);
yearofretirement('mark',1945);
yearofretirement('mike',1998);*/


/*var names=['john','mike','mark'];
var years=new Array(1999,1998,1948);
console.log(names[]);*/


/*var john ={
    name:'john',
    lastName:'smith',
    yearofbirth:1998,
    job:'teacher',
    calculateage:function(){
        return 2016-this.yearofbirth;
    }
};


console.log(john.calculateage());

var age = john.calculateage();
john.age=age;

console.log(john);*/

/*var jane = new Object();
jane.name='jane';
jane.age=22;
jane.job='programmer';
console.log(jane)*/


/*for (var i =0;i<10;i++){
    console.log(i);
}

var names = ['jhon', 'mike', 'marry'];
for(var i=0;i<names.length;i++){
    console.log(names[i]);
}

for( var i=names.length-1;i>=0;i--){
    console.log(names[i]);
}*/

/*var john = {
    name:'john',
    yearofbirth:1998,
    calculateage:function(){
       console.log(this);
        console.log(2020-this.yearofbirth);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateage();*/


