const freedomFightersData = [
  {
    id: 1,
    name: "Mahatma Gandhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/220px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
  },
  {
    id: 2,
    name: "Bhagat Singh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bhagat_Singh_1929.jpg/220px-Bhagat_Singh_1929.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Bhagat_Singh",
  },
  {
    id: 3,
    name: "Rani Lakshmibai",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Rani_of_jhansi.jpg/220px-Rani_of_jhansi.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Rani_of_Jhansi",
  },
  {
    id: 4,
    name: "Netaji Subhas Chandra Bose",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Subhas_Chandra_Bose_NRB.jpg/220px-Subhas_Chandra_Bose_NRB.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Subhas_Chandra_Bose",
  },
  {
    id: 5,
    name: "Sarojini Naidu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sarojini_Naidu.png/220px-Sarojini_Naidu.png",
    wikipedia: "https://en.wikipedia.org/wiki/Sarojini_Naidu",
  },
  {
    id: 6,
    name: "Chandrashekhar Azad",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chandrasekhar_Azad.jpg/220px-Chandrasekhar_Azad.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Chandrashekhar_Azad",
  },
  {
    id: 7,
    name: "Lala Lajpat Rai",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahatma_Lala_Lajpat_Rai.jpg/220px-Mahatma_Lala_Lajpat_Rai.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Lala_Lajpat_Rai",
  },
  {
    id: 8,
    name: "Bhikaji Cama",
    image: "https://yourviews.mindstick.com/ViewSolution/83cf110f-2fb7-43b8-8847-44c75338eb0d/images/83cf110f-2fb7-43b8-8847-44c75338eb0d.JPG",
    wikipedia: "https://en.wikipedia.org/wiki/Bhikaiji_Cama",
  },

  {
    id: 9,
    name: "Birsa Munda",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Birsa_Munda%2C_photograph_in_Roy_%281912-72%29.JPG/220px-Birsa_Munda%2C_photograph_in_Roy_%281912-72%29.JPG",
    wikipedia: "https://en.wikipedia.org/wiki/Birsa_Munda",
  },
  {
    id: 10,
    name: "Khudiram Bose",
    image: "https://i.timesnowhindi.com/stories/Khudiram_Bose_0.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Khudiram_Bose",
  },
  {
    id: 11,
    name: "Rajendra Prasad",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Rajendra_Prasad_%28Indian_President%29%2C_signed_image_for_Walter_Nash_%28NZ_Prime_Minister%29%2C_1958_%2816017609534%29.jpg/220px-Rajendra_Prasad_%28Indian_President%29%2C_signed_image_for_Walter_Nash_%28NZ_Prime_Minister%29%2C_1958_%2816017609534%29.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Rajendra_Prasad",
  },
  {
    id: 12,
    name: "Bipin Chandra Pal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bipin_Chandra_Pal.jpg/220px-Bipin_Chandra_Pal.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Bipin_Chandra_Pal",
  },
  {
    id: 13,
    name: "Bal Gangadhar Tilak",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lokmanya_Gangadhar_Tilak.jpg/220px-Lokmanya_Gangadhar_Tilak.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Bal_Gangadhar_Tilak",
  },
  {
    id: 14,
    name: "Madan Mohan Malaviya",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mahamana_Malaviya.jpg/200px-Mahamana_Malaviya.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Madan_Mohan_Malaviya",
  },
  {
    id: 17,
    name: "Gopal Krishna Gokhale",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/GKGokhale.jpg/220px-GKGokhale.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Gopal_Krishna_Gokhale",
  },
  {
    id: 18,
    name: "Kanaklata Barua",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/%E0%A6%95%E0%A6%A8%E0%A6%95%E0%A6%B2%E0%A6%A4%E0%A6%BE%E0%A7%B0_%E0%A6%AA%E0%A7%8D%E0%A7%B0%E0%A6%A4%E0%A6%BF%E0%A6%AE%E0%A7%81%E0%A7%B0%E0%A7%8D%E0%A6%A4%E0%A6%BF.JPG/240px-%E0%A6%95%E0%A6%A8%E0%A6%95%E0%A6%B2%E0%A6%A4%E0%A6%BE%E0%A7%B0_%E0%A6%AA%E0%A7%8D%E0%A7%B0%E0%A6%A4%E0%A6%BF%E0%A6%AE%E0%A7%81%E0%A7%B0%E0%A7%8D%E0%A6%A4%E0%A6%BF.JPG",
    wikipedia: "https://en.wikipedia.org/wiki/Kanaklata_Barua",
  },
  {
    id: 19,
    name: "Jawaharlal Nehru",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jnehru.jpg/220px-Jnehru.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Jawaharlal_Nehru",
  },
  {
    id: 20,
    name: "Vinoba Bhave",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Vinoba_Bhave_1983_stamp_of_India.jpg/220px-Vinoba_Bhave_1983_stamp_of_India.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Vinoba_Bhave",
  },
  {
    id: 22,
    name: "Rajguru",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Shivaram_Rajguru_2013_stamp_of_India.jpg/250px-Shivaram_Rajguru_2013_stamp_of_India.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Shivaram_Rajguru",
  },
  {
    id: 23,
    name: "Lal Bahadur Shastri",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lal_Bahadur_Shastri_%28from_stamp%29.jpg/220px-Lal_Bahadur_Shastri_%28from_stamp%29.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Lal_Bahadur_Shastri",
  },
  {
    id: 24,
    name: "Ashfaqulla Khan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ashfaqulla_Khan_2619.JPG/220px-Ashfaqulla_Khan_2619.JPG",
    wikipedia: "https://en.wikipedia.org/wiki/Ashfaqulla_Khan",
  },

  {
    id: 25,
    name: "Maulana Azad",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Maulana_Abul_Kalam_Azad.jpg/220px-Maulana_Abul_Kalam_Azad.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Maulana_Azad",
  },
  {
    id: 26,
    name: "Begum Hazrat Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Begum_hazrat_mahal.jpg/200px-Begum_hazrat_mahal.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Begum_Hazrat_Mahal",
  },
  {
    id: 29,
    name: "C. Rajagopalachari",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Chakravarthi_Rajagopalachari_1973_stamp_of_India.jpg/220px-Chakravarthi_Rajagopalachari_1973_stamp_of_India.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/C._Rajagopalachari",
  },
  {
    id: 30,
    name: "Chittaranjan Das",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Chittaranjan_Das_2.jpg/220px-Chittaranjan_Das_2.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Chittaranjan_Das",
  },
  {
    id: 31,
    name: "Dadabhai Naoroji",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Dadabhai_Naoroji_1889.jpg/220px-Dadabhai_Naoroji_1889.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Dadabhai_Naoroji",
  },

  {
    id: 32,
    name: "Jatindra Nath Das",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Martyr_Jatindranath_Das.jpg/220px-Martyr_Jatindranath_Das.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Jatindra_Nath_Das",
  },
  {
    id: 34,
    name: "Kittur Chennamma",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kittur_Chenamma.jpg/270px-Kittur_Chenamma.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Kittur_Chennamma",
  },
  {
    id: 35,
    name: "Lachit Borphukan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lachit_Barphukan%27s_maidam2.JPG/220px-Lachit_Barphukan%27s_maidam2.JPG",
    wikipedia: "https://en.wikipedia.org/wiki/Lachit_Borphukan",
  },
  {
    id: 36,
    name: "Mangal Pandey",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mangal_Pandey_1984_stamp_of_India.jpg/220px-Mangal_Pandey_1984_stamp_of_India.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Mangal_Pandey",
  },
  {
    id: 37,
    name: "Matangini Hazra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/%22Gandhi_Buri%22_-_Matangini_Hazra.jpg/220px-%22Gandhi_Buri%22_-_Matangini_Hazra.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Matangini_Hazra",
  },
  {
    id: 38,
    name: "Ram Prasad Bismil",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Pandit_Ram_Prasad_Bismil.jpg/200px-Pandit_Ram_Prasad_Bismil.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Ram_Prasad_Bismil",
  },
  {
    id: 39,
    name: "Rani Gaidinliu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Rani_Gaidinliu_1996_stamp_of_India.jpg/220px-Rani_Gaidinliu_1996_stamp_of_India.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Rani_Gaidinliu",
  },
  {
    id: 40,
    name: "Vir Savarkar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/VD_Savarkar.jpg/220px-VD_Savarkar.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Veer_Savarkar",
  },
  {
    id: 41,
    name: "Sardar Patel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sardar_patel_%28cropped%29.jpg/220px-Sardar_patel_%28cropped%29.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Vallabhbhai_Patel",
  },
  {
    id: 42,
    name: "Rani Padmini",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/22Princess_Padmavati_ca._1765_Biblioth%C3%A8que_nationale_de_France%2C_Paris.jpg/220px-22Princess_Padmavati_ca._1765_Biblioth%C3%A8que_nationale_de_France%2C_Paris.jpg",
    wikipedia: "https://en.wikipedia.org/wiki/Rani_Padmini",
  },
  
];

export default freedomFightersData;
