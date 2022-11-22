//created 10/7/22
//last updated 10/10/22


   //SAVING MAKES NO SENSE WTF
//i wanna kill myself


//this works in counting but doesn't save
var stone = Number(window.localStorage.getItem("stone"));    

function stoneClick(number) {
    stone = stone + number;
    window.localStorage.setItem("stone", stone);
    document.getElementById("stone").innerHTML = stone;
}


var miner = 0;

function buyMiner(){
    var minerCost = Math.floor(10 * Math.pow(1.1,miner));     //works out the cost of this cursor
    if(stone >= minerCost){                      //checks that the player can afford the cursor
        miner = miner + 1;                                   //increases number of miner
    	stone = stone - minerCost;                          //removes the cookies spent
        document.getElementById('miner').innerHTML = miner;  //updates the number of miner for the user
        document.getElementById('stone').innerHTML = stone;  //updates the number of cookies for the user
        document.getElementById('mining').innerHTML = miner;
        window.localStorage.setItem("miner", miner);
        document.getElementById("miner").innerHTML = miner;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,miner));       //works out the cost of the next cursor
    document.getElementById('minerCost').innerHTML = nextCost;  //updates the cursor cost for the user
    
};

window.setInterval(function(){
	
	stoneClick(miner);
	
}, 1000);

var wood = 0;
function woodClick(number) {
  wood += number;
  document.getElementById("wood").innerHTML = "" + wood;
  var a = JSON.parse(localStorage.getItem('save'));
  a.wood += number;
  localStorage.setItem('save', JSON.stringify(a));
}

var wood = Number(window.localStorage.getItem("wood"));    

function woodClick(number) {
    wood = wood + number;
    window.localStorage.setItem("wood", wood);
    document.getElementById("wood").innerHTML = wood;
}

var chopper = 0;

function buyChopper(){
    var chopperCost = Math.floor(10 * Math.pow(1.1,chopper));     //works out the cost of this cursor
    if(wood >= chopperCost){                                   //checks that the player can afford the cursor
        chopper = chopper + 1;                                   //increases number of miner
    	wood = wood - chopperCost;                          //removes the cookies spent
        document.getElementById('chopper').innerHTML = chopper;  //updates the number of miner for the user
        document.getElementById('wood').innerHTML = wood;  //updates the number of cookies for the user
        document.getElementById('chopping').innerHTML = chopper;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,chopper));       //works out the cost of the next cursor
    document.getElementById('chopperCost').innerHTML = nextCost;  //updates the cursor cost for the user
};



window.setInterval(function(){
	
    woodClick(chopper);

	
}, 1000);



var metal = 1000000;

function metalClick(number){
    metal = metal + number;
    document.getElementById("metal").innerHTML = metal;
};

var smelter = 0;

function buySmelter(){
    var smelterCost = Math.floor(10 * Math.pow(1.1,smelter));     //works out the cost of this cursor
    if(metal >= smelterCost){                                   //checks that the player can afford the cursor
        smelter = smelter + 1;                                   //increases number of miner
    	metal = metal - smelterCost;                          //removes the cookies spent
        document.getElementById('smelter').innerHTML = smelter;  //updates the number of miner for the user
        document.getElementById('metal').innerHTML = metal;  //updates the number of cookies for the user
        document.getElementById('smelting').innerHTML = smelter;
        
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,smelter));       //works out the cost of the next cursor
    document.getElementById('smelterCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
    metalClick(smelter);

	
}, 1000);

var food = 0;

function foodClick(number){
    food = food + number;
    document.getElementById("food").innerHTML = food;
};

var farmer = 0;

function buyFarmer(){
    var farmerCost = Math.floor(10 * Math.pow(1.1,farmer));     //works out the cost of this cursor
    if(food >= farmerCost){                                   //checks that the player can afford the cursor
        farmer = farmer + 1;                                   //increases number of miner
    	food = food - farmerCost;                          //removes the cookies spent
        document.getElementById('farmer').innerHTML = farmer;  //updates the number of miner for the user
        document.getElementById('food').innerHTML = food;  //updates the number of cookies for the user
        document.getElementById('farming').innerHTML = farmer;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,farmer));       //works out the cost of the next cursor
    document.getElementById('farmerCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
    foodClick(farmer);

	
}, 1000);

