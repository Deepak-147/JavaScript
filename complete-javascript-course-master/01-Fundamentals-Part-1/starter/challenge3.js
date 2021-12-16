const avgScoreDolphins = (97 + 112 + 101) / 3;
const avgScoreKoalas = (109 + 95 + 106) / 3;

console.log(avgScoreDolphins, avgScoreKoalas);

minScore = 100;

if (avgScoreDolphins > minScore) {
    if (avgScoreDolphins == avgScoreDolphins) {
        console.log(`It's a draw!!`);
    }
    else if (avgScoreDolphins > avgScoreKoalas) {
        console.log('Dolphins win!');
    }
    else {
        console.log('Koalas win!');
    }
}
else if (avgScoreKoalas > minScore) {
    if (avgScoreKoalas == avgScoreDolphins) {
        console.log(`It's a draw!!`);
    }
    else {
        console.log('Koalas win!');
    }
}