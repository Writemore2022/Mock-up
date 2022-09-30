const first = document.querySelector('#locations');
const second = document.querySelector('#purposes');
const recommend = document.querySelector('#recommend');

let select = {};

function goPurposes(loca) {
  first.style.WebkitAnimation = 'fadeOut 1s';
  first.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    second.style.WebkitAnimation = 'fadeIn 1s';
    second.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      first.style.display = 'none';
      second.style.display = 'block';
    }, 450);
  });

  select.location = loca;
}

function goRecommend(purp) {
  second.style.WebkitAnimation = 'fadeOut 1s';
  second.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    recommend.style.WebkitAnimation = 'fadeIn 1s';
    recommend.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      second.style.display = 'none';
      recommend.style.display = 'block';
    }, 450);
  });

  select.purpose = purp;

  recommendGroup();
  addRecommend();
}

function recommendGroup() {
  let data = [];

  sl = select.location;
  sp = select.purpose;

  for (let i = 0; i < group.length; i++) {
    if (group[i].location === sl && group[i].purpose === sp) {
      data.push(group[i]);
    }
  }
  for (let i = 0; i < group.length; i++) {
    if (group[i].location === sl && group[i].purpose === sp) {
    } else if (group[i].location === sl || group[i].purpose === sp) {
      data.push(group[i]);
    }
  }

  return data;
}

function addRecommend() {
  const groupName1 = document.querySelector('.groupName1');
  groupName1.innerHTML = recommendGroup()[0].name;

  const groupLocation1 = document.querySelector('.groupLocation1');
  groupLocation1.innerHTML = '지역: ' + recommendGroup()[0].location;

  const groupPurpose1 = document.querySelector('.groupPurpose1');
  groupPurpose1.innerHTML = '목적: ' + recommendGroup()[0].purpose;
}
