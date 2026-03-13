import { Shayari } from "../types";

export const initialShayaris: Shayari[] = [
  {
    id: "1",
    text: "Ishq par zor nahin hai yeh woh aatish Ghalib,\nKi lagaye na lage aur bujhaye na bane.",
    shayar: "Mirza Ghalib",
    dateAdded: new Date(Date.now() - 100000000).toISOString(),
  },
  {
    id: "2",
    text: "Mujhse pehli si mohabbat mere mehboob na maang,\nMai ne samjha tha ke tu hai to darakhshan hai hayat.",
    shayar: "Faiz Ahmad Faiz",
    dateAdded: new Date(Date.now() - 80000000).toISOString(),
  },
  {
    id: "3",
    text: "Tum aaye to aaya mujhe yaad gali mein,\nChand nikla tha aur barsaat hui thi.",
    shayar: "Nasir Kazmi",
    dateAdded: new Date(Date.now() - 60000000).toISOString(),
  },
  {
    id: "4",
    text: "Safar main dhoop to hogi, jo chal sako to chalo,\nSabhi hain bheed main, tum bhi nikal sako to chalo.",
    shayar: "Nida Fazli",
    dateAdded: new Date(Date.now() - 40000000).toISOString(),
  },
  {
    id: "5",
    text: "Hazaaron khwahishein aisi ke har khwahish pe dum nikle,\nBohat niklay mere armaan, lekin phir bhi kam nikle.",
    shayar: "Mirza Ghalib",
    dateAdded: new Date(Date.now() - 20000000).toISOString(),
  },
  {
    id: "6",
    text: "Wo aaye bazm mein itna to bark tha usne,\nKe ek shamma bujhi aur hazaar jal gayin.",
    shayar: "Daagh Dehlvi",
    dateAdded: new Date().toISOString(),
  }
];