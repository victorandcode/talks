function prettifyLog(
    author, // Should not have spaces around it
    hash, // Should be all in lowercase
    numberOfCommits, // This comes as hexadecimal but should be in base 10,
    branch // You should remove origin/ from this string
) {
    //Do NOT replace the ` in the next line. They should stay as they are. Replace TODO with the necessary code
    return console.log(
        `The author ${author}\'s last hash is ${hash}, and has a total of ${numberOfCommits} commits in branch ${branch}`
    );
}

prettifyLog('  John the hacker    ', 'BAsda22ok3432ij', '0x10', 'origin/master');
