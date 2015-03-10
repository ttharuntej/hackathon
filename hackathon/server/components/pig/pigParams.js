/**
 * Created by xwang17 on 10/21/14.
 */

var pigParams = {

    cosmosTestPig:{
        range: 60, // mins
        retry: 3,
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-12:00',
                "endDate":'2014/10/20-12:06',
                "env":"null",
                "pool":"r1ordersvc",
                "machine":"null",
                "colo":"null",
                "sampling":"10"
            }

        }
    },

    apiTestPig:{
        range: 60,
        retry: 3,
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-11:06',
                "endDate":'2014/10/20-12:06',
                "env":"prod",
                "pool":"v3apixocore",
                "machine":"null",
                "colo":"null",
                "sampling":"10"
            }

        }
    },

    apiIntlPig:{
        range: 60,
        retry: 3,
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-11:06',
                "endDate":'2014/10/20-12:06',
                "env":"prod",
                "pool":"v3apixointl",
                "machine":"null",
                "colo":"null",
                "sampling":"10"
            }

        }
    },

    comsDataPig:{
        range: 120,
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-11:06',
                "endDate":'2014/10/20-12:06',
                "env":"prod",
                "pool":"v3besxosvcscore",
                "machine":"null",
                "colo":"null",
                "sampling":"10"
            }

        }
    },

    comsDataAllPig:{
        range: 120,
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-11:06',
                "endDate":'2014/10/20-12:06',
                "env":"prod",
                "pool":"v3besxosvcscore",
                "machine":"null",
                "colo":"null",
                "sampling":"100"
            }

        }
    },

    comsDataPig:{
        range: 120,
        retry: 3,
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-11:06',
                "endDate":'2014/10/20-12:06',
                "env":"prod",
                "pool":"v3besxosvcscore",
                "machine":"null",
                "colo":"null",
                "sampling":"10"
            }

        }
    },

    comsDataAllPig:{
        range: 120,
        retry: 3,
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-11:06',
                "endDate":'2014/10/20-12:06',
                "env":"prod",
                "pool":"v3besxosvcscore",
                "machine":"null",
                "colo":"null",
                "sampling":"100"
            }

        }
    }
}

module.exports.cosmosTestPig = pigParams.cosmosTestPig;
module.exports.apiTestPig = pigParams.apiTestPig;
module.exports.apiIntlPig = pigParams.apiIntlPig;
module.exports.comsDataPig = pigParams.comsDataPig;
module.exports.comsDataAllPig = pigParams.comsDataAllPig;

