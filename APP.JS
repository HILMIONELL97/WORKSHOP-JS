                             //SOLUTION DE L ENONCE 1 //
                             // DECLARATION DU FONCTION //
                             function addFavoriteBook(bookName) {
                                 var FavoriteBooks = ["FI9HO LMOSLIM", "CHAR7O BNO KATIR", "7ISSNO LMOSSLIM"];
                                 var book = FavoriteBooks.includes('Great');
                                 console.log(book);
                                 // L UTILUSATION DU BOUCLE FOR//
                                 if (book == false //!== true//
                                 ) {
                                     FavoriteBooks.push('Great')
                                 } else {
                                     console.log('Déja Vu')
                                 }
                                 //  DECLARATION DU FONCTION N2 //
                                 function printFavoriteBooks() {
                                     var num = FavoriteBooks.length;
                                     console.log('livre' + 'favoris:' + ' ' + num);
                                     for (let element of FavoriteBooks) {
                                         console.log(element)
                                     }
                                     // AUTREMENT DIT //
                                     // for (let i=0; i< num; i++){ console.log(FavoriteBooks[i]);}
                                 }
                                 printFavoriteBooks()

                             }
                             addFavoriteBook();
                             //FIN