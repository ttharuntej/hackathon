/**
 * Created by xwang17 on 11/24/14.
 */
/**
 * Created by xwang17 on 11/19/14.
 */
var eventsdb=require('../../components/eventsdb');
var utils = require('../../components/pig/utils');
var config = require('../../config/environment');
exports.index = function(req, res) {
    return res.json(200, {'data': 'hello'});
};

exports.handbag = function(req, res) {

    var searchResult = {
        "count" :   10,
        "items" :   [
            {
                itemId:   "131326518221",
                title:    ["New Womens Leather Fashion Messenger Handbag Lady Shoulder Bag Totes Purse Hobo"],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs2.ebaystatic.com/pict/131326518221404000000001_1.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/SeEAAOSwF1dUUY8X/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/kX8AAOSwcu5UUY8D/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/SUkAAOSwY45UUY9M/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/Mh8AAOSw8cNUUY8g/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/sSgAAOSwEppUUY9L/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/SBQAAOSwU9xUUY9L/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/l0UAAOSwcu5UUY9K/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/OMwAAOSw8cNUUY9y/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/~WkAAOSwR0JUUY-M/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/SgYAAOSwY45UUY9T/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/0rcAAOSw6EhUUY9I/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/mAIAAOSwcu5UUY9T/$_12.JPG?set_id=880000500F"
                ]
            },
            {
                "itemId":
                    "251722263135"
                ,
                price:  "13.99",
                "title": [
                    "Women's Fashion Designer Handbag, MSRP $42.95 Faux Leather, Brand New with Tags!"
                ],
                "galleryURL": [
                    "http://thumbs4.ebaystatic.com/m/mpcPaRpventXHPrwtaDrteA/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NDgwWDY0MA==/z/ipgAAOxyuR5Tab2j/$_1.JPG?set_id=880000500F"
                ]

            },{
                itemId:
                    "381058566451"
                ,
                title: [
                    "NWT Vera Bradley Hipster in English Rose Free USA Shipping"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs4.ebaystatic.com/m/m5mfv3iMAP6ClcOCxop3UXg/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NzQwWDg3Mg==/z/eIcAAOSwAF5UZkNh/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzUyWDg4Nw==/z/MbEAAOSw0vBUZkNj/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "131352388209"
                ,
                title: [
                    "Michael Kors Small Black Leather Purse"
                ],
                galleryURL: [
                    "http://thumbs2.ebaystatic.com/m/mhchXKfeK9_exke5UvnE7TA/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/3KkAAOSwuMFUafQJ/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/4OoAAOSw~FNUafQU/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/c~IAAOSwcldUafQf/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/DxEAAOSwAF5UafQp/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/F5wAAOSw2XFUafQ0/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "251724953604"
                ,
                title: [
                    "NWT Vera Bradley Retired Sittin in a Tree Bowler Sachel Bag & Wristlet Set"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs1.ebaystatic.com/m/mLgYuArB0xT2sLybkBMdpHA/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NjQwWDY0MA==/z/F~0AAOSwkZ9UYjNc/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjQwWDY0MA==/z/G00AAOSwdpxUYjNj/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjQwWDY0MA==/z/~gAAAOSw~1FUYjNq/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjQwWDY0MA==/z/5MgAAOSw54xUYjNy/$_1.JPG?set_id=8800005007F"
                ]
            },{
                itemId:
                    "131352388405"
                ,
                title: [
                    " TORY BURCH THEA CROSSBODY CHAIN wildflower LEATHER BAG $375"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs2.ebaystatic.com/m/m1hzkBehpN3B2SWrqteC02w/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/ODkxWDk1MA==/z/0HAAAOSwY45UTl4x/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTIxWDkyMQ==/z/oksAAOSwDN1UTl2V/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTIxWDkyMQ==/z/DjgAAOSwEppUTl2r/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTIxWDkyMQ==/z/VKwAAOSw6EhUTl3K/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg5MjE=/z/zgsAAOSwajVUTl3o/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwN1g4NjA=/z/QegAAOSw8cNUTl4F/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAxWDkxNA==/z/jycAAOSwF1dUTl4b/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "381020757876"
                ,
                title: [
                    "New Women Satchel Bag fashion Tote Messenger leather purse shoulder handbag"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs1.ebaystatic.com/m/mfdG7Zb8pS_PyUFEOWV4XcQ/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/FycAAOSwxH1UKMKt/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/t-kAAOSwGvhUKMKV/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/5RcAAOSwQItUKMKb/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/8kIAAOSwq7JUKMKe/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/r0QAAOSwnDZUKMKh/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/POkAAOSwfcVUKMKk/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/m8YAAOSwd4tUKMKm/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/FA8AAOSw7NNUKMKp/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/FD0AAOSw7NNUKMKr/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/8esAAOSwq7JUKMKY/$_1.JPG?set_id=8800005007"
                ]
            },{
                itemId:
                    "291301064192"
                ,
                title: [
                    "Tory Burch Dena Foldover Messenger Bag Leather Crossbody/Clutch Green NICE"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs1.ebaystatic.com/m/mqGBlaJbKg4f3LVsyAlkeyw/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NzUwWDgwMA==/z/qfMAAOSwiCRUbMJx/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzI4WDgwMA==/z/538AAOSw2XFUbMKH/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDc4Mg==/z/q58AAOSwiCRUbMKB/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzIzWDgwMA==/z/NNIAAOSwD0lUbMKI/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MjM3WDgwMA==/z/NK0AAOSwD0lUbMKH/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDY4MQ==/z/66UAAOSwIBBUbMKQ/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTU4WDgwMA==/z/o28AAOSwnDxUbMK~/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjQxWDgwMA==/z/7hUAAOSw2XFUbMK4/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MzIwWDgwMA==/z/O9MAAOSwD0lUbMLC/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NDMzWDgwMA==/z/JwUAAOSwaNBUbMK~/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAxWDgwMA==/z/nhkAAOSwg3FUbMLF/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "181590147625"
                ,
                title: [
                    "Gorgeous Chanel Purse "
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs2.ebaystatic.com/m/mKiS8YX5w9zWaI6Q2F-Qcwg/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/guUAAOSwuMFUbMC~/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/r5MAAOSwofxUbMDE/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/csIAAOSwiCRUbMDI/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzUwWDEwMDA=/z/c14AAOSwiCRUbMDN/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/MtMAAOSwj0NUbMDQ/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/s0UAAOSw2XFUbMDq/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/tXAAAOSwofxUbMDv/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/p34AAOSwAL9UbMD2/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/3MMAAOSwaNBUce2H/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "171428910768"
                ,
                title: [
                    "New Ladies Womens Hobo PU Leather Handbag Shoulder Crossbody Messenger Bag Purse"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs1.ebaystatic.com/m/mq634KmzAy1tmT14IKB_-1Q/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NTg1WDU4NQ==/z/gSUAAOSwDk5T9Zel/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NTg1WDU4NQ==/z/L2sAAOSwRLZT9Zed/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NTg1WDU4NQ==/z/YQMAAOSwVFlT9Zef/$_1.JPG?set_id=8800005007"
                ]
            }
        ]
    };

    return res.json(200, {'searchResult': searchResult});
};