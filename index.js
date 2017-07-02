function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')
  for (let i=0;i<lis.length;i++){
    lis[i].innerHTML = (i+n)
  }
  }

  function deepestChild(){
    let list = document.querySelector(`div#grand-node`)
    let nextlist = list.children[0]

    while (nextlist){
      list = nextlist
      nextlist = list.children[0] // shift through each node until we reach end
    }
    return list
  }
