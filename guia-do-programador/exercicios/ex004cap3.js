 let msg = ''; i = 0
 while (i <= 20) {
    if ( i != 20) {
        msg += i + ','
    } else {
        msg += i
    }
    i += 2
 }
 console.log(msg)