var army = 0;

var smallcottage = 0;





function buySmallcottage(){
    var smallcottageCost = Math.floor(150 * Math.pow(1.1,smallcottage));     //works out the cost of this cursor
    if(metal >= smallcottageCost){                                   //checks that the player can afford the cursor
        smallcottage = smallcottage + 1;                                   //increases number of miner
    	metal = metal - smallcottageCost;                          //removes the cookies spent
        document.getElementById('smallcottage').innerHTML = smallcottage;  //updates the number of miner for the user
        document.getElementById('metal').innerHTML = metal;  //updates the number of cookies for the user
        document.getElementById('army').innerHTML = smallcottage;
    };
    var nextCost = Math.floor(150 * Math.pow(1.1,(smallcottage + (10 * village))));       //works out the cost of the next cursor
    document.getElementById('smallcottageCost').innerHTML = nextCost;  //updates the cursor cost for the user
    var army = Math.floor((15 * village) + (100 * apartment) + (5 * regcottage) + smallcottage)
    document.getElementById('army').innerHTML = army;

};

var regcottage = 0;

function buyRegcottage(){
    var regcottageCost = Math.floor(400 * Math.pow(1.1,regcottage));     //works out the cost of this cursor
    if(metal >= regcottageCost){                                   //checks that the player can afford the cursor
        regcottage = regcottage + 1;                                   //increases number of miner
    	metal = metal - regcottageCost;                          //removes the cookies spent
        document.getElementById('regcottage').innerHTML = regcottage;  //updates the number of miner for the user
        document.getElementById('metal').innerHTML = metal;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(400 * Math.pow(1.1,regcottage));       //works out the cost of the next cursor
    document.getElementById('regcottageCost').innerHTML = nextCost;  //updates the cursor cost for the user
    var army = Math.floor((15 * village) + (100 * apartment) + (5 * regcottage) + smallcottage)
    document.getElementById('army').innerHTML = army;
};

var apartment = 0;

function buyApartment(){
    var apartmentCost = Math.floor(1000 * Math.pow(1.1,apartment));     //works out the cost of this cursor
    if(metal >= apartmentCost && wood >= apartmentCost){                                   //checks that the player can afford the cursor
        apartment = apartment + 1;                                   //increases number of miner
    	metal = metal - apartmentCost;                          //removes the cookies spent
        wood = wood - apartmentCost;
        document.getElementById('apartment').innerHTML = apartment;  //updates the number of miner for the user
        document.getElementById('metal').innerHTML = metal;  //updates the number of cookies for the user
        document.getElementById('wood').innerHTML = wood;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,apartment));       //works out the cost of the next cursor
    document.getElementById('apartmentCost').innerHTML = nextCost;  //updates the cursor cost for the user
    var army = Math.floor((15 * village) + (100 * apartment) + (5 * regcottage) + smallcottage)
    document.getElementById('army').innerHTML = army;
};

var village = 0;

function buyVillage(){
    var villageCost = 10;     //works out the cost of this cursor
    if(smallcottage >= villageCost){                                   //checks that the player can afford the cursor
        village = village + 1;                                   //increases number of miner
    	smallcottage = smallcottage - villageCost;                          //removes the cookies spent
        document.getElementById('village').innerHTML = village;  //updates the number of miner for the user
        document.getElementById('smallcottage').innerHTML = smallcottage;  //updates the number of cookies for the user
    };
    var nextCost = 10;       //works out the cost of the next cursor
    document.getElementById('villageCost').innerHTML = nextCost;  //updates the cursor cost for the user
    var army = Math.floor((15 * village) + (100 * apartment) + (5 * regcottage) + smallcottage)
    document.getElementById('army').innerHTML = army;
};






//NEED TO DO<br/>
    //hidden buttons <br/>
    //weapons <br/>
    //armor <br/>
    //Bigger cities <br/>
    //Saving <br/>
    //Outer space <br/>
    //Breeding <br/>
    //Traps <br/>
    //Build function <br/>

 


//future ideas:
//Include cities
//Weapons + armor
//Strenghth/attack bar
//some sort of battle element
//space

