const arrayOfIngredients = [
    {
        title: "carrot",
        protein: 27.5,
        carbohydrates: 12.3,
        fats: 3.0,
        kilocalories: 112
    },
    {
        title: "meat",
        protein: 30,
        carbohydrates: 4.0,
        fats: 8.0,
        kilocalories: 155
    },
    {
        title: "potato",
        protein: 90,
        carbohydrates: 7.0,
        fats: 12.0,
        kilocalories: 260
    },
    {
        title: "mayo",
        protein: 40,
        carbohydrates: 6.0,
        fats: 15.0,
        kilocalories: 100
    }
];
let dishes = [
    {
        title: 'Запеканка',
        gram: 350,
        ingredients: [
            {
                ingredient: 1,
                gram: 10
            }, {
                ingredient: 0,
                gram: 15
            },
            {
                ingredient: 2,
                gram: 50
            },
            {
                ingredient: 3,
                gram: 25
            }
        ]
    },
    {
        title: 'Салат',
        gram: 350,
        ingredients: [
            {
                ingredient: 0,
                gram: 50
            }, {
                ingredient: 1,
                gram: 85
            },
            {
                ingredient: 2,
                gram: 75
            },
            {
                ingredient: 3,
                gram: 40
            }

        ]
    },
    {
        title: 'Вареники',
        gram: 350,
        ingredients: [
            {
                ingredient: 1,
                gram: 20
            }, {
                ingredient: 2,
                gram: 40
            },
            {
                ingredient: 0,
                gram: 95
            }
        ]
    }
];

function recalcElemIngrid(gram, perHundredGrams) {
    return (gram * perHundredGrams) / 100;
}

function disheScore(arrDisheInd) {
    let protein = 0,
        carbohydrates = 0,
        fats = 0,
        kilocalories = 0;

    for (let ingred of arrDisheInd.ingredients) {

        let tempingredient = arrayOfIngredients[ingred.ingredient];

        protein += recalcElemIngrid(ingred.gram, tempingredient.protein);
        carbohydrates += recalcElemIngrid(ingred.gram, tempingredient.carbohydrates);
        fats += recalcElemIngrid(ingred.gram, tempingredient.fats);
        kilocalories += recalcElemIngrid(ingred.gram, tempingredient.kilocalories);
    }

    return console.log(arrDisheInd.title + ':\n protein: ' + protein + '\n carbohydratesc: ' + carbohydrates +
        '\n fats: ' + fats + '\n kilocalories: ' + kilocalories);
}

disheScore(dishes[1]);