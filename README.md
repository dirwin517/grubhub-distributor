# grubhub-distributor
Because some of us dont like doing math

OPTIONAL_ORDER_NUMBER defaults to 0, if you want to checkout an older order put in the order number ie 1 for second to last

#Usage - users just have to exist in the notes sections of individual grubhub line items!
 
    grub username password "[\"user1\",\"user2\",\"user3\"]" OPTIONAL_ORDER_NUMBER

#Output

 [
   {
      "person": "shaun",
      "total": 21.06,
      "food": 16.48,
      "fees": 0.48,
      "taxes": 1.36,
      "tip": 2.75,
      "percent": 0.15865986329065176
   },
   {
      "person": "dan",
      "total": 19.78,
      "food": 15.48,
      "fees": 0.45,
      "taxes": 1.28,
      "tip": 2.58,
      "percent": 0.14903244440165592
   }
]

#Can handle partial user lists! (percent tells of total order including non-earmarked costs)

 [
   {
      "person": "shaun",
      "total": 21.06,
      "food": 16.48,
      "fees": 0.48,
      "taxes": 1.36,
      "tip": 2.75,
      "percent": 0.15865986329065176
   },
   {
      "person": "dan",
      "total": 19.78,
      "food": 15.48,
      "fees": 0.45,
      "taxes": 1.28,
      "tip": 2.58,
      "percent": 0.14903244440165592
   },
   {
      "person": "jarrod",
      "total": 21.06,
      "food": 16.48,
      "fees": 0.48,
      "taxes": 1.36,
      "tip": 2.75,
      "percent": 0.15865986329065176
   },
   {
      "person": "aaron",
      "total": 15.33,
      "food": 11.99,
      "fees": 0.35,
      "taxes": 0.99,
      "tip": 2,
      "percent": 0.11543275247906036
   },
   {
      "person": "kyle",
      "total": 0,
      "food": 0,
      "fees": 0,
      "taxes": 0,
      "tip": 0,
      "percent": 0
   },
   {
      "person": "varun",
      "total": 22.33,
      "food": 17.47,
      "fees": 0.51,
      "taxes": 1.44,
      "tip": 2.92,
      "percent": 0.16819100799075767
   },
   {
      "person": "connor",
      "total": 0,
      "food": 0,
      "fees": 0,
      "taxes": 0,
      "tip": 0,
      "percent": 0
   },
   {
      "person": "dave",
      "total": 19.15,
      "food": 14.98,
      "fees": 0.44,
      "taxes": 1.24,
      "tip": 2.5,
      "percent": 0.14421873495715798
   },
   {
      "person": "mikey",
      "total": 14.05,
      "food": 10.99,
      "fees": 0.32,
      "taxes": 0.91,
      "tip": 1.84,
      "percent": 0.1058053335900645
   }
]