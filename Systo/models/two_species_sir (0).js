SYSTO.models.two_species_sir = {
   "meta": {
      "language": "system_dynamics",
      "name": "two_species_sir",
      "id": "two_species_sir",
      "title": "Animal-human disease model",
      "description": "This is a Systo re-implementation of the Sysdea model \"Disease model for One Health Vet College LSHTM\" - https://app.sysdea.com/shared/VLiZDzT7WAB2LV4jCGqbxY3DCWB. ",
      "author": "robertm"
   },
   "nodes": {
      "stock1": {
         "id": "stock1",
         "type": "stock",
         "label": "human_susceptible",
         "centrex": 211,
         "centrey": 252,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "100"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "stock2": {
         "id": "stock2",
         "type": "stock",
         "label": "human_infected",
         "centrex": 422,
         "centrey": 248,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "1"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "stock3": {
         "id": "stock3",
         "type": "stock",
         "label": "human_resistant",
         "centrex": 626,
         "centrey": 250,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve1": {
         "id": "valve1",
         "type": "valve",
         "label": "human_becoming_infected",
         "centrex": 322.5978835978836,
         "centrey": 247.21089682703567,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "human_susceptible*(1-pow(1-human_pinf_from_human, human_contacts_with_human)*pow(1-human_pinf_from_animal, human_contacts_with_animal))"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve2": {
         "id": "valve2",
         "type": "valve",
         "label": "human_recovering",
         "centrex": 529.7302448876546,
         "centrey": 248.9786896605237,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "human_infected/recovery_time"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve3": {
         "id": "valve3",
         "type": "valve",
         "label": "human_vaccination",
         "centrex": 433.92742905242903,
         "centrey": 150.75,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve4": {
         "id": "valve4",
         "type": "valve",
         "label": "human_becoming_susceptible",
         "centrex": 410.5240278658334,
         "centrey": 348.25,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "loss_of_resistance*human_resistant"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "cloud2": {
         "id": "cloud2",
         "type": "cloud",
         "label": "cloud2",
         "centrex": 43,
         "centrey": 362,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve6": {
         "id": "valve6",
         "type": "valve",
         "label": "human_uninfected_dying",
         "centrex": 121.8345463692363,
         "centrey": 313.6474934436151,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "human_death_rate*human_susceptible"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "cloud3": {
         "id": "cloud3",
         "type": "cloud",
         "label": "cloud3",
         "centrex": 454,
         "centrey": 327,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve7": {
         "id": "valve7",
         "type": "valve",
         "label": "human_infected_dying",
         "centrex": 438.253164556962,
         "centrey": 288.125,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "human_death_rate_infected*human_infected"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "cloud4": {
         "id": "cloud4",
         "type": "cloud",
         "label": "cloud4",
         "centrex": 759,
         "centrey": 255,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve8": {
         "id": "valve8",
         "type": "valve",
         "label": "human_resistant_dying",
         "centrex": 693.25,
         "centrey": 252.52819548872182,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "human_death_rate+human_resistant"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable1": {
         "id": "variable1",
         "type": "variable",
         "label": "human_total",
         "centrex": 182,
         "centrey": 149,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "human_susceptible+human_infected+human_resistant"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable2": {
         "id": "variable2",
         "type": "variable",
         "label": "recovery_time",
         "centrex": 501,
         "centrey": 187,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "10"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable6": {
         "id": "variable6",
         "type": "variable",
         "label": "human_percent_infected",
         "centrex": 400,
         "centrey": 68,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "100*human_infected/human_total"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable7": {
         "id": "variable7",
         "type": "variable",
         "label": "human_death_rate",
         "centrex": 745,
         "centrey": 314,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.001"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable8": {
         "id": "variable8",
         "type": "variable",
         "label": "human_birth_rate",
         "centrex": 40,
         "centrey": 176,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.001"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable11": {
         "id": "variable11",
         "type": "variable",
         "label": "human_pinf_from_human",
         "centrex": 167,
         "centrey": 70,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "human_to_human_transmissability*human_percent_infected"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable12": {
         "id": "variable12",
         "type": "variable",
         "label": "human_contacts_with_human",
         "centrex": 77,
         "centrey": 113,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "5"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable13": {
         "id": "variable13",
         "type": "variable",
         "label": "human_contacts_with_animal",
         "centrex": 242,
         "centrey": 438,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "5"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable14": {
         "id": "variable14",
         "type": "variable",
         "label": "human_pinf_from_animal",
         "centrex": 140,
         "centrey": 380,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_to_human_transmissability*animal_percent_infected"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable15": {
         "id": "variable15",
         "type": "variable",
         "label": "human_to_human_transmissability",
         "centrex": 311,
         "centrey": 21,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.01"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable16": {
         "id": "variable16",
         "type": "variable",
         "label": "loss_of_resistance",
         "centrex": 350,
         "centrey": 443,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.01"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "cloud5": {
         "id": "cloud5",
         "type": "cloud",
         "label": "cloud5",
         "centrex": 32,
         "centrey": 235,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve9": {
         "id": "valve9",
         "type": "valve",
         "label": "human_births",
         "centrex": 120.75,
         "centrey": 243.42877094972067,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "human_birth_rate*human_total"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable17": {
         "id": "variable17",
         "type": "variable",
         "label": "human_death_rate_infected",
         "centrex": 388,
         "centrey": 315,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.1"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "stock4": {
         "id": "stock4",
         "type": "stock",
         "label": "animal_susceptible",
         "centrex": 222,
         "centrey": 664,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "100"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "stock5": {
         "id": "stock5",
         "type": "stock",
         "label": "animal_infected",
         "centrex": 412,
         "centrey": 667,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "1"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "stock6": {
         "id": "stock6",
         "type": "stock",
         "label": "animal_resistant",
         "centrex": 598,
         "centrey": 666,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "cloud6": {
         "id": "cloud6",
         "type": "cloud",
         "label": "cloud6",
         "centrex": 13,
         "centrey": 628,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve10": {
         "id": "valve10",
         "type": "valve",
         "label": "animal_births",
         "centrex": 116.75,
         "centrey": 645.8708133971292,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_birth_rate*animal_susceptible"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "cloud7": {
         "id": "cloud7",
         "type": "cloud",
         "label": "cloud7",
         "centrex": 30,
         "centrey": 740,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve11": {
         "id": "valve11",
         "type": "valve",
         "label": "animal_uninfected_dying",
         "centrex": 125.25,
         "centrey": 702.296875,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_death_rate*animal_susceptible"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve12": {
         "id": "valve12",
         "type": "valve",
         "label": "animal_becoming_infected",
         "centrex": 317,
         "centrey": 665.5,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_susceptible*(1-pow(1-animal_pinf_from_animal,animal_contact_with_animals))"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve13": {
         "id": "valve13",
         "type": "valve",
         "label": "animal_recovering",
         "centrex": 505,
         "centrey": 666.5,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_infected/animal_recovery_time"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "cloud8": {
         "id": "cloud8",
         "type": "cloud",
         "label": "cloud8",
         "centrex": 763,
         "centrey": 669,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve14": {
         "id": "valve14",
         "type": "valve",
         "label": "animal_resistant_dying",
         "centrex": 681.25,
         "centrey": 667.5136363636364,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_death_rate*animal_resistant"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable18": {
         "id": "variable18",
         "type": "variable",
         "label": "animal_death_rate",
         "centrex": 703,
         "centrey": 741,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.01"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve15": {
         "id": "valve15",
         "type": "valve",
         "label": "animal_becoming_susceptible",
         "centrex": 435.9947781736162,
         "centrey": 752.1889733421458,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_resistant*0"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "cloud9": {
         "id": "cloud9",
         "type": "cloud",
         "label": "cloud9",
         "centrex": 571,
         "centrey": 571,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve16": {
         "id": "valve16",
         "type": "valve",
         "label": "animal_infected_dying",
         "centrex": 492.484375,
         "centrey": 618.4056603773585,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_death_rate_infected*animal_infected"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable19": {
         "id": "variable19",
         "type": "variable",
         "label": "animal_total",
         "centrex": 338,
         "centrey": 586,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_susceptible+animal_infected+animal_resistant"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable20": {
         "id": "variable20",
         "type": "variable",
         "label": "animal_birth_rate",
         "centrex": 60,
         "centrey": 581,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.01"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable21": {
         "id": "variable21",
         "type": "variable",
         "label": "animal_contact_with_animals",
         "centrex": 95,
         "centrey": 522,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "5"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable22": {
         "id": "variable22",
         "type": "variable",
         "label": "animal_pinf_from_animal",
         "centrex": 213,
         "centrey": 512,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_to_animal_transmissability*animal_percent_infected"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable23": {
         "id": "variable23",
         "type": "variable",
         "label": "animal_to_animal_transmissability",
         "centrex": 363,
         "centrey": 491,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.0001"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable24": {
         "id": "variable24",
         "type": "variable",
         "label": "animal_percent_infected",
         "centrex": 517,
         "centrey": 505,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "animal_infected/animal_total"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable25": {
         "id": "variable25",
         "type": "variable",
         "label": "animal_to_human_transmissability",
         "centrex": 124,
         "centrey": 441,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.1"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable26": {
         "id": "variable26",
         "type": "variable",
         "label": "animal_recovery_time",
         "centrex": 623,
         "centrey": 613,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "10"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable27": {
         "id": "variable27",
         "type": "variable",
         "label": "animal_death_rate_infected",
         "centrex": 635,
         "centrey": 507,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.1"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      }
   },
   "arcs": {
      "flow1": {
         "id": "flow1",
         "type": "flow",
         "label": "flow1",
         "start_node_id": "stock1",
         "end_node_id": "stock2",
         "curvature": 0.021164021164021097,
         "along": 0.5582010582010583,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve1",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow2": {
         "id": "flow2",
         "type": "flow",
         "label": "flow2",
         "start_node_id": "stock2",
         "end_node_id": "stock3",
         "curvature": 0.0006311537490532418,
         "along": 0.556172683665741,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve2",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow3": {
         "id": "flow3",
         "type": "flow",
         "label": "flow3",
         "start_node_id": "stock1",
         "end_node_id": "stock3",
         "curvature": 0.4526647660963021,
         "along": 0.5720610350173315,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve3",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow4": {
         "id": "flow4",
         "type": "flow",
         "label": "flow4",
         "start_node_id": "stock3",
         "end_node_id": "stock1",
         "curvature": 0.4383698447996563,
         "along": 0.5382572040713237,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve4",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow6": {
         "id": "flow6",
         "type": "flow",
         "label": "flow6",
         "start_node_id": "stock1",
         "end_node_id": "cloud2",
         "curvature": 0.02249344361508979,
         "along": 0.5751462578172282,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve6",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow7": {
         "id": "flow7",
         "type": "flow",
         "label": "flow7",
         "start_node_id": "stock2",
         "end_node_id": "cloud3",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve7",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow8": {
         "id": "flow8",
         "type": "flow",
         "label": "flow8",
         "start_node_id": "stock3",
         "end_node_id": "cloud4",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve8",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "influence1": {
         "id": "influence1",
         "type": "influence",
         "label": "influence1",
         "start_node_id": "stock1",
         "end_node_id": "variable1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence2": {
         "id": "influence2",
         "type": "influence",
         "label": "influence2",
         "start_node_id": "stock2",
         "end_node_id": "variable1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence3": {
         "id": "influence3",
         "type": "influence",
         "label": "influence3",
         "start_node_id": "stock3",
         "end_node_id": "variable1",
         "curvature": -0.3868576705183558,
         "along": 0.3809054381192443,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence5": {
         "id": "influence5",
         "type": "influence",
         "label": "influence5",
         "start_node_id": "stock1",
         "end_node_id": "valve6",
         "curvature": -0.22673049517218494,
         "along": 0.6354723406815203,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence6": {
         "id": "influence6",
         "type": "influence",
         "label": "influence6",
         "start_node_id": "stock1",
         "end_node_id": "valve1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence8": {
         "id": "influence8",
         "type": "influence",
         "label": "influence8",
         "start_node_id": "stock2",
         "end_node_id": "valve2",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence9": {
         "id": "influence9",
         "type": "influence",
         "label": "influence9",
         "start_node_id": "stock3",
         "end_node_id": "valve8",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence10": {
         "id": "influence10",
         "type": "influence",
         "label": "influence10",
         "start_node_id": "stock3",
         "end_node_id": "valve4",
         "curvature": 0.44096223376341503,
         "along": 0.8064743454419641,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence11": {
         "id": "influence11",
         "type": "influence",
         "label": "influence11",
         "start_node_id": "stock2",
         "end_node_id": "valve7",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence13": {
         "id": "influence13",
         "type": "influence",
         "label": "influence13",
         "start_node_id": "variable2",
         "end_node_id": "valve2",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence18": {
         "id": "influence18",
         "type": "influence",
         "label": "influence18",
         "start_node_id": "stock2",
         "end_node_id": "variable6",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence19": {
         "id": "influence19",
         "type": "influence",
         "label": "influence19",
         "start_node_id": "variable1",
         "end_node_id": "variable6",
         "curvature": 0.12703123130309912,
         "along": 0.4296637549359818,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence20": {
         "id": "influence20",
         "type": "influence",
         "label": "influence20",
         "start_node_id": "variable7",
         "end_node_id": "valve8",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence21": {
         "id": "influence21",
         "type": "influence",
         "label": "influence21",
         "start_node_id": "variable7",
         "end_node_id": "valve6",
         "curvature": 0.3151113251836634,
         "along": 0.5396740021724102,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence23": {
         "id": "influence23",
         "type": "influence",
         "label": "influence23",
         "start_node_id": "variable12",
         "end_node_id": "valve1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence24": {
         "id": "influence24",
         "type": "influence",
         "label": "influence24",
         "start_node_id": "variable11",
         "end_node_id": "valve1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence25": {
         "id": "influence25",
         "type": "influence",
         "label": "influence25",
         "start_node_id": "variable13",
         "end_node_id": "valve1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence26": {
         "id": "influence26",
         "type": "influence",
         "label": "influence26",
         "start_node_id": "variable14",
         "end_node_id": "valve1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence27": {
         "id": "influence27",
         "type": "influence",
         "label": "influence27",
         "start_node_id": "variable15",
         "end_node_id": "variable11",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence28": {
         "id": "influence28",
         "type": "influence",
         "label": "influence28",
         "start_node_id": "variable6",
         "end_node_id": "variable11",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence29": {
         "id": "influence29",
         "type": "influence",
         "label": "influence29",
         "start_node_id": "variable16",
         "end_node_id": "valve4",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "flow9": {
         "id": "flow9",
         "type": "flow",
         "label": "flow9",
         "start_node_id": "cloud5",
         "end_node_id": "stock1",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve9",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "influence30": {
         "id": "influence30",
         "type": "influence",
         "label": "influence30",
         "start_node_id": "variable8",
         "end_node_id": "valve9",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence31": {
         "id": "influence31",
         "type": "influence",
         "label": "influence31",
         "start_node_id": "variable1",
         "end_node_id": "valve9",
         "curvature": -0.03304741738182381,
         "along": 0.5592550692828073,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence32": {
         "id": "influence32",
         "type": "influence",
         "label": "influence32",
         "start_node_id": "variable17",
         "end_node_id": "valve7",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "flow10": {
         "id": "flow10",
         "type": "flow",
         "label": "flow10",
         "start_node_id": "cloud6",
         "end_node_id": "stock4",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve10",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow11": {
         "id": "flow11",
         "type": "flow",
         "label": "flow11",
         "start_node_id": "stock4",
         "end_node_id": "cloud7",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve11",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow12": {
         "id": "flow12",
         "type": "flow",
         "label": "flow12",
         "start_node_id": "stock4",
         "end_node_id": "stock5",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve12",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow13": {
         "id": "flow13",
         "type": "flow",
         "label": "flow13",
         "start_node_id": "stock5",
         "end_node_id": "stock6",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve13",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow14": {
         "id": "flow14",
         "type": "flow",
         "label": "flow14",
         "start_node_id": "stock6",
         "end_node_id": "cloud8",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve14",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow15": {
         "id": "flow15",
         "type": "flow",
         "label": "flow15",
         "start_node_id": "stock6",
         "end_node_id": "stock4",
         "curvature": 0.4298303591099361,
         "along": 0.3691341705221414,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve15",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow16": {
         "id": "flow16",
         "type": "flow",
         "label": "flow16",
         "start_node_id": "stock5",
         "end_node_id": "cloud9",
         "curvature": 0,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve16",
         "shape": "curved",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "influence33": {
         "id": "influence33",
         "type": "influence",
         "label": "influence33",
         "start_node_id": "stock4",
         "end_node_id": "valve10",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence34": {
         "id": "influence34",
         "type": "influence",
         "label": "influence34",
         "start_node_id": "stock4",
         "end_node_id": "valve11",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence35": {
         "id": "influence35",
         "type": "influence",
         "label": "influence35",
         "start_node_id": "stock4",
         "end_node_id": "valve12",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence36": {
         "id": "influence36",
         "type": "influence",
         "label": "influence36",
         "start_node_id": "stock5",
         "end_node_id": "valve13",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence37": {
         "id": "influence37",
         "type": "influence",
         "label": "influence37",
         "start_node_id": "stock6",
         "end_node_id": "valve14",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence38": {
         "id": "influence38",
         "type": "influence",
         "label": "influence38",
         "start_node_id": "variable18",
         "end_node_id": "valve14",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence39": {
         "id": "influence39",
         "type": "influence",
         "label": "influence39",
         "start_node_id": "variable18",
         "end_node_id": "valve11",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence40": {
         "id": "influence40",
         "type": "influence",
         "label": "influence40",
         "start_node_id": "stock6",
         "end_node_id": "valve15",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence41": {
         "id": "influence41",
         "type": "influence",
         "label": "influence41",
         "start_node_id": "stock5",
         "end_node_id": "valve16",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence42": {
         "id": "influence42",
         "type": "influence",
         "label": "influence42",
         "start_node_id": "variable23",
         "end_node_id": "variable22",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence43": {
         "id": "influence43",
         "type": "influence",
         "label": "influence43",
         "start_node_id": "variable24",
         "end_node_id": "variable22",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence44": {
         "id": "influence44",
         "type": "influence",
         "label": "influence44",
         "start_node_id": "variable19",
         "end_node_id": "variable24",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence45": {
         "id": "influence45",
         "type": "influence",
         "label": "influence45",
         "start_node_id": "stock4",
         "end_node_id": "variable19",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence46": {
         "id": "influence46",
         "type": "influence",
         "label": "influence46",
         "start_node_id": "stock5",
         "end_node_id": "variable19",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence47": {
         "id": "influence47",
         "type": "influence",
         "label": "influence47",
         "start_node_id": "stock6",
         "end_node_id": "variable19",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence48": {
         "id": "influence48",
         "type": "influence",
         "label": "influence48",
         "start_node_id": "variable21",
         "end_node_id": "valve12",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence49": {
         "id": "influence49",
         "type": "influence",
         "label": "influence49",
         "start_node_id": "variable22",
         "end_node_id": "valve12",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence50": {
         "id": "influence50",
         "type": "influence",
         "label": "influence50",
         "start_node_id": "variable20",
         "end_node_id": "valve10",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence51": {
         "id": "influence51",
         "type": "influence",
         "label": "influence51",
         "start_node_id": "variable25",
         "end_node_id": "variable14",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence52": {
         "id": "influence52",
         "type": "influence",
         "label": "influence52",
         "start_node_id": "variable24",
         "end_node_id": "variable14",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence53": {
         "id": "influence53",
         "type": "influence",
         "label": "influence53",
         "start_node_id": "stock5",
         "end_node_id": "variable24",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence54": {
         "id": "influence54",
         "type": "influence",
         "label": "influence54",
         "start_node_id": "variable26",
         "end_node_id": "valve13",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence55": {
         "id": "influence55",
         "type": "influence",
         "label": "influence55",
         "start_node_id": "variable27",
         "end_node_id": "valve16",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      }
   },
   "scenarios": {
      "default": {
         "simulation_settings": {
            "start_time": 0,
            "end_time": 30,
            "nstep": 1,
            "display_interval": 1,
            "integration_method": "euler2"
         }
      }
   }
};
