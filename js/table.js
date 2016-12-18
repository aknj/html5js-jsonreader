let _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');

function buildHtmlTable(arr) {
  let table = _table_.cloneNode(false),
      columns = addAllColumnHeaders(arr, table);
  table.setAttribute('class', 'table-fill');
  for (let i = 0, maxi = arr.length; i < maxi; ++i) {
    let tr = _tr_.cloneNode(false);
    for (let j = 0, maxj = columns.length; j < maxj; ++j) {
      let td = _td_.cloneNode(false);
      td.appendChild(document.createTextNode(arr[i][columns[j]] || 0));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

function addAllColumnHeaders(arr, table) {
  let columnSet = [],
      tr = _tr_.cloneNode(false);
  for (let i = 0, l = arr.length; i < l; i++) {
    for (let key in arr[i]) {
      if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
        columnSet.push(key);
        let th = _th_.cloneNode(false);
        th.appendChild(document.createTextNode(key));
        tr.appendChild(th);
      }
    }
  }
  table.appendChild(tr);
  return columnSet;
}
