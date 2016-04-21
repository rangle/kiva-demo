import { mapToLoan } from '../utils'
const loansJSON = [
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1047409,
        "name": "Ciise Group2",
        "gender": "female",
        "description": {
          "en": "Saado is a 56-year-old businesswoman. She is a widow with 10 children. She has a tea shop in Gabiley town, which she started in 1994, when civil war broke out in Somaliland. Surprisingly, when she was starting the tea shop, she had no money to start her small business. <br \/><br \/>To start the tea shop, she borrowed several kilograms of sugar from her relative. Fortunately, her small business grew day after day, until she used the money to pay school fees and to feed her family. <br \/><br \/>Now, her business is a medium-sized enterprise and she requested from Kaaba Micro-finance a loan for $1800 to expand her business. She sells Somali tea and local foods. <br \/><br \/>Saado is the one who sitting in front of the group photo and raising her hand. She is the leader of a group known as Ciise Group 2. The group consists of 10 members which 6 of them are female while the remaining 4 are male and this the second loan cycle. Each and every client has an existing business and also everyone will get his\/her loan separately and they will pay monthly repayments."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "8000.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "5425.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 25,
          "name": "Cafe"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to expand her tea shop.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 22692,
            "name": "Gabiley",
            "geocode": {
              "id": 336004,
              "address": "Somalia",
              "longitude": 48,
              "latitude": 6
            }
          },
          "country": {
            "isoCode": "SO",
            "name": "Somalia",
            "region": "Africa",
            "geocode": {
              "id": 336004,
              "address": "Somalia",
              "longitude": 48,
              "latitude": 6
            }
          },
          "geocode": {
            "id": 336004,
            "address": "Somalia",
            "longitude": 48,
            "latitude": 6
          }
        },
        "borrowerCount": 10,
        "lenderRepaymentTerm": 14,
        "isMatchable": true,
        "matcherName": "The Richard Brindle Fund",
        "fundraisingDate": "2016-04-04T20:10:07Z",
        "disbursalDate": "2016-06-29T07:00:00Z",
        "plannedExpirationDate": "2016-05-04T20:10:07Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "to expand her tea shop.",
        "partnerId": 325,
        "partnerName": "Kaaba Microfinance Institution",
        "reviewer": {
          "name": "Tim Gibson",
          "imageId": 1632475
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It helps borrowers in Somalia grow their businesses.",
        "endorserId": 2221696
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 1664344,
            "fileSize": 269919,
            "width": 900,
            "height": 600,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1047409\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1047409\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1047409\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1047409"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1047409\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1043889,
        "name": "Tubaganze Sub Group A",
        "gender": "female",
        "description": {
          "en": "Therese is a group leader of Tubaganze Group which means \u201cto defeat\u201d in English. She is 46 years old and married with two children, ages 18 and 20 years. They both go to school.  <br \/><br \/>Therese sells vegetables and has been in this business for six years. She wishes to expand herr business for a better future.. With the loan, Therese would like to buy more oranges, cabbage and mangoes to sell. The profits from the business will be used to improve her welfare."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "7150.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "6325.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 169,
          "name": "Fruits & Vegetables"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to buy more oranges, cabbage and mangoes to sell.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "country": {
            "isoCode": "RW",
            "name": "Rwanda",
            "region": "Africa",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "geocode": {
            "id": 335989,
            "address": "Rwanda",
            "longitude": 30,
            "latitude": -2
          }
        },
        "borrowerCount": 17,
        "lenderRepaymentTerm": 6,
        "isMatchable": false,
        "fundraisingDate": "2016-03-28T22:00:03Z",
        "disbursalDate": "2016-02-29T08:00:00Z",
        "plannedExpirationDate": "2016-04-27T22:00:03Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy more Oranges, cabbages and Mangoes for sell.",
        "partnerId": 161,
        "partnerName": "Urwego Opportunity Bank, a partner of Opportunity International and HOPE International",
        "reviewer": {
          "name": "Mike Kataoka",
          "imageId": 371733
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2132874,
            "fileSize": 3779240,
            "width": 4608,
            "height": 3456,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043889\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043889\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043889\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043889"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043889\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1044096,
        "name": "Duteraninkunga Cb Group",
        "gender": "female",
        "description": {
          "en": "DUTERANINKUNGA  led by Marguerithe  who is 56 years old. The group name means \u201csupport each other\u201d in English. She is married with 7 children aged between 18 and 33 years. She owns a shop and has been doing this business for the past 15 years. The group members sell different items and they have same objective of good future. <br \/><br \/>With the loan, she would like to buy more sugar, milk powder and cooking oil for selling. The profits from the business will be used to build a house."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "8450.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "5875.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 57,
          "name": "General Store"
        },
        "sector": {
          "id": 7,
          "name": "Retail"
        },
        "distributionModel": "field_partner",
        "use": "to buy more sugar, milk powder and cooking oil for selling.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "country": {
            "isoCode": "RW",
            "name": "Rwanda",
            "region": "Africa",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "geocode": {
            "id": 335989,
            "address": "Rwanda",
            "longitude": 30,
            "latitude": -2
          }
        },
        "borrowerCount": 29,
        "lenderRepaymentTerm": 5,
        "isMatchable": false,
        "fundraisingDate": "2016-03-29T15:40:02Z",
        "disbursalDate": "2016-03-02T08:00:00Z",
        "plannedExpirationDate": "2016-04-28T15:40:02Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy more sugar, milk powder and cooking oil for sell.",
        "partnerId": 161,
        "partnerName": "Urwego Opportunity Bank, a partner of Opportunity International and HOPE International",
        "reviewer": {
          "name": "Tim Gibson",
          "imageId": 1632475
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2133870,
            "fileSize": 3973157,
            "width": 4608,
            "height": 3456,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044096\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044096\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044096\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044096"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044096\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1040602,
        "name": "Junta De Saneamiento Km 14 Group",
        "gender": "male",
        "description": {
          "es": "La Junta de Saneamiento Km 14 se form\u00f3 en el 2007 de un grupo de vecinos de Ciudad del Este, surgi\u00f3 de la necesidad  de muchas viviendas que en ese momento no contaban con agua potable.\nLa Junta de Saneamiento Km 14  inici\u00f3 formando una comisi\u00f3n vecinal que contaban con 30 miembros, hoy d\u00eda cuentan con 593 viviendas beneficiadas con agua potable, d\u00e1ndoles suministro a este tan importante y vital l\u00edquido.\nLa junta la integra el Sr. Anibal quienes es el presidente, es una persona que con su puesto esta ayudando a llevar de una manera la junta, lo que permite que pueda seguir creciendo.\nPiden este pr\u00e9stamo para la compra de medidores para consumo de agua, de manera a poder seguir dando un buen servicio a sus clientes y seguir creciendo y dando acceso a este servicio tan elemental.",
          "en": "The Saneamiento Km 14 communal bank formed in 2007, a group of neighbors from Ciudad del Este. The group formed out of necessity as many homes at that time did not have potable water. The communal bank began, forming a neighborhood commission of 30 members. Today there are 593 homes that have the benefit of potable water, giving them access to this very important and vital liquid.<br \/><br \/>The communal bank president is Sr. Anibal, He takes the necessary steps to grow the bank and become successful. They are very capable leaders of the Saneamiento Km14 group. They ask for a loan to buy water meters in order to consume water, thus being able to continue providing good service to their customers and giving access to this very basic service."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "7450.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "7125.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 18,
          "name": "Water Distribution"
        },
        "sector": {
          "id": 4,
          "name": "Services"
        },
        "distributionModel": "field_partner",
        "use": "to buy water meters.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 869,
            "name": "Ciudad del Este",
            "geocode": {
              "id": 335280,
              "address": "Ciudad del Este, Paraguay",
              "longitude": -54.6166667,
              "latitude": -25.5166667
            }
          },
          "country": {
            "isoCode": "PY",
            "name": "Paraguay",
            "region": "South America",
            "geocode": {
              "id": 335280,
              "address": "Ciudad del Este, Paraguay",
              "longitude": -54.6166667,
              "latitude": -25.5166667
            }
          },
          "geocode": {
            "id": 335280,
            "address": "Ciudad del Este, Paraguay",
            "longitude": -54.6166667,
            "latitude": -25.5166667
          }
        },
        "borrowerCount": 2,
        "lenderRepaymentTerm": 27,
        "isMatchable": false,
        "fundraisingDate": "2016-03-24T23:50:02Z",
        "disbursalDate": "2016-02-26T08:00:00Z",
        "plannedExpirationDate": "2016-04-23T23:50:01Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "to buy water meters.",
        "partnerId": 58,
        "partnerName": "Fundaci\u00f3n Paraguaya",
        "reviewer": {
          "name": "Cindy Kendall",
          "imageId": 797722
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It finances communities to dig wells, build pipelines and install water meters.",
        "endorserId": 413337
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2128960,
            "fileSize": 73692,
            "width": 634,
            "height": 820,
            "aspectRatio": "portrait"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040602\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040602\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040602\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040602"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040602\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1041155,
        "name": "Federation Des Associations De Femmes De Maissade",
        "gender": "female",
        "description": {
          "en": "Marilia created a rural association in 1998 in the centre department of Haiti. Her network grew up quickly and reached 3,000 employees, which promoted her as the entrepreneur of year for a national contest. <br \/><br \/>Marilia's association is specialized in food processing. She sells peanut butter, jelly and jam, among other typical products, in all large supermarkets in Haiti. Thanks to her first loan, she generated profit and she offered breakfast for students in 51 rural schools. <br \/><br \/>This year, Marilia is facing a new problem. The drought that hit Haiti diminished her peanut supplies. She must have more funds to store peanuts in the winter harvest to be able to process them for supermarkets. That is the main reason for which Marilia is looking for a new loan. <br \/><br \/>Through this loan period, Marilia will create at least 10 jobs for women who will handpick quality peanut and\/or work in the processing. <br \/><br \/>Marilia (coordinator) is in front in the picture. Among those pictured from left to right are Getha (assistant coordinator), Feline (finance officer), Marinette (adviser), Ernante (secretary), Amania (member) and Mirlande (member)."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "9775.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "4425.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 67,
          "name": "Food Production\/Sales"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to buy peanuts in bulk to produce peanut butter.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 26325,
            "name": "Maissade",
            "geocode": {
              "id": 335912,
              "address": "Haiti",
              "longitude": -72.4166667,
              "latitude": 19
            }
          },
          "country": {
            "isoCode": "HT",
            "name": "Haiti",
            "region": "North America",
            "geocode": {
              "id": 335912,
              "address": "Haiti",
              "longitude": -72.4166667,
              "latitude": 19
            }
          },
          "geocode": {
            "id": 335912,
            "address": "Haiti",
            "longitude": -72.4166667,
            "latitude": 19
          }
        },
        "borrowerCount": 1,
        "lenderRepaymentTerm": 20,
        "isMatchable": false,
        "fundraisingDate": "2016-04-01T14:20:02Z",
        "disbursalDate": "2016-04-29T07:00:00Z",
        "plannedExpirationDate": "2016-05-01T14:20:02Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy peanuts in bulk to produce peanut butter  ",
        "partnerId": 380,
        "partnerName": "Fonkoze - Zaf\u00e8n",
        "reviewer": {
          "name": "Michelle Archer",
          "imageId": 162079
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2129808,
            "fileSize": 178604,
            "width": 1296,
            "height": 972,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041155\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041155\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041155\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041155"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041155\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1043815,
        "name": "Tuzamurane Sub Group A",
        "gender": "male",
        "description": {
          "en": "Christine is a group leader of Tuzamurane Sub Group, which means \u201cLet us support each other\u201d in English. They sell different products, and they wish to expand their business for changing their better future. <br \/><br \/>She owns a bar and has been doing this business for the past five years. With the loan, she would like to buy more beer to sell. The profits from the business will be used to increase her savings."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "5150.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "4400.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 94,
          "name": "Pub"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to buy more beer to sell.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "country": {
            "isoCode": "RW",
            "name": "Rwanda",
            "region": "Africa",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "geocode": {
            "id": 335989,
            "address": "Rwanda",
            "longitude": 30,
            "latitude": -2
          }
        },
        "borrowerCount": 13,
        "lenderRepaymentTerm": 6,
        "isMatchable": false,
        "fundraisingDate": "2016-03-28T18:30:02Z",
        "disbursalDate": "2016-02-24T08:00:00Z",
        "plannedExpirationDate": "2016-04-27T18:30:02Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy more beer for sell.",
        "partnerId": 161,
        "partnerName": "Urwego Opportunity Bank, a partner of Opportunity International and HOPE International",
        "reviewer": {
          "name": "Morena Calvo",
          "imageId": 1832928
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2131829,
            "fileSize": 4090823,
            "width": 4608,
            "height": 3456,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043815\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043815\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043815\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043815"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043815\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1044098,
        "name": "Duhuzurugwiro Cb Group",
        "gender": "male",
        "description": {
          "en": "DUHUZURUGWIRO a group led by Jeanne d'arc, who is 47 years old. The group name means \u201cLet US ENJOY\u201d in English. She is married with 2 children aged 15 and 22 years. The younger one goes to school. She owns a shop and has been doing this business for the past 7 years. The group members sell different items and they have same objective of better future. <br \/><br \/>With the loan, she would like to buy more beans, sugar and salt for selling. The profits from the business will be used to increase her savings."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "7875.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "4300.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 57,
          "name": "General Store"
        },
        "sector": {
          "id": 7,
          "name": "Retail"
        },
        "distributionModel": "field_partner",
        "use": "to buy more beans, sugar and salt for selling.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "country": {
            "isoCode": "RW",
            "name": "Rwanda",
            "region": "Africa",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "geocode": {
            "id": 335989,
            "address": "Rwanda",
            "longitude": 30,
            "latitude": -2
          }
        },
        "borrowerCount": 16,
        "lenderRepaymentTerm": 5,
        "isMatchable": false,
        "fundraisingDate": "2016-03-29T18:30:05Z",
        "disbursalDate": "2016-03-03T08:00:00Z",
        "plannedExpirationDate": "2016-04-28T18:30:05Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy more beans, sugar and salt for sell.",
        "partnerId": 161,
        "partnerName": "Urwego Opportunity Bank, a partner of Opportunity International and HOPE International",
        "reviewer": {
          "name": "Tim Gibson",
          "imageId": 1632475
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2133723,
            "fileSize": 2072843,
            "width": 2425,
            "height": 2494,
            "aspectRatio": "portrait"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044098\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044098\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044098\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044098"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044098\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1044414,
        "name": "Tuongozane Group",
        "gender": "female",
        "description": {
          "fr": "Antoinnette est une commer\u00e7ante, membre de groupe de cr\u00e9dits \u00abTuongozane\u00bb, cliente de l\u2019IMF Hekima, veuve, \u00e2g\u00e9e de 56 ans, m\u00e8re des 8 enfants dont 4 scolaris\u00e9s et 4 sont d\u00e9j\u00e0 grand. Elle est vendeuse des produits vivriers au domicile dans une avenue de la ville depuis 3 ans. Elle va s\u2019approvisionner en 170 kg de pommes de terre.  Elle commen\u00e7a son business avec le capital re\u00e7u de son mari lors de son vivant. Elle souhaite scolariser, v\u00eatir et nourrir ses enfants. Au final, elle remercie Hekima pour le soutien apport\u00e9 aux entrepreneurs non bancables.",
          "en": "Antoinnette is a retailer, a member of the Tuongozane credit group, and a client of the microfinance institution Hekima.  She is a 56-year-old widow and the mother of eight children, four of whom are in school while the other four are adults already.\r\n\r\nFor the past three years, Antoinnette has been selling food products from her home located along one of the city's main streets.  She is going to use her loan to buy 170 kilos of potatoes.  She started her business with some capital received from her husband when he was still alive.\r\n\r\nAntoinnette wants to be able to feed and clothe her children, and continue to pay their school fees.  She thanks Hekima for the support they provide to entrepreneurs who are excluded from the traditional banking system."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "6200.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "2725.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 185,
          "name": "Food Stall"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to buy 170 kilos of potatoes.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 8612,
            "name": "Goma, North Kivu province",
            "geocode": {
              "id": 335137,
              "address": "Kinshasa, The Democratic Republic of the Congo",
              "longitude": 25,
              "latitude": 0
            }
          },
          "country": {
            "isoCode": "CD",
            "name": "Congo (Dem. Rep.)",
            "region": "Africa",
            "geocode": {
              "id": 335137,
              "address": "Kinshasa, The Democratic Republic of the Congo",
              "longitude": 25,
              "latitude": 0
            }
          },
          "geocode": {
            "id": 335137,
            "address": "Kinshasa, The Democratic Republic of the Congo",
            "longitude": 25,
            "latitude": 0
          }
        },
        "borrowerCount": 23,
        "lenderRepaymentTerm": 6,
        "isMatchable": false,
        "fundraisingDate": "2016-04-04T02:40:03Z",
        "disbursalDate": "2016-03-22T07:00:00Z",
        "plannedExpirationDate": "2016-05-04T02:40:03Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "S\u2019approvisionner en 170 kg de pommes de terre.",
        "partnerId": 160,
        "partnerName": "Hekima, a partner of World Relief",
        "reviewer": {
          "name": "Sophie Narayan",
          "imageId": 1284174
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It serves entrepreneurs in conflict-affected areas with few opportunities.",
        "endorserId": 2110626
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2134527,
            "fileSize": 38443,
            "width": 372,
            "height": 289,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044414\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044414\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044414\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044414"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1044414\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1045116,
        "name": "Mujeres Kaqchiqueles Paley Group",
        "gender": "female",
        "description": {
          "en": "In a rural community outside of Tecp\u00e1n Guatemala is the group \u201cMujeres Kaqchiqueles Paley\u201d. This group is comprised of eleven women, who are currently in their second loan cycle. <br \/><br \/>One member of the group is Estela. She has a business weaving huipiles (traditional blouses) with intricate designs typical of the region. With her loan, Estela will buy thirty pounds of thread to continue to expand her production. With this new loan she will also purchase six pigs. <br \/><br \/>When Estela was last interviewed, she had just purchased two pigs.  Thanks to her increase in earnings from her primary business, she is now able to invest more money in her business of raising animals, and will more than double her number of pigs. <br \/><br \/>She hopes that with continued success, she will be able to improve the well-being of her two children, ages four years and five months. She hopes to provide them with a future in which they will have opportunities to become professionals. <br \/><br \/>Thank you, Kiva.  Your support and confidence in Estela has given her the opportunity to envision a better future for herself and her family, and is giving her a sustainable way to effect change in her life, and raise her family out of poverty."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "5475.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "3925.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 145,
          "name": "Weaving"
        },
        "sector": {
          "id": 9,
          "name": "Arts"
        },
        "distributionModel": "field_partner",
        "use": "to buy thirty pounds of thread to continue to expand her weaving production.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 930,
            "name": "Tecp\u00e1n, Chimaltenango",
            "geocode": {
              "id": 335504,
              "address": "Guatemala, Guatemala",
              "longitude": -90.25,
              "latitude": 15.5
            }
          },
          "country": {
            "isoCode": "GT",
            "name": "Guatemala",
            "region": "Central America",
            "geocode": {
              "id": 335504,
              "address": "Guatemala, Guatemala",
              "longitude": -90.25,
              "latitude": 15.5
            }
          },
          "geocode": {
            "id": 335504,
            "address": "Guatemala, Guatemala",
            "longitude": -90.25,
            "latitude": 15.5
          }
        },
        "borrowerCount": 11,
        "lenderRepaymentTerm": 10,
        "isMatchable": true,
        "matcherName": "Reid Hoffman the man who wrote The Startup of You",
        "fundraisingDate": "2016-03-30T21:20:03Z",
        "disbursalDate": "2016-03-11T08:00:00Z",
        "plannedExpirationDate": "2016-04-29T21:20:03Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy thirty pounds of thread to continue to amplify her weaving production",
        "partnerId": 55,
        "partnerName": "Friendship Bridge",
        "reviewer": {
          "name": "Maureen Wharton"
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "Clients receive in-depth trainings on business, health, over-indebtedness, and self-esteem.",
        "endorserId": 1410052
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2131051,
            "fileSize": 121706,
            "width": 1067,
            "height": 700,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1045116\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1045116\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1045116\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1045116"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1045116\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1046032,
        "name": "Niven",
        "gender": "female",
        "description": {
          "en": "Niven, 35, runs a traditional women's and children's clothes shop in Shuafat, a neighbourhood in northeastern Jerusalem, where she lives with her husband (a truck driver) and their three children, aged 6 to 12.\r\n\r\nFollowing a serious illness, from which she has thankfully fully recovered, she is now seeking to restore her shop to health. In her absence, sales fell, which in turn reduced capacity to buy stock in adequate variety; revenues dropped by more than a half. Her shop had been very successful, specializing in high quality textiles and styles locally sourced (from Nablus).\r\n\r\nNiven is a graduate of a small business course run by MATI, a business development NGO that works with JIMF (the Jerusalem Interest-free Microfinance Fund, the Kiva partner seeking this support for Niven). Niven is confident that with new stock she will be able to recapture her client\u00e8le and restore her household's fortune.\r\n\r\nShe seeks to borrow 15,000 NIS to buy high quality textiles and new fashions, which will suit young and old, and also to open a perfumery counter. A timely loan can help to prevent impoverishment for Niven and her family."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "3925.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "3475.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 9,
          "name": "Clothing Sales"
        },
        "sector": {
          "id": 5,
          "name": "Clothing"
        },
        "distributionModel": "field_partner",
        "use": "to buy stocks of high quality textiles and new fashions.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 19558,
            "name": "shuafat, Jerusalem",
            "geocode": {
              "id": 335921,
              "address": "Israel",
              "longitude": 34.75,
              "latitude": 31.5
            }
          },
          "country": {
            "isoCode": "IL",
            "name": "Israel",
            "region": "Middle East",
            "geocode": {
              "id": 335921,
              "address": "Israel",
              "longitude": 34.75,
              "latitude": 31.5
            }
          },
          "geocode": {
            "id": 335921,
            "address": "Israel",
            "longitude": 34.75,
            "latitude": 31.5
          }
        },
        "borrowerCount": 1,
        "lenderRepaymentTerm": 33,
        "isMatchable": false,
        "fundraisingDate": "2016-04-01T05:30:13Z",
        "disbursalDate": "2016-03-25T07:00:00Z",
        "plannedExpirationDate": "2016-05-01T05:30:13Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "to buy stocks of high quality textiles and new fashions",
        "partnerId": 285,
        "partnerName": "Jerusalem Interest-Free Microfinance Fund Limited",
        "reviewer": {
          "name": "Victor Au",
          "imageId": 1058394
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It provides individuals in marginalized communities with no-interest loans.",
        "endorserId": 1288792
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2136989,
            "fileSize": 237326,
            "width": 1266,
            "height": 1280,
            "aspectRatio": "portrait"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1046032\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1046032\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1046032\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1046032"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1046032\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1038976,
        "name": "Pascal",
        "gender": "male",
        "description": {
          "en": "Rwanda, despite being a very small country, is Africa's third largest grower of potatoes. The fertile soil in the region near the Volcanoes National Park is a perfect place to grow potatoes.  Yet despite this ripe environment, Rwanda was importing mass produced potato chips.  That was until Pascal was able to turn this market opportunity into a real business.\n\nIn 2014, Pascal founded Hollanda Fair Foods, Rwanda's first large scale potato chip producer. With a factory in the Northern Province and relationships with potato farmers and cooperatives, Pascal launched the first \"Made in Rwanda\" potato chips, Winnaz. In less than 9 months from starting production, Pascal's chips in their bright red, biodegradable packaging can be found in most major markets in Kigali.  However, in order to reach his capacity, Pascal needs to sell his chips nationally. And, in order to do so, he needs financing to purchase a delivery van.\n\nPascal has been working with AEC for nearly 2 years. He is a determined entrepreneur with a great mix of strategic thinking and grit.\n\nWe know that Pascal will go far, and this van will enable him to grow faster and more efficiently. Please consider supporting him.\n\nThanks so much for your interest."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "9250.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "5825.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 67,
          "name": "Food Production\/Sales"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to purchase a van to deliver his potato chip products to markets around Rwanda.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 16865,
            "name": "Musanze",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "country": {
            "isoCode": "RW",
            "name": "Rwanda",
            "region": "Africa",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "geocode": {
            "id": 335989,
            "address": "Rwanda",
            "longitude": 30,
            "latitude": -2
          }
        },
        "borrowerCount": 1,
        "lenderRepaymentTerm": 20,
        "isMatchable": false,
        "fundraisingDate": "2016-03-20T16:10:03Z",
        "disbursalDate": "2016-03-15T07:00:00Z",
        "plannedExpirationDate": "2016-04-19T16:10:03Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "to purchase a van to deliver his potato chip products to markets around Rwanda.",
        "partnerId": 319,
        "partnerName": "African Entrepreneur Collective (AEC)",
        "reviewer": {
          "name": "Tim Gibson",
          "imageId": 1632475
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It offers a full package of support for Rwanda's promising entrepreneurs.",
        "endorserId": 2110626
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2126824,
            "fileSize": 4000975,
            "width": 2000,
            "height": 3000,
            "aspectRatio": "portrait"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1038976\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1038976\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1038976\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1038976"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1038976\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1041940,
        "name": "Charles",
        "gender": "male",
        "description": {
          "en": "Charles is a long-time pet lover and had dedicated his time to working in a rescue center. During his time at at the rescue center, Charles received a lot of positive feedback for a business model that would cater to pet lovers such as himself. He is just breaking out into his new business venture as an online retailer for pet supplies and products and has had an exciting time learning about the trade and watching his first sales come in.<br \/><br \/>Since Charles is just starting his new business this year, he has many of the problems most start-ups have, such as marketing and having enough funding for business operations. That is why, with a small loan, Charles can receive the funding he needs to keep the business in operation during its early stages. <br \/><br \/>His vision for the future is to see the business grow and become self-sustaining."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "5425.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "4700.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 88,
          "name": "Retail"
        },
        "sector": {
          "id": 7,
          "name": "Retail"
        },
        "distributionModel": "field_partner",
        "use": "to purchase inventory and do marketing.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 16511,
            "name": "Minnesota",
            "geocode": {
              "id": 336032,
              "address": "United States",
              "longitude": -98.5,
              "latitude": 39.76
            }
          },
          "country": {
            "isoCode": "US",
            "name": "United States",
            "region": "North America",
            "geocode": {
              "id": 336032,
              "address": "United States",
              "longitude": -98.5,
              "latitude": 39.76
            }
          },
          "geocode": {
            "id": 336032,
            "address": "United States",
            "longitude": -98.5,
            "latitude": 39.76
          }
        },
        "borrowerCount": 1,
        "lenderRepaymentTerm": 32,
        "isMatchable": false,
        "fundraisingDate": "2016-03-26T12:50:03Z",
        "disbursalDate": "2016-02-29T08:00:00Z",
        "plannedExpirationDate": "2016-04-25T12:50:03Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To purchase inventory and for marketing",
        "partnerId": 131,
        "partnerName": "Accion East",
        "reviewer": {
          "name": "Kathleen Melymuka",
          "imageId": 985313
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It gives people with little or no credit history a chance to build one.",
        "endorserId": 1177340
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2119967,
            "fileSize": 485892,
            "width": 1632,
            "height": 1224,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041940\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041940\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041940\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041940"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1041940\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1043563,
        "name": "Nueva Esperanza Group",
        "gender": "female",
        "description": {
          "es": "Cenobia es una mujer de 38 a\u00f1os de edad, casada, tiene 1 bebe de 4 meses y 2 hijos de 5 y 14 a\u00f1os, y su negocio es la venta de refrescos y cr\u00eda de cerdos.\nElla lucha a diario contra la calamidad, la indiferencia, y en medio de un alarido de desesperanza sabe rezar por el sufrido, sin mirar atr\u00e1s. Su negocio lo realiza en la localidad \u2018Batallas\u2019 \u00e1rea rural cercana al lago sagrado Titicaca, los pobladores mayormente se dedica a la agricultura, pesca y ganader\u00eda.\nCenobia es de piel morena rojiza denominada por la historia como \u2018raza de bronce\u2019, tiene las ojeras profundas, la mirada insondable, cada palabra es un poema de gracia y de armon\u00eda porque su lengua materna es el Aymar\u00e1 que se habla en el lugar y habla espa\u00f1ol para el comercio con for\u00e1neos (al centro, viste chompa amarilla y mandil rosa). Su vida la comparte con su esposo que se dedica a la ganader\u00eda y con sus hijos que estudian en la escuela y trabajan en la cr\u00eda de ganado, viven en una casa propia construida de adobe y solo tienen energ\u00eda el\u00e9ctrica porque no existe otro servicio en el lugar. El deseo de mejorar su hogar la llev\u00f3 a liderar la banca de emprendimiento, los negocios de los socios son; agricultura, ganader\u00eda, cr\u00eda de ovejas, tejido de mantas de alpaca, producci\u00f3n de queso, producci\u00f3n de chu\u00f1o y venta de comida. Su negocio es la venta de refrescos como \u2018quinua con manzana\u2019 que es el m\u00e1s popular del lugar y lo prepara diariamente, paralelamente a eso, se dedica a la cr\u00eda de cerdos, cuenta con un corral en su casa y tambi\u00e9n otros animales. Recientemente construy\u00f3 2 cuartos de ladrillo en su casa con el fin de habitarlos, estos se encuentran en obra gruesa y falta terminarlos, \u201cnecesitamos realizar la obra fina de 2 cuartos para habitarlos\u2026\u201d comenta. Su negocio tiene \u00e9xito porque la quinua es tradicional del lugar. La ventaja de sus actividades es que puede darse tiempo para ambas, la desventaja es la falta de capital para terminar su construcci\u00f3n y mejorar su calidad de vida. Su sue\u00f1o es terminar de construir su casa, ella desea comprar material de construcci\u00f3n como estuco, madera y otros para terminar de construir su casa. Esta es la 1 secuencia de pr\u00e9stamos con la instituci\u00f3n en 5 a\u00f1os que realiza esta actividad.\nEs por esos motivos que Cenobia solicita un pr\u00e9stamo para comprar material de construcci\u00f3n para terminar de construir 2 cuartos para habitarlos. \n",
          "en": "Cenobia is a woman, 38 years old, married, who has one 4-month-old baby and 2 children ages 5 and 14. Her business is selling soft drinks and raising pigs. <br \/><br \/>She struggles daily against disaster, indifference, and in the midst of a cry of desperation, she knows to pray for the suffering, without looking back. Her business is located in Batallas, a rural area near the sacred Lake Titicaca. The inhabitants primarily work at agriculture, fishing and raising animals. <br \/><br \/>Cenobia has reddish-brown skin, called by history the \"Bronze Race\", she has bags under her eyes, an impenetrable gaze, and each word is a poem of grace and harmony because her native language is Aymar\u00e1 which she speaks in the place and she speaks Spanish for business with strangers (she is in the center wearing a yellow sweater and pink apron). She shares her life with her husband who works raising animals and with her children who go to school and work raising animals. They live in their own house built of adobe and only have electricity because there aren't any other utilities in the area. <br \/><br \/>The desire to improve her home brought her to lead an entrepreneurial bank, the businesses of the members are: agriculture, raising animals, raising sheep, weaving alpaca blankets, making cheese, making freeze-dried potatoes, and selling food. Her business is selling soft drinks such as \"quinoa with apple\" which is the most popular in that place and she makes it daily, along with this, she works raising pigs, she has a corral at her house and also other animals. Recently, she built 2 brick rooms on her house with the end of living in them. They are at a rough stage and need to be completed. \"We need to do the fine work on 2 rooms to live in them...\" she says. Her business is successful because quinoa is traditional in that place. The advantage of her businesses are that she can give time to both of them, the disadvantage is the lack of capital to finish construction and improve her quality of life. Her dream is to finish building her house, she wants to purchase construction materials such as stucco, wood, and more to finish building her house. This is her first loan cycle with the institution in the 5 years that she has been doing this work. <br \/><br \/>For these reasons, Cenobia asks for a loan to purchase construction material to finish building 2 rooms to live in."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "4325.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "3200.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 90,
          "name": "Soft Drinks"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to purchase construction materials to finish building 2 rooms to live in.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 622,
            "name": "El Alto",
            "geocode": {
              "id": 335193,
              "address": "El Alto, Bolivia",
              "longitude": -68.1833333,
              "latitude": -16.4833333
            }
          },
          "country": {
            "isoCode": "BO",
            "name": "Bolivia",
            "region": "South America",
            "geocode": {
              "id": 335193,
              "address": "El Alto, Bolivia",
              "longitude": -68.1833333,
              "latitude": -16.4833333
            }
          },
          "geocode": {
            "id": 335193,
            "address": "El Alto, Bolivia",
            "longitude": -68.1833333,
            "latitude": -16.4833333
          }
        },
        "borrowerCount": 9,
        "lenderRepaymentTerm": 9,
        "isMatchable": true,
        "matcherName": "Reid Hoffman the man who wrote The Startup of You",
        "fundraisingDate": "2016-03-30T13:30:01Z",
        "disbursalDate": "2016-03-11T08:00:00Z",
        "plannedExpirationDate": "2016-04-29T13:30:01Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "para comprar material de construcci\u00f3n para terminar de construir 2 cuartos para habitarlos. ",
        "partnerId": 110,
        "partnerName": "Emprender",
        "reviewer": {
          "name": "Wendy Harris"
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It enables students to enroll in technical or undergraduate programs.",
        "endorserId": 413337
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2133318,
            "fileSize": 499431,
            "width": 1378,
            "height": 1165,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043563\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043563\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043563\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043563"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043563\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1043863,
        "name": "Twitezimbere Group",
        "gender": "female",
        "description": {
          "en": "Venantie is a group leader who is 55 years old. She is married with two children aged 12 and 15 years, they both attend school. The group is called TWITEZIMBERE which means \u201cSUPPORT EACH OTHER\u201d in English. They sell different products and wish to expand their business for a better future. She sells foodstuffs and has been running a business for the past five years. With the loan, she would like to buy more beans, bananas and maize for resale. The profits from the business will be used as savings and to buy food for home consumption."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "6425.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "3575.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 185,
          "name": "Food Stall"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to buy more beans, bananas and maize for resale.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "country": {
            "isoCode": "RW",
            "name": "Rwanda",
            "region": "Africa",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "geocode": {
            "id": 335989,
            "address": "Rwanda",
            "longitude": 30,
            "latitude": -2
          }
        },
        "borrowerCount": 32,
        "lenderRepaymentTerm": 6,
        "isMatchable": false,
        "fundraisingDate": "2016-03-28T21:30:07Z",
        "disbursalDate": "2016-03-09T08:00:00Z",
        "plannedExpirationDate": "2016-04-27T21:30:07Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy more beans, bananas and maize for sell.",
        "partnerId": 161,
        "partnerName": "Urwego Opportunity Bank, a partner of Opportunity International and HOPE International",
        "reviewer": {
          "name": "Courtenay Selden"
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2133102,
            "fileSize": 3426032,
            "width": 4607,
            "height": 2241,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043863\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043863\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043863\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043863"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043863\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1043881,
        "name": "Abizeranye Cb Group",
        "gender": "female",
        "description": {
          "en": "Athanasie is a group leader of Abizeranye Group, which means \u201ctrusted people\u201d in English. She is 41 years old and married with three children, 7 to 14 and all in school.  <br \/><br \/>Athanasie sells vegetables and has been in this business for nine years. She wishes to expand her business for a better future. With the loan, she would like to buy more cabbage and carrots for sell. The profits from the business will be used to improve her welfare."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "8125.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "3725.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 169,
          "name": "Fruits & Vegetables"
        },
        "sector": {
          "id": 12,
          "name": "Food"
        },
        "distributionModel": "field_partner",
        "use": "to buy more cabbage and carrots for sell.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "country": {
            "isoCode": "RW",
            "name": "Rwanda",
            "region": "Africa",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "geocode": {
            "id": 335989,
            "address": "Rwanda",
            "longitude": 30,
            "latitude": -2
          }
        },
        "borrowerCount": 27,
        "lenderRepaymentTerm": 6,
        "isMatchable": false,
        "fundraisingDate": "2016-03-28T21:50:03Z",
        "disbursalDate": "2016-02-29T08:00:00Z",
        "plannedExpirationDate": "2016-04-27T21:50:03Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy more cabbages and carrots for sell.",
        "partnerId": 161,
        "partnerName": "Urwego Opportunity Bank, a partner of Opportunity International and HOPE International",
        "reviewer": {
          "name": "Mike Kataoka",
          "imageId": 371733
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2132825,
            "fileSize": 3923953,
            "width": 3738,
            "height": 2856,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043881\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043881\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043881\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043881"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1043881\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1040264,
        "name": "Mahmoud",
        "gender": "male",
        "description": {
          "en": "Mahmoud, 33 years old, lives in Gaza. He is married and has two daughters. His wife doesn\u2019t work, so he works two jobs to pay his basic needs. He has been in the military since 2005 and has a small grocery for selling foodstuffs. His ambition is to offer a better education and a comfortable home for his family.<br \/><br \/>Mahmoud requested a loan to rebuild his home and get rid of all the war devastation. After getting the loan, he will reconstruct the kitchen and the bathroom. He will buy also buy bricks to cover the floor and do plastering and painting work. <br \/> <br \/>The loan will help him be a positive and optimistic person, because the house represents his family life. He will be grateful for your little help that represents much for him to live a dignified and stable life."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "5000.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "4275.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 134,
          "name": "Personal Housing Expenses"
        },
        "sector": {
          "id": 10,
          "name": "Housing"
        },
        "distributionModel": "field_partner",
        "use": "to rebuild his home, which was damaged by war.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 2695,
            "name": "gaza",
            "geocode": {
              "id": 335698,
              "address": "gaza, Palestine",
              "longitude": 34.4666667,
              "latitude": 31.5
            }
          },
          "country": {
            "isoCode": "PS",
            "name": "Palestine",
            "region": "Middle East",
            "geocode": {
              "id": 335698,
              "address": "gaza, Palestine",
              "longitude": 34.4666667,
              "latitude": 31.5
            }
          },
          "geocode": {
            "id": 335698,
            "address": "gaza, Palestine",
            "longitude": 34.4666667,
            "latitude": 31.5
          }
        },
        "borrowerCount": 1,
        "lenderRepaymentTerm": 39,
        "isMatchable": true,
        "matcherName": "The Richard Brindle Fund",
        "fundraisingDate": "2016-03-22T16:00:02Z",
        "disbursalDate": "2016-02-23T08:00:00Z",
        "plannedExpirationDate": "2016-04-21T16:00:02Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "to rebuild his home ",
        "partnerId": 122,
        "partnerName": "Vitas Palestine",
        "reviewer": {
          "name": "Tim Gibson",
          "imageId": 1632475
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It meets some of the immediate needs of people in conflict-ridden areas.",
        "endorserId": 1288792
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2128405,
            "fileSize": 4423764,
            "width": 5472,
            "height": 3648,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040264\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040264\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040264\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040264"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1040264\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1048505,
        "name": "Ama",
        "gender": "male",
        "description": {
          "en": "Ama, pictured here with his wife Yuti, is preparing to launch an organic chicken farm in his native northern Thailand. Ama and his wife are in their mid 50's, looking after a family of 7 people living at their home, including their 3 secondary school-aged children. \n\nAma is a member of the Akha tribe in Chiang Rai, Thailand, one of several different ethnic groups who make their homes across the mountain ranges of southern China, Laos, Burma, Vietnam, and Thailand. For his entire life, he has grown corn and and worked as a hired laborer in the mountains near his home. But because prices of his farm goods go up and down, his income is very unpredictable, and is rarely enough to support his family.\n\nWith a 112,000 THB loan, Ama will be able to buy 700 egg laying hens to raise on farmland that until now has been unable to grow crops. Selling the eggs he gets every day can potentially more than triple the income Ama makes currently, roughly 190 USD\/month. And, because he can only sell corn once or twice per year, his new egg farm will give Ama and his family a monthly source of cash for the first time in their lives, which he plans to use to send his children to study and cover family expenses.\n"
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "3200.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "2300.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 102,
          "name": "Poultry"
        },
        "sector": {
          "id": 1,
          "name": "Agriculture"
        },
        "distributionModel": "field_partner",
        "use": "To buy chickens for an organic egg farm",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 26195,
            "name": "Chiang Rai",
            "geocode": {
              "id": 336018,
              "address": "Thailand",
              "longitude": 100,
              "latitude": 15
            }
          },
          "country": {
            "isoCode": "TH",
            "name": "Thailand",
            "region": "Asia",
            "geocode": {
              "id": 336018,
              "address": "Thailand",
              "longitude": 100,
              "latitude": 15
            }
          },
          "geocode": {
            "id": 336018,
            "address": "Thailand",
            "longitude": 100,
            "latitude": 15
          }
        },
        "borrowerCount": 1,
        "lenderRepaymentTerm": 18,
        "isMatchable": false,
        "fundraisingDate": "2016-04-02T03:40:03Z",
        "disbursalDate": "2016-03-22T07:00:00Z",
        "plannedExpirationDate": "2016-05-02T03:40:03Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy chickens for an organic egg farm",
        "partnerId": 472,
        "partnerName": "Hilltribe Organics Limited",
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2140316,
            "fileSize": 3165757,
            "width": 3264,
            "height": 2448,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048505\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048505\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048505\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048505"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048505\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1048713,
        "name": "Bryan",
        "gender": "male",
        "description": {
          "en": "Bryan is very thankful to Kiva for the loan granted to him in the amount of PhP 150,000 which he used to purchased to buy cement, steel, sand, nails and other hardware tools and carpentry equipment. Bryan business is doing well and was able to pay his loan on time. Most of the challenges Bryan is facing in his business today are delayed payment of some of his customers and slowing down of his store business because of the increase number of wholesaler grocery stores in their community hence, the competition. In order for him to balance out, he finding more buyers outside their community to which he can delivers his goods, he expanded his business to put up a computer shop with 3 computers beside his store and focus on his hardware business which is more in demand this day.<br \/><br \/>Bryan is requesting a re-loan in the amount of PhP 150,000 to buy more  to buy cement, paint, metal roofs, pipes and other hardware tools and carpentry equipment for his customers. The additional capital will enable him to restock his hardware business and increase the quantity of his most bought items to increase his income.<br \/><br \/>Bryan is working hard to improve his business not just for his family but also for his employees in his community depending on him for their employment."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "3275.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "1525.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 81,
          "name": "Hardware"
        },
        "sector": {
          "id": 7,
          "name": "Retail"
        },
        "distributionModel": "field_partner",
        "use": "to buy cement, paint, metal roofs, pipes and other hardware tools and carpentry equipment for his customers.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 11901,
            "name": "Tondo, Manila",
            "geocode": {
              "id": 335981,
              "address": "Philippines",
              "longitude": 122,
              "latitude": 13
            }
          },
          "country": {
            "isoCode": "PH",
            "name": "Philippines",
            "region": "Asia",
            "geocode": {
              "id": 335981,
              "address": "Philippines",
              "longitude": 122,
              "latitude": 13
            }
          },
          "geocode": {
            "id": 335981,
            "address": "Philippines",
            "longitude": 122,
            "latitude": 13
          }
        },
        "borrowerCount": 1,
        "lenderRepaymentTerm": 5,
        "isMatchable": false,
        "fundraisingDate": "2016-04-06T20:30:09Z",
        "disbursalDate": "2016-03-09T08:00:00Z",
        "plannedExpirationDate": "2016-05-06T20:30:09Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "to buy cement, paint, metal roofs, pipes and other hardware tools and carpentry equipment for his customers.",
        "partnerId": 389,
        "partnerName": "SEED Center Philippines Inc.",
        "reviewer": {
          "name": "Tim Gibson",
          "imageId": 1632475
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2140838,
            "fileSize": 2174124,
            "width": 2174,
            "height": 1451,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048713\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048713\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048713\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048713"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1048713\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1034648,
        "name": "Twitezimbere Acb  Need Photo Group",
        "gender": "female",
        "description": {
          "en": "Annonciate is 46 years old, married, and has two children. She is the leader of the Twitezimbere Acb Need Photo Group. The group name means \u201cLet us support each other.\u201d Annonciate is a tailor, which she has been doing for 20 years. \r\n\r\nThe group members sell different items in order to have better standards of living. Annonciate will use her portion of the loan to buy another sewing machine to increase her profits. The profits from the business will be used to renovate her house."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "7000.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "4800.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 32,
          "name": "Tailoring"
        },
        "sector": {
          "id": 4,
          "name": "Services"
        },
        "distributionModel": "field_partner",
        "use": "to purchase another sewing machine",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "country": {
            "isoCode": "RW",
            "name": "Rwanda",
            "region": "Africa",
            "geocode": {
              "id": 335989,
              "address": "Rwanda",
              "longitude": 30,
              "latitude": -2
            }
          },
          "geocode": {
            "id": 335989,
            "address": "Rwanda",
            "longitude": 30,
            "latitude": -2
          }
        },
        "borrowerCount": 10,
        "lenderRepaymentTerm": 8,
        "isMatchable": false,
        "fundraisingDate": "2016-03-18T14:20:02Z",
        "disbursalDate": "2016-02-29T08:00:00Z",
        "plannedExpirationDate": "2016-04-17T14:20:02Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "To buy an other machine to make profits.",
        "partnerId": 161,
        "partnerName": "Urwego Opportunity Bank, a partner of Opportunity International and HOPE International",
        "reviewer": {
          "name": "Marsha Berkowitz",
          "imageId": 402980
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": ""
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2119879,
            "fileSize": 847097,
            "width": 2048,
            "height": 1536,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1034648\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1034648\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1034648\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1034648"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1034648\/lenders"
        }
      ]
    },
    {
      "class": [
        "Loan_Partner",
        "Loan"
      ],
      "rel": [
        "item"
      ],
      "properties": {
        "id": 1039061,
        "name": "Familia R Group",
        "gender": "female",
        "description": {
          "es": "\nEl grupo \u201cFamilia R\u201d es originario de una comunidad del Estado de M\u00e9xico con ra\u00edces ind\u00edgenas. En algunas conversaciones de sus habitantes a\u00fan se logran escuchar palabras  mazahuas y muchas mujeres tambi\u00e9n visten los trajes t\u00edpicos c\u00e9lebres por sus colores y complementos entre los que destacan los largos collares. Del mismo modo, sienten un especial respeto por la tierra que les da sus mejores cosechas tanto de ma\u00edz como de haba, frijol y espinacas. \n    Dicho grupo se integr\u00f3 gracias a Don Pedro y Do\u00f1a Mago quienes comparten su entusiasmo y el esfuerzo en sus actividades laborales. A lo largo de su matrimonio han tenido once hijos los cuales actualmente son completamente independientes. \n   Desde hace m\u00e1s de 31 a\u00f1os se han dedicado a la cr\u00eda de ganado y aceptaron el apoyo del pr\u00e9stamo ya que es un medio muy accesible para hacer crecer cualquier actividad siempre y cuando se trabaje en conjunto para lograrlo. \"A m\u00ed me encanta ayudar a mi esposo con los gastos de nuestro hogar y antes con la educaci\u00f3n de nuestros hijos; adem\u00e1s tambi\u00e9n comenzamos juntos con la venta de pulque (bebida tradicional), dulces, y otros productos\" coment\u00f3 Do\u00f1a Mago muy contenta.\n    Actualmente ambos se dedican al cien por ciento a la cr\u00eda, ya que Pedro ha dejado de realizar otros oficios debido a su edad. Entre sus clientes se encuentran los due\u00f1os de negocios de comida as\u00ed como las personas que celebrar\u00e1n alguna fiesta, en especial, bodas y XV a\u00f1os. En esta ocasi\u00f3n ocupar\u00eda el pr\u00e9stamo para comprar cinco reses y alimento suficiente para su cr\u00eda. Su meta es que la producci\u00f3n aumente y que sus clientes puedan recomendarlos por la calidad del producto y la magn\u00edfica atenci\u00f3n que los caracteriza. \n    Los dem\u00e1s integrantes del grupo son Gabriela quien invertir\u00e1 en el servicio de taxi mientras que Pedro, Mago y Rosa Olivia har\u00e1n lo propio con el negocio de animales.\n*La fotograf\u00eda fue tomada en un mural muy tradicional ubicado en el centro del municipio.\n",
          "en": "The \u201cFamilia R\u201d group is from a community in the state of M\u00e9xico, with indigenous roots. In some conversations, the inhabitants still manage to hear Mazahua words and many women also wear the traditional outfits celebrated for their colors and accessories of which the long necklaces stand out. In the same way, they feel a special respect for the earth which gives them their best harvests in corn and also in broad beans, beans, and spinach. <br \/><br \/>This group was formed thanks to Pedro and Mago who share their enthusiasm and the effort in their work activities. Throughout their marriage, they have had eleven children, who are currently completely independent. <br \/><br \/>For over 31 years, they have worked raising cattle and accepted the help of a loan which is a very accessible means to grow whatever business, as long as one works together to achieve it. \"I love helping my husband with our household expenses and, before, with our children's education; in addition we also begin together selling pulque (a traditional drink), sweets, and other products,\" comments Mago very contentedly. <br \/><br \/>Currently, they both work one hundred percent at raising animals, since Pedro has stopped doing other jobs due to his age. Among their customers are the owners of food businesses as well as people who are celebrating an occasion, especially weddings and fifteenth birthdays. At this time, he would use the loan to purchase five cows and enough feed to raise them. His goal is that the production increases and that their customers can recommend them for the quality of the product and the magnificent service which characterizes them. <br \/><br \/>The other members of the group are Gabriela who will invest in the taxi service while Pedro, Mago, and Rosa Olivia will do the same in their animal business.  <br \/><br \/>*The photo was taken by a very traditional mural located in the center of the municipality."
        },
        "status": "fundRaising",
        "loanAmount": {
          "amount": "5300.00",
          "currency": "USD"
        },
        "fundedAmount": {
          "amount": "3125.00",
          "currency": "USD"
        },
        "basketAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "paidAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "activity": {
          "id": 110,
          "name": "Animal Sales"
        },
        "sector": {
          "id": 1,
          "name": "Agriculture"
        },
        "distributionModel": "field_partner",
        "use": "to buy a calf.",
        "hasCurrencyExchangeLossLenders": false,
        "delinquent": false,
        "location": {
          "town": {
            "id": 23528,
            "name": "Carmona, San Jose del Rincon",
            "geocode": {
              "id": 335824,
              "address": "Mexico",
              "longitude": -102,
              "latitude": 23
            }
          },
          "country": {
            "isoCode": "MX",
            "name": "Mexico",
            "region": "North America",
            "geocode": {
              "id": 335824,
              "address": "Mexico",
              "longitude": -102,
              "latitude": 23
            }
          },
          "geocode": {
            "id": 335824,
            "address": "Mexico",
            "longitude": -102,
            "latitude": 23
          }
        },
        "borrowerCount": 4,
        "lenderRepaymentTerm": 12,
        "isMatchable": true,
        "matcherName": "Reid Hoffman the man who wrote The Startup of You",
        "fundraisingDate": "2016-03-25T20:30:28Z",
        "disbursalDate": "2016-02-16T08:00:00Z",
        "plannedExpirationDate": "2016-04-24T20:30:28Z",
        "isExpiringSoon": false,
        "anonymizationLevel": "none",
        "loanUseOriginalLanguage": "to buy a calf.",
        "partnerId": 130,
        "partnerName": "VisionFund Mexico",
        "reviewer": {
          "name": "Wendy Harris"
        },
        "arrearsAmount": {
          "amount": "0.00",
          "currency": "USD"
        },
        "inPfp": false,
        "whySpecial": "It gives rural low-income families in Mexico a chance to work for a better future.",
        "endorserId": 1464528
      },
      "entities": [
        {
          "class": [
            "Image"
          ],
          "name": "image",
          "rel": [
            "image"
          ],
          "properties": {
            "id": 2111646,
            "fileSize": 312536,
            "width": 1280,
            "height": 768,
            "aspectRatio": "landscape"
          },
          "links": [
            {
              "rel": [
                "self"
              ],
              "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1039061\/image"
            }
          ]
        },
        {
          "class": [
            "Borrower",
            "collection"
          ],
          "name": "borrowers",
          "rel": [
            "borrowers"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1039061\/borrowers"
        },
        {
          "class": [
            "LoanTerms"
          ],
          "name": "terms",
          "rel": [
            "terms"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1039061\/terms"
        }
      ],
      "links": [
        {
          "rel": [
            "self"
          ],
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1039061"
        }
      ],
      "actions": [
        {
          "name": "lenders",
          "title": "Lenders",
          "method": "GET",
          "href": "https:\/\/api.dev.kivaws.org\/v2\/loans\/1039061\/lenders"
        }
      ]
    }
  ];

export const loansMocks = loansJSON.map((loan) => mapToLoan(loan));