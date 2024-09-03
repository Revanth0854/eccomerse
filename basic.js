for (let i = 3; i <= 5; i++) {
    if (i == 4) {
        continue;
    }
    console.log(i ** 3)
    for (let j = 2; j <= 6; j++) {

        if (j == 4) {
            break;
        }
        console.log(j * 2);
        if(i==j){
            console.log(i,j);
        }

    }
}