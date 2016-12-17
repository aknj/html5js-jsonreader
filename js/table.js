var _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');

function buildHtmlTable(arr) {
  var table = _table_.cloneNode(false),
      columns = addAllColumnHeaders(arr, table);
  table.setAttribute('class', 'table-fill')
  for (var i = 0, maxi = arr.length; i < maxi; ++i) {
    var tr = _tr_.cloneNode(false);
    for (var j = 0, maxj = columns.length; j < maxj ; ++j) {
      var td = _td_.cloneNode(false);
      cellValue = arr[i][columns[j]];
      td.append(document.createTextNode(arr[i][columns[j]] || 0));
      tr.append(td);
    }
    table.append(tr);
  }
  return table;
}

function addAllColumnHeaders(arr, table) {
  var columnSet = [],
      tr = _tr_.cloneNode(false);
  for (var i = 0, l = arr.length; i < l; i++) {
    for (var key in arr[i]) {
      if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
        columnSet.push(key);
        var th = _th_.cloneNode(false);
        th.appendChild(document.createTextNode(key));
        tr.append(th);
      }
    }
  }
  table.append(tr);
  return columnSet;
}
