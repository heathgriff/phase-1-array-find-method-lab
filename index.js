// const superbowlWin = record.find(function(result, year){
//     if (result === W) {
//         return year;
//     } else return undefined;
// })

function superbowlWin(record) {
    let winningYear = record.find(obj => obj.result === 'W')
    return (winningYear ? winningYear.year : undefined )
}

