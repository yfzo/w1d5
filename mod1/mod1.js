var numList = [];

var sortList = function () {
  return numList.sort(function(a, b) {
    return a - b;
  })
}

module.exports = {
  addToList: function (num) {
  numList.push(num);
  },
  getSortedList: function () {
    return sortList();
  }
}