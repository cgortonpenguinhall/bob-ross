
getTableInfo();

async function getTableInfo() {
  let response = await fetch('./paintings');
  let paintingData = await response.json();
  for (let i = 0; i < 10; i++) {
    insertTableInfo((i + 1), paintingData[i].img_src, paintingData[i].painting_title, paintingData[i].season, paintingData[i].episode, paintingData[i].colors, paintingData[i].youtube_src);
  }
}

function insertTableInfo(rowNum, imgSource, pntTitle, season, episode,colors, ytSource ) {
  var table = document.getElementById("paintingsTable");
  var row = table.insertRow(rowNum);
  var imgSourceCell = row.insertCell(0);
  var pntTitleCell = row.insertCell(1);
  var seasonCell = row.insertCell(2);
  var episodeCell = row.insertCell(3);
  var ytSourceCell = row.insertCell(4);
  var colorsCell = row.insertCell(5);
  imgSourceCell.innerHTML = "<img src="+imgSource+"></img>";
  pntTitleCell.innerHTML = pntTitle;
  seasonCell.innerHTML = season;
  episodeCell.innerHTML = episode;
  ytSourceCell.innerHTML = ytSource;
  colorsCell.innerHTML = colors;
}
