
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('armor_sets').del()
    .then(function () {
      // Inserts seed entries
      return knex('armor_sets').insert([
        { name: 'Null', description: 'N/A' },
        { name: 'Leather', description: 'Armor made of treater monster hide. A safe choice, designed for multi-purpose use.', rank: 0, head: 2, chest: 3, hands: 4, waist: 5, legs: 6 },
        { name: 'Chainmail', description: 'Armor made of woven chain links. Its familiar design inspires trust in hunters who wear it.', rank: 0, head: 7, chest: 8, hands: 9, waist: 10, legs: 11 },
        { name: 'Hunter\'s', description: 'Armor widely used among hunters. Its sturdy build gives peace of mind.', rank: 0, head: 12, chest: 13, hands: 14, waist: 15, legs: 16 },
        { name: 'Bone', description: 'Traditional armor crafted from monster bones. Believe it or not, it offers pretty good insulation.', rank: 0, head: 17, chest: 18, hands: 19, waist: 20, legs: 21 },
        { name: 'Vespoid', description: 'Armor made from hard Vespoid carapace. Though weak to fire element, it offers solid defense.', rank: 0, head: 22, chest: 23, hands: 24, waist: 25, legs: 26 },
        { name: 'Kestodon', description: 'The ease of obtaining Kestodon materials makes these armguards popular with the research team.', rank: 0, head: 1, chest: 1, hands: 27, waist: 1, legs: 1 },
        { name: 'Gajau', description: 'The ease of working with Gajau hide makes these boots popular with more than just hunters.', rank: 0, head: 1, chest: 1, hands: 1, waist: 1, legs: 28 },
        { name: 'Jagras', description: 'Diligently polished Great Jagras scale marries steel in beautiful harmony in this armor.', rank: 0, head: 29, chest: 30, hands: 31, waist: 32, legs: 33 },
        { name: 'Kulu', description: 'The elegant color and beautiful design of this Kulu-Ya-Ku armor make it perennially popular.', rank: 0, head: 34, chest: 35, hands: 36, waist: 37, legs: 38 },
        { name: 'Alloy', description: 'Armor made of fine machalite ore. What it lacks in charm it more than makes up in defense.', rank: 0, head: 39, chest: 40, hands: 41, waist: 42, legs: 43 },
        { name: 'Pukei', description: 'Pukei-Pukei armor engineered to protect vital body parts with a very modest amount of materials.', rank: 0, head: 44, chest: 45, hands: 46, waist: 47, legs: 48 },
        { name: 'Barroth', description: 'A wyvern could trample this armor made of Barroth shell and not leave a single crack.', rank: 0, head: 49, chest: 50, hands: 51, waist: 52, legs: 53 },
        { name: 'Jyura', description: 'A special process was used to treat the hard mud caked on this Jyuratodus armor in order to improve durability.', rank: 0, head: 54, chest: 55, hands: 56, waist: 57, legs: 58 },
        { name: 'Kadachi', description: 'Exquisitely light, this soft Tobi-Kadachi armor is so comfy you can barely feel it on.', rank: 0, head: 59, chest: 60, hands: 61, waist: 62, legs: 63 },
        { name: 'High Metal', description: 'Armor made from a generous portioin of ore. Don\'t worry, it breathes surprisingly well.', rank: 0, head: 64, chest: 65, hands: 66, waist: 67, legs: 68 },
        { name: 'King Beetle', description: 'Armor to fulfill the ambitions of those who dreamed of wielding the power to rule over bugdom.', rank: 0, head: 69, chest: 70, hands: 71, waist: 72, legs: 73 },
        { name: 'Shamos', description: 'These Shamos goggles have undergone a special process to allow the wearer to see in the dark.', rank: 0, head: 74, chest: 1, hands: 1, waist: 1, legs: 1 },
        { name: 'Hornetaur', description: 'Armor plated in hard Hornetaur parts so lustrous you\'ll swear it\'s polished metal.', rank: 0, head: 75, chest: 76, hands: 77, waist: 78, legs: 79 },
        { name: 'Anja', description: 'Modeled after an unknown tribe\'s hunting garb, the Anja armor\'s design is a symbol of bravery.', rank: 0, head: 80, chest: 81, hands: 82, waist: 83, legs: 84 },
        { name: 'Rathian', description: 'Replete with queenly refinement, grace, and might, this sleek Rathian armor has it all.', rank: 0, head: 85, chest: 86, hands: 87, waist: 88, legs: 89 },
        { name: 'Tzitzi', description: 'By using a portion of the head as-is, this Tzitzi-Ya-Ku armor also serves as a fine trophy.', rank: 0, head: 90, chest: 91, hands: 92, waist: 93, legs: 94 },
        { name: 'Lumu', description: 'This Paolumu armor offers a perfect, bespoke fit to any body shape, doesn\'t even feel like you\'re wearing armor.', rank: 0, head: 95, chest: 96, hands: 97, waist: 98, legs: 99 },
        { name: 'Girros', description: 'In addition to protecting the body, this Great Girros armor aids a hunter\'s respiration.', rank: 0, head: 100, chest: 101, hands: 102, waist: 103, legs: 104 },
        { name: 'Baan', description: 'A mix of heavy plating and bone grant this Radobaan armor almost impenetrable defense.', rank: 0, head: 105, chest: 106, hands: 107, waist: 108, legs: 109 },
        { name: 'Ingot', description: 'Armor crafted from brilliant gold ore. Its color and design are both highly pleasing.', rank: 0, head: 110, chest: 111, hands: 112, waist: 113, legs: 114 },
        { name: 'Death Stench', description: 'Accursed armor, said to bring death. The wearer hears echoes of their victim\'s death throes.', rank: 0, head: 115, chest: 116, hands: 117, waist: 118, legs: 119 },
        { name: 'Legiana', description: 'Armor worn by proven masters of the wind. Made of Legiana parts, it glistens a piercing blue.', rank: 0, head: 120, chest: 121, hands: 122, waist: 123, legs: 124 },
        { name: 'Odogaron', description: 'None who lay eyes upon this Odogaron armor are seen again, as it erodes the wearer\'s sanity.', rank: 0, head: 125, chest: 126, hands: 127, waist: 128, legs: 129 },
        { name: 'Rathalos', description: 'Crafted from parts carved from the King of the Skies, this crimson armor boasts overwhelming defense.', rank: 0, head: 130, chest: 131, hands: 132, waist: 133, legs: 134 },
        { name: 'Diablos', description: 'The bold horns on this Diablos armor are a challenge to any who doubt your rule over the sands.', rank: 0, head: 135, chest: 136, hands: 137, waist: 138, legs: 139 },
        { name: 'Kirin', description: 'Don this gorgeous Kirin armor and canter through the wilderness living out your wildest equine fantasies.', rank: 0, head: 140, chest: 141, hands: 142, waist: 143, legs: 144 },

        { name: 'Leather α', description: 'Armor made of treater monster hide. A safe choice, designed for multi-purpose use.', rank: 1, head: 145, chest: 146, hands: 147, waist: 148, legs: 149 },
        { name: 'Leather ß', description: 'Armor made of treater monster hide. A safe choice, designed for multi-purpose use.', rank: 1, head: 150, chest: 151, hands: 152, waist: 153, legs: 154 },

        { name: 'Chainmail α', description: 'Armor made of woven chain links. Its familiar design inspires trust in hunters who wear it.', rank: 1, head: 155, chest: 156, hands: 157, waist: 158, legs: 159 },
        { name: 'Chainmail ß', description: 'Armor made of woven chain links. Its familiar design inspires trust in hunters who wear it.', rank: 1, head: 160, chest: 161, hands: 162, waist: 163, legs: 164 },

        { name: 'Hunter\'s α', description: 'Armor widely used among hunters. Its sturdy build gives peace of mind.', rank: 1, head: 165, chest: 166, hands: 167, waist: 168, legs: 169 },
        { name: 'Hunter\'s ß', description: 'Armor widely used among hunters. Its sturdy build gives peace of mind.', rank: 1, head: 170, chest: 171, hands: 172, waist: 173, legs: 174 },

        { name: 'Bone α', description: 'Traditional armor crafted from monster bones. Believe it or not, it offers pretty good insulation.', rank: 1, head: 175, chest: 176, hands: 177, waist: 178, legs: 179 },
        { name: 'Bone ß', description: 'Traditional armor crafted from monster bones. Believe it or not, it offers pretty good insulation.', rank: 1, head: 180, chest: 181, hands: 182, waist: 183, legs: 184 },

        { name: 'Alloy α', description: 'Armor made of fine machalite ore. What it lacks in charm it more than makes up in defense.', rank: 1, head: 185, chest: 186, hands: 187, waist: 188, legs: 189 },
        { name: 'Alloy ß', description: 'Armor made of fine machalite ore. What it lacks in charm it more than makes up in defense.', rank: 1, head: 190, chest: 191, hands: 192, waist: 193, legs: 194 },

        { name: 'King Beetle α', description: 'Armor to fulfill the ambitions of those who dreamed of wielding the power to rule over bugdom.', rank: 1, head: 195, chest: 196, hands: 197, waist: 198, legs: 199 },
        { name: 'King Beetle ß', description: 'Armor to fulfill the ambitions of those who dreamed of wielding the power to rule over bugdom.', rank: 1, head: 200, chest: 201, hands: 202, waist: 203, legs: 204 },

        { name: 'Vespoid α', description: 'Armor made from hard Vespoid carapace. Though weak to fire element, it offers solid defense.', rank: 1, head: 205, chest: 206, hands: 207, waist: 208, legs: 209 },
        { name: 'Vespoid ß', description: 'Armor made from hard Vespoid carapace. Though weak to fire element, it offers solid defense.', rank: 1, head: 210, chest: 211, hands: 212, waist: 213, legs: 214 },

        { name: 'Hornetaur α', description: 'Armor plated in hard Hornetaur parts so lustrous you\'ll swear it\'s polished metal.', rank: 1, head: 215, chest: 216, hands: 217, waist: 218, legs: 219 },
        { name: 'Hornetaur ß', description: 'Armor plated in hard Hornetaur parts so lustrous you\'ll swear it\'s polished metal.', rank: 1, head: 220, chest: 221, hands: 222, waist: 223, legs: 224 },

        { name: 'Mosswine Mask α', description: 'Headgear fashioned to look like a Mosswine head. Thoss it on and get into character. It\'s fun!', rank: 1, head: 225, chest: 1, hands: 1, waist: 1, legs: 1 },

        { name: 'Kestodon α', description: 'The ease of obtaining Kestodon materials makes these armguards popular with the research team.', rank: 1, head: 1, chest: 1, hands: 226, waist: 1, legs: 1 },
        { name: 'Kestodon ß', description: 'The ease of obtaining Kestodon materials makes these armguards popular with the research team.', rank: 1, head: 1, chest: 1, hands: 227, waist: 1, legs: 1 },

        { name: 'Gajau α', description: 'The ease of working with Gajau hide makes these boots popular with more than just hunters.', rank: 1, head: 1, chest: 1, hands: 1, waist: 1, legs: 228 },
        { name: 'Gajau ß', description: 'The ease of working with Gajau hide makes these boots popular with more than just hunters.', rank: 1, head: 1, chest: 1, hands: 1, waist: 1, legs: 229 },

        { name: 'Shamos α', description: 'These Shamos goggles have undergone a special process to allow the wearer to see in the dark.', rank: 1, head: 230, chest: 1, hands: 1, waist: 1, legs: 1 },
        { name: 'Shamos ß', description: 'These Shamos goggles have undergone a special process to allow the wearer to see in the dark.', rank: 1, head: 231, chest: 1, hands: 1, waist: 1, legs: 1 },

        { name: 'Jagras α', description: 'Diligently polished Great Jagras scale marries steel in beautiful harmony in this armor.', rank: 1, head: 232, chest: 233, hands: 234, waist: 235, legs: 236 },
        { name: 'Jagras ß', description: 'Diligently polished Great Jagras scale marries steel in beautiful harmony in this armor.', rank: 1, head: 237, chest: 238, hands: 239, waist: 240, legs: 241 },

        { name: 'Kulu α', description: 'The elegant color and beautiful design of this Kulu-Ya-Ku armor make it perennially popular.', rank: 1, head: 242, chest: 243, hands: 244, waist: 245, legs: 246 },
        { name: 'Kulu ß', description: 'The elegant color and beautiful design of this Kulu-Ya-Ku armor make it perennially popular.', rank: 1, head: 247, chest: 248, hands: 249, waist: 250, legs: 251 },

        { name: 'Tzitzi α', description: 'By using a portion of the head as-is, this Tzitzi-Ya-Ku armor also serves as a fine trophy.', rank: 1, head: 252, chest: 253, hands: 254, waist: 255, legs: 256 },
        { name: 'Tzitzi ß', description: 'By using a portion of the head as-is, this Tzitzi-Ya-Ku armor also serves as a fine trophy.', rank: 1, head: 257, chest: 258, hands: 259, waist: 260, legs: 261 },

        { name: 'Girros α', description: 'In addition to protecting the body, this Great Girros armor aids a hunter\'s respiration.', rank: 1, head: 262, chest: 263, hands: 264, waist: 265, legs: 266 },
        { name: 'Girros ß', description: 'In addition to protecting the body, this Great Girros armor aids a hunter\'s respiration.', rank: 1, head: 267, chest: 268, hands: 269, waist: 270, legs: 271 },

        { name: 'Pukei α', description: 'Pukei-Pukei armor engineered to protect vital body parts with a very modest amount of materials.', rank: 1, head: 272, chest: 273, hands: 274, waist: 275, legs: 276 },
        { name: 'Pukei ß', description: 'Pukei-Pukei armor engineered to protect vital body parts with a very modest amount of materials.', rank: 1, head: 277, chest: 278, hands: 279, waist: 280, legs: 281 },

        { name: 'Barroth α', description: 'A wyvern could trample this armor made of Barroth shell and not leave a single crack.', rank: 1, head: 282, chest: 283, hands: 284, waist: 285, legs: 286 },
        { name: 'Barroth ß', description: 'A wyvern could trample this armor made of Barroth shell and not leave a single crack.', rank: 1, head: 287, chest: 288, hands: 289, waist: 290, legs: 291 },

        { name: 'Anja α', description: 'Modeled after an unknown tribe\'s hunting garb, the Anja armor\'s design is a symbol of bravery.', rank: 1, head: 292, chest: 293, hands: 294, waist: 295, legs: 296 },
        { name: 'Anja ß', description: 'Modeled after an unknown tribe\'s hunting garb, the Anja armor\'s design is a symbol of bravery.', rank: 1, head: 297, chest: 298, hands: 299, waist: 300, legs: 301 },

        { name: 'Jyura α', description: 'A special process was used to treat the hard mud caked on this Jyuratodus armor in order to improve durability.', rank: 1, head: 302, chest: 303, hands: 304, waist: 305, legs: 306 },
        { name: 'Jyura ß', description: 'A special process was used to treat the hard mud caked on this Jyuratodus armor in order to improve durability.', rank: 1, head: 307, chest: 308, hands: 309, waist: 310, legs: 311 },

        { name: 'Kadachi α', description: 'Exquisitely light, this soft Tobi-Kadachi armor is so comfy you can barely feel it on.', rank: 1, head: 312, chest: 313, hands: 314, waist: 315, legs: 316 },
        { name: 'Kadachi ß', description: 'Exquisitely light, this soft Tobi-Kadachi armor is so comfy you can barely feel it on.', rank: 1, head: 317, chest: 318, hands: 319, waist: 320, legs: 321 },

        { name: 'Lumu α', description: 'This Paolumu armor offers a perfect, bespoke fit to any body shape, doesn\'t even feel like you\'re wearing armor.', rank: 1, head: 322, chest: 323, hands: 324, waist: 325, legs: 326 },
        { name: 'Lumu ß', description: 'This Paolumu armor offers a perfect, bespoke fit to any body shape, doesn\'t even feel like you\'re wearing armor.', rank: 1, head: 327, chest: 328, hands: 329, waist: 330, legs: 331 },

        { name: 'Rathian α', description: 'Replete with queenly refinement, grace, and might, this sleek Rathian armor has it all.', rank: 1, head: 332, chest: 333, hands: 334, waist: 335, legs: 336 },
        { name: 'Rathian ß', description: 'Replete with queenly refinement, grace, and might, this sleek Rathian armor has it all.', rank: 1, head: 337, chest: 338, hands: 339, waist: 340, legs: 341 },

        { name: 'Rath Heart α', description: 'Rathian armor that exhibits such a regal presence that it leaves all who see it captivated and awed.', rank: 1, head: 342, chest: 343, hands: 344, waist: 345, legs: 346 },
        { name: 'Rath Heart ß', description: 'Rathian armor that exhibits such a regal presence that it leaves all who see it captivated and awed.', rank: 1, head: 347, chest: 348, hands: 349, waist: 350, legs: 351 },

        { name: 'Baan α', description: 'A mix of heavy plating and bone grant this Radobaan armor almost impenetrable defense.', rank: 1, head: 352, chest: 353, hands: 354, waist: 355, legs: 356 },
        { name: 'Baan ß', description: 'A mix of heavy plating and bone grant this Radobaan armor almost impenetrable defense.', rank: 1, head: 357, chest: 358, hands: 359, waist: 360, legs: 361 },

        { name: 'Gastodon α', description: 'The thick, stiff Gastodon hair used in this armor was treated to maximize impact absorption.', rank: 1, head: 362, chest: 1, hands: 1, waist: 1, legs: 1 },
        { name: 'Gastodon ß', description: 'The thick, stiff Gastodon hair used in this armor was treated to maximize impact absorption.', rank: 1, head: 363, chest: 1, hands: 1, waist: 1, legs: 1 },

        { name: 'Barno α', description: 'Chest armor of carefully tanned Barnos hide that won\'t degrade, even in the worst conditions.', rank: 1, head: 1, chest: 364, hands: 1, waist: 1, legs: 1 },
        { name: 'Barno ß', description: 'Chest armor of carefully tanned Barnos hide that won\'t degrade, even in the worst conditions.', rank: 1, head: 1, chest: 365, hands: 1, waist: 1, legs: 1 },

        { name: 'Dodogama α', description: 'Thoroughly tempered to extreme hardness, this Dodogama armor will outlasta any impact.', rank: 1, head: 366, chest: 367, hands: 368, waist: 369, legs: 370 },
        { name: 'Dodogama ß', description: 'Thoroughly tempered to extreme hardness, this Dodogama armor will outlasta any impact.', rank: 1, head: 371, chest: 372, hands: 373, waist: 374, legs: 375 },

        { name: 'Zorah α', description: 'Stalwart as a mountain, this Zorah Magdaros armor renders its wearer unfazed by any hardship.', rank: 1, head: 376, chest: 377, hands: 378, waist: 379, legs: 380 },
        { name: 'Zorah ß', description: 'Stalwart as a mountain, this Zorah Magdaros armor renders its wearer unfazed by any hardship.', rank: 1, head: 381, chest: 382, hands: 383, waist: 384, legs: 385 },

        { name: 'High Metal α', description: 'Armor made from a generous portioin of ore. Don\'t worry, it breathes surprisingly well.', rank: 1, head: 386, chest: 387, hands: 388, waist: 389, legs: 390 },
        { name: 'High Metal ß', description: 'Armor made from a generous portioin of ore. Don\'t worry, it breathes surprisingly well.', rank: 1, head: 391, chest: 392, hands: 393, waist: 394, legs: 395 },

        { name: 'Ingot α', description: 'Armor crafted from brilliant gold ore. Its color and design are both highly pleasing.', rank: 1, head: 396, chest: 397, hands: 398, waist: 399, legs: 400 },
        { name: 'Ingot ß', description: 'Armor crafted from brilliant gold ore. Its color and design are both highly pleasing.', rank: 1, head: 401, chest: 402, hands: 403, waist: 404, legs: 405 },

        { name: 'Faux Felyne α', description: 'A mask fashioned in the shape of a Felyne\'s face. Every last fur strand is accounted for.', rank: 1, head: 406, chest: 1, hands: 1, waist: 1, legs: 1 },
        
        { name: 'Strategist α', description: 'A Guild-Workshop collaboration. They help you hunt by making you look very slightly smarter.', rank: 1, head: 407, chest: 1, hands: 1, waist: 1, legs: 1 },

        { name: 'Lavasioth α', description: 'Thick Lavasioth shell underwent a painstaking treatment process to yield this armor. Truly a work of art.', rank: 1, head: 408, chest: 409, hands: 410, waist: 411, legs: 412 },
        { name: 'Lavasioth ß', description: 'Thick Lavasioth shell underwent a painstaking treatment process to yield this armor. Truly a work of art.', rank: 1, head: 413, chest: 414, hands: 415, waist: 416, legs: 417 },

        { name: 'Legiana α', description: 'Armor worn by proven masters of the wind. Made of Legiana parts, it glistens a piercing blue.', rank: 1, head: 418, chest: 419, hands: 420, waist: 421, legs: 422 },
        { name: 'Legiana ß', description: 'Armor worn by proven masters of the wind. Made of Legiana parts, it glistens a piercing blue.', rank: 1, head: 423, chest: 424, hands: 425, waist: 426, legs: 427 },

        { name: 'Odogaron α', description: 'None who lay eyes upon this Odogaron armor are seen again, as it erodes the wearer\'s sanity.', rank: 1, head: 428, chest: 429, hands: 430, waist: 431, legs: 432 },
        { name: 'Odogaron ß', description: 'None who lay eyes upon this Odogaron armor are seen again, as it erodes the wearer\'s sanity.', rank: 1, head: 433, chest: 434, hands: 435, waist: 436, legs: 437 },
        
        { name: 'Rathalos α', description: 'Crafted from parts carved from the King of the Skies, this crimson armor boasts overwhelming defense.', rank: 1, head: 438, chest: 439, hands: 440, waist: 441, legs: 442 },
        { name: 'Rathalos ß', description: 'Crafted from parts carved from the King of the Skies, this crimson armor boasts overwhelming defense.', rank: 1, head: 443, chest: 444, hands: 445, waist: 446, legs: 447 },

        { name: 'Rath Soul α', description: 'Azure armor imbued with absolute power. Those who wear it are destined to make history.', rank: 1, head: 448, chest: 449, hands: 450, waist: 451, legs: 452 },
        { name: 'Rath Soul ß', description: 'Azure armor imbued with absolute power. Those who wear it are destined to make history.', rank: 1, head: 453, chest: 454, hands: 455, waist: 456, legs: 457 },

        { name: 'Diablos α', description: 'The bold horns on this Diablos armor are a challenge to any who doubt your rule over the sands.', rank: 1, head: 458, chest: 459, hands: 460, waist: 461, legs: 462 },
        { name: 'Diablos ß', description: 'The bold horns on this Diablos armor are a challenge to any who doubt your rule over the sands.', rank: 1, head: 463, chest: 464, hands: 465, waist: 466, legs: 467 },

        { name: 'Uragaan α', description: 'Heavy armor made of heavy Uragaan parts, and every ounce of it adds to its defense.', rank: 1, head: 468, chest: 469, hands: 470, waist: 471, legs: 472 },
        { name: 'Uragaan ß', description: 'Heavy armor made of heavy Uragaan parts, and every ounce of it adds to its defense.', rank: 1, head: 473, chest: 474, hands: 475, waist: 476, legs: 477 },

        { name: 'Bazel α', description: 'The earth quivers beneath each step taken in this Bazelgeuse armor. Behind you, a scorched path.', rank: 1, head: 478, chest: 479, hands: 480, waist: 481, legs: 482 },
        { name: 'Bazel ß', description: 'The earth quivers beneath each step taken in this Bazelgeuse armor. Behind you, a scorched path.', rank: 1, head: 483, chest: 484, hands: 485, waist: 486, legs: 487 },

        { name: 'Damascus α', description: 'This legendary iron steel armor is said to lead its wearer down the conqueror\'s path.', rank: 1, head: 488, chest: 489, hands: 490, waist: 491, legs: 492 },
        { name: 'Damascus ß', description: 'This legendary iron steel armor is said to lead its wearer down the conqueror\'s path.', rank: 1, head: 493, chest: 494, hands: 495, waist: 496, legs: 497 },

        { name: 'Dober α', description: 'Armor fashioned from obsidian bone of unknown provenance. It resembles an all-powerful monster.', rank: 1, head: 498, chest: 499, hands: 500, waist: 501, legs: 502 },
        { name: 'Dober ß', description: 'Armor fashioned from obsidian bone of unknown provenance. It resembles an all-powerful monster.', rank: 1, head: 503, chest: 504, hands: 505, waist: 506, legs: 507 },

        { name: 'Death Stench α', description: 'Accursed armor, said to bring death. The wearer hears echoes of their victim\'s death throes.', rank: 1, head: 508, chest: 509, hands: 510, waist: 511, legs: 512 },
        { name: 'Death Stench ß', description: 'Accursed armor, said to bring death. The wearer hears echoes of their victim\'s death throes.', rank: 1, head: 513, chest: 514, hands: 515, waist: 516, legs: 517 },

        { name: 'Skull α', description: 'Impersonate the dead with this ghoulish mask. Worn too long, it might set your soul to wander.', rank: 1, head: 518, chest: 1, hands: 1, waist: 1, legs: 1 },

        { name: 'Nergigante α', description: 'This Nergigante armor is said to feed on a hunter\'s spirit in exchange for its brutal power.', rank: 1, head: 519, chest: 520, hands: 521, waist: 522, legs: 523 },
        { name: 'Nergigante ß', description: 'This Nergigante armor is said to feed on a hunter\'s spirit in exchange for its brutal power.', rank: 1, head: 524, chest: 525, hands: 526, waist: 527, legs: 528 },

        { name: 'Teostra α', description: 'Forged from parts carved from a Teostra, this armor is host to the Flame King Dragon\'s soul.', rank: 1, head: 529, chest: 530, hands: 531, waist: 532, legs: 533 },
        { name: 'Teostra ß', description: 'Forged from parts carved from a Teostra, this armor is host to the Flame King Dragon\'s soul.', rank: 1, head: 534, chest: 535, hands: 536, waist: 537, legs: 538 },

        { name: 'Kushala α', description: 'Armor made from Kushala Daora parts. It resembles the statue of an ancient deity come to life.', rank: 1, head: 539, chest: 540, hands: 541, waist: 542, legs: 543 },
        { name: 'Kushala ß', description: 'Armor made from Kushala Daora parts. It resembles the statue of an ancient deity come to life.', rank: 1, head: 544, chest: 545, hands: 546, waist: 547, legs: 548 },

        { name: 'Vaal Hazak α', description: 'Whispers haunt this Vaal Hazak armor, urging any who don it to embrace despair, and consume...', rank: 1, head: 549, chest: 550, hands: 551, waist: 552, legs: 553 },
        { name: 'Vaal Hazak ß', description: 'Whispers haunt this Vaal Hazak armor, urging any who don it to embrace despair, and consume...', rank: 1, head: 554, chest: 555, hands: 556, waist: 557, legs: 558 },

        { name: 'Xeno\'jiiva α', description: 'This Xeno\'jiiva armor hums with energy. If properly controlled, it grants the wearer vast power.', rank: 1, head: 559, chest: 560, hands: 561, waist: 562, legs: 563 },
        { name: 'Xeno\'jiiva ß', description: 'This Xeno\'jiiva armor hums with energy. If properly controlled, it grants the wearer vast power.', rank: 1, head: 564, chest: 565, hands: 566, waist: 567, legs: 568 },

        { name: 'Dragonking α', description: 'Put this baby on to double your manliness instantly. Ideal for the grittier guys and gals.', rank: 1, head: 569, chest: 1, hands: 1, waist: 1, legs: 1 },
      ]);
    });
};
