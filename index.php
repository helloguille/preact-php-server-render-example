<?php
    $startTime = microtime(true);  

    $props = array();
    $props["var"] = "server";
?>
<html>
  <head>
    <title>Preact-PHPv8js Example</title>
  </head>
  <body>
    <div id="app">
    <?php
    $v8 = new V8Js();
    try {
      $react = [
        file_get_contents("dist/bundle-server.js"),
        'EntryPoint.render('.json_encode($props).');'
      ];
      $v8->executeString(implode(PHP_EOL, $react), 'preact-on-server');
    } catch (V8JsException $e) {
      var_dump($e);
    }
    ?>
    </div>
  </body>
  <script src="dist/bundle-client.js"></script>
  <script>
  window.onload = function () {
    EntryPoint.render_client({var: "client"});
  };
  </script>
  <?php
      $endTime = microtime(true);  
      $elapsed = $endTime - $startTime;
      echo "Execution time : $elapsed seconds";
  ?>
</html>

