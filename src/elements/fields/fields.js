var json = {
  "entries": [{
    "type": "div",
    "key": "info",
    "text": "====INFO===="
  }, {
    "type": "field",
    "key": "noc",
    "label": "Name of Caller",
    "tab": true,
    "rows": 1,
    "pre": "-NOC: [",
    "post": "]",
    "linked": "noa"
  }, {
    "type": "field",
    "key": "noa",
    "label": "Name on the Account",
    "tab": false,
    "rows": 1,
    "pre": "-NOA: [",
    "post": "]",
    "linked": "noc"
  }]
}