/*
You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times you showed an ad on each individual domain. Every line consists of a count and a domain name. It looks like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "2,en.wikipedia.org",
     "1,es.wikipedia.org" ]

Write a function that interprets this input and outputs the number of hits that were recorded on each domain AND each domain under it. For example, a click on "sports.yahoo.com" counts for "sports.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "sports" and "sports.yahoo" are not valid domains.)

Expected output (in any order):
1320    com
 900    google.com
 410    yahoo.com
  60    mail.yahoo.com
  10    mobile.sports.yahoo.com
  50    sports.yahoo.com
  10    stackoverflow.com
   3    org
   3    wikipedia.org
   2    en.wikipedia.org
   1    es.wikipedia.org

*/

const countDomain = array => {
  //create a hash table
  //loop through array
   // for each string
     //get count by splitting str by','
     //split string into items by '.'
     // iterate over items from the end (e.g., com) 
       // if current item is not last item(e.g., com), item = '.' + item

     // add domain to hashtable, if not exist, value = count, if exist, addition.

  //return hash table

  let hashtable = {};
  for (let string of array) {
    let countItems = string.split(',')
    let count = parseInt(countItems[0]);
    let domains = countItems[1].split('.');
    let item = ''
    for (let i = domains.length-1; i >= 0; i--) {
      if(i != domains.length-1) {     
        item ='.' + item;
      }
      item = domains[i] + item

      if(!hashtable[item]) {
        hashtable[item] = count;
      } else {
        hashtable[item] = hashtable[item] + count;
      }
    }
  }

  return hashtable;
}