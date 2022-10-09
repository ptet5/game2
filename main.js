var stone = 0;

function stoneClick(number){
    stone = stone + number;
    document.getElementById("stone").innerHTML = stone;
};

var miner = 0;

function buyMiner(){
    var minerCost = Math.floor(10 * Math.pow(1.1,miner));     //works out the cost of this cursor
    if(stone >= minerCost){                                   //checks that the player can afford the cursor
        miner = miner + 1;                                   //increases number of miner
    	stone = stone - minerCost;                          //removes the cookies spent
        document.getElementById('Miner').innerHTML = miner;  //updates the number of miner for the user
        document.getElementById('stone').innerHTML = stone;  //updates the number of cookies for the user
        document.getElementById('mining').innerHTML = miner;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,miner));       //works out the cost of the next cursor
    document.getElementById('minerCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	stoneClick(miner);

	
}, 1000);

var wood = 1000;

function woodClick(number){
    wood = wood + number;
    document.getElementById("wood").innerHTML = wood;
};

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



var metal = 1000;

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






var army = 0;

var smallhouse = 0;





function buySmallhouse(){
    var smallhouseCost = Math.floor(150 * Math.pow(1.1,smallhouse));     //works out the cost of this cursor
    if(metal >= smallhouseCost){                                   //checks that the player can afford the cursor
        smallhouse = smallhouse + 1;                                   //increases number of miner
    	metal = metal - smallhouseCost;                          //removes the cookies spent
        document.getElementById('smallhouse').innerHTML = smallhouse;  //updates the number of miner for the user
        document.getElementById('metal').innerHTML = metal;  //updates the number of cookies for the user
        document.getElementById('army').innerHTML = smallhouse;
    };
    var nextCost = Math.floor(150 * Math.pow(1.1,smallhouse));       //works out the cost of the next cursor
    document.getElementById('smallhouseCost').innerHTML = nextCost;  //updates the cursor cost for the user
    var army = Math.floor((100 * apartment) + (5 * reghouse) + smallhouse)
    document.getElementById('army').innerHTML = army;

};

var reghouse = 0;

function buyReghouse(){
    var reghouseCost = Math.floor(400 * Math.pow(1.1,reghouse));     //works out the cost of this cursor
    if(metal >= reghouseCost){                                   //checks that the player can afford the cursor
        reghouse = reghouse + 1;                                   //increases number of miner
    	metal = metal - reghouseCost;                          //removes the cookies spent
        document.getElementById('reghouse').innerHTML = reghouse;  //updates the number of miner for the user
        document.getElementById('metal').innerHTML = metal;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(400 * Math.pow(1.1,reghouse));       //works out the cost of the next cursor
    document.getElementById('reghouseCost').innerHTML = nextCost;  //updates the cursor cost for the user
    var army = Math.floor((100 * apartment) + (5 * reghouse) + smallhouse)
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
    var army = Math.floor((100 * apartment) + (5 * reghouse) + smallhouse)
    document.getElementById('army').innerHTML = army;
};