console.log('data', githubData);

function checkId (data) {
    return data.id == '8030403992';
}

 const myData = githubData.find(checkId);
 console.log('myData', myData);