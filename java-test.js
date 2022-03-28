<html>
<head>
<style>
.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
    
</head>
<body>
<div class="row">
  <div class="column"></div>
  <div class="column"></div>
</div>
</body>
</html>

