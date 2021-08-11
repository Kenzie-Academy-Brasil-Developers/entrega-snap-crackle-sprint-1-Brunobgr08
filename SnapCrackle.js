function snapCrackle(maxValue) {
    let arrRet = [];
    let msgRet ='';
        for ( let i = 1; i <= maxValue; i++ ){
            if ( i % 2 !== 0 && i % 5 === 0 ){
                arrRet.push( 'SnapCrackle' );
            } else if ( i % 2 !== 0 ){
                arrRet.push( 'Snap' );
            } else if ( i % 5 === 0 ){
                arrRet.push( 'Crackle' );
            } else{
                arrRet.push(i);
            }
        }
    msgRet = arrRet.join(', ');
    return msgRet;
  } 
  
  console.log(snapCrackle());

  function numPrimo(num){
    let divisores = 0;
    for ( let ind = 1; ind <= num; ind++){
            if (num % ind === 0){
                divisores++;
            }
    }
    if (divisores === 2){
          return true;
    } return false;
}

function snapCracklePrime(maxValue) {
    let arrRet = [];
    let msgRet = '';
    for (let i = 1; i <= maxValue; i++){
        if (i % 2 !== 0 && i % 5 === 0){
                if (numPrimo(i)){
                    arrRet.push('SnapCracklePrime');
                } else 
                arrRet.push('SnapCrackle');
        } else
        if (i % 2 !== 0){
            if (numPrimo(i)){
                arrRet.push('SnapPrime');
                } else 
                arrRet.push('Snap');
        } else
        if (i % 5 ===0){
            if (numPrimo(i)){
                arrRet.push('CracklePrime');
                } else 
                arrRet.push('Crackle');
        } else {
            if (numPrimo(i)){
                arrRet.push('Prime');
            } else 
            arrRet.push(i);
        }
    }
    msgRet = arrRet.join(', ');
    return msgRet;
  } 
  
  console.log(snapCracklePrime